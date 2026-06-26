<template>
  <PreviewBanner name="SISI" cred-email="designer@sisi.mx" />

  <div class="sisi-login-root">
    <!-- BG noise/gradient overlay -->
    <div class="bg-overlay"></div>

    <div class="login-container">
      <!-- LEFT: logo side -->
      <div class="login-left">
        <div class="logo-block">
          <span class="logo-text">SISI</span>
          <span class="logo-sub">Sistema de Solicitudes<br>Internas</span>
        </div>
        <div class="tagline">
          <span class="tag-pill">📫 Diseño</span>
          <span class="tag-pill">🎯 Marketing</span>
          <span class="tag-pill">🛠️ TI</span>
          <span class="tag-pill">🚀 Dirección</span>
        </div>
      </div>

      <!-- RIGHT: glassmorphic card -->
      <div class="login-glass">
        <h2 class="glass-title">Bienvenido</h2>
        <p class="glass-sub">Ingresa a tu cuenta para ver tus solicitudes</p>

        <form @submit.prevent="handleLogin" class="glass-form">
          <div class="field">
            <label>📧 Correo electrónico</label>
            <input v-model="form.email" type="email" placeholder="designer@sisi.mx" />
          </div>
          <div class="field">
            <label>🔒 Contraseña</label>
            <div class="pass-row">
              <input v-model="form.password" :type="show ? 'text' : 'password'" placeholder="demo1234" />
              <button type="button" class="eye-toggle" @click="show = !show">
                {{ show ? '🙈' : '👁️' }}
              </button>
            </div>
          </div>

          <div class="remember-row">
            <label class="remember-label">
              <input type="checkbox" v-model="remember" />
              <span>Recordarme</span>
            </label>
            <a class="forgot-link">¿Olvidaste tu contraseña?</a>
          </div>

          <p v-if="error" class="form-error">{{ error }}</p>
          <p class="hint-text">Demo: <code>designer@sisi.mx</code> / <code>demo1234</code></p>

          <button type="submit" class="submit-btn" :disabled="loading">
            {{ loading ? 'Iniciando...' : 'Iniciar sesión' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSisiAuth } from '../../../stores/sisi-auth.js'
import PreviewBanner from '../PreviewBanner.vue'

const router = useRouter()
const auth = useSisiAuth()
const form = ref({ email: 'designer@sisi.mx', password: 'demo1234' })
const show = ref(false)
const remember = ref(false)
const loading = ref(false)
const error = ref('')

async function handleLogin() {
  loading.value = true
  error.value = ''
  const ok = await auth.signIn(form.value)
  loading.value = false
  if (ok) router.push('/preview/sisi/app/board')
  else error.value = 'Credenciales incorrectas'
}
</script>

<style scoped>
.sisi-login-root {
  min-height: 100vh;
  padding-top: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: #0d0d1a;
  font-family: 'Inter', sans-serif;
}

.bg-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(164,53,254,0.15) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(99,102,241,0.1) 0%, transparent 50%),
    radial-gradient(ellipse at 60% 80%, rgba(164,53,254,0.08) 0%, transparent 50%);
  pointer-events: none;
}

.login-container {
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  max-width: 820px;
  min-height: 480px;
  gap: 0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 80px rgba(0,0,0,0.5);
  margin: 20px;
}

/* LEFT */
.login-left {
  width: 40%;
  background: rgba(164,53,254,0.12);
  border: 1px solid rgba(164,53,254,0.2);
  border-right: none;
  border-radius: 20px 0 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 30px;
  gap: 32px;
}

.logo-block { text-align: center; }
.logo-text {
  display: block;
  font-size: 52px;
  font-weight: 900;
  color: #A435FE;
  letter-spacing: 5px;
  text-shadow: 0 0 30px rgba(164,53,254,0.5);
}
.logo-sub {
  display: block;
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  margin-top: 8px;
  line-height: 1.5;
}

.tagline {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
}
.tag-pill {
  background: rgba(164,53,254,0.15);
  border: 1px solid rgba(164,53,254,0.3);
  color: rgba(255,255,255,0.7);
  padding: 6px 16px;
  border-radius: 99px;
  font-size: 12px;
  font-weight: 500;
}

/* RIGHT: glassmorphic */
.login-glass {
  flex: 1;
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 0 20px 20px 0;
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.glass-title {
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-bottom: 6px;
}
.glass-sub {
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  margin-bottom: 32px;
}

.glass-form { display: flex; flex-direction: column; gap: 16px; }

.field label {
  display: block;
  font-size: 13px;
  color: rgba(255,255,255,0.7);
  margin-bottom: 6px;
  font-weight: 500;
}
.field input {
  width: 100%;
  padding: 11px 14px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  color: white;
  font-size: 14px;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.field input::placeholder { color: rgba(255,255,255,0.3); }
.field input:focus {
  outline: none;
  border-color: #A435FE;
  box-shadow: 0 0 0 3px rgba(164,53,254,0.2);
}

.pass-row { position: relative; }
.pass-row input { width: 100%; padding-right: 44px; }
.eye-toggle {
  position: absolute;
  right: 10px; top: 50%;
  transform: translateY(-50%);
  background: none; border: none;
  cursor: pointer; font-size: 16px;
}

.remember-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.remember-label {
  display: flex; align-items: center; gap: 8px;
  font-size: 13px; color: rgba(255,255,255,0.6); cursor: pointer;
}
.forgot-link {
  font-size: 13px;
  color: #A435FE;
  cursor: pointer;
  text-decoration: none;
}
.forgot-link:hover { opacity: 0.8; }

.form-error { color: #f87171; font-size: 13px; }
.hint-text { font-size: 12px; color: rgba(255,255,255,0.3); }
.hint-text code {
  background: rgba(255,255,255,0.1);
  padding: 1px 5px;
  border-radius: 4px;
  color: rgba(255,255,255,0.5);
}

.submit-btn {
  padding: 13px;
  background: #A435FE;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  margin-top: 4px;
  letter-spacing: 0.3px;
}
.submit-btn:hover:not(:disabled) {
  background: #8b2cd4;
  box-shadow: 0 4px 20px rgba(164,53,254,0.4);
}
.submit-btn:disabled { opacity: 0.5; cursor: default; }
</style>
