<template>
  <PreviewBanner name="SICEL CRM" cred-email="demo@sicel.mx" />

  <div class="sicel-login-root">
    <div class="sicel-login-card">
      <!-- LEFT: branding -->
      <div class="login-left">
        <div class="brand-content">
          <div class="logo-block">
            <span class="logo-sicel">SICEL</span>
          </div>
          <p class="brand-tagline">Sistema Integral de Control y Eficiencia en Leads</p>
          <p class="brand-uni">Universidad Internacional UNINTER</p>
        </div>
      </div>

      <!-- RIGHT: form -->
      <div class="login-right">
        <div class="form-wrap">
          <h2 class="form-title">Inicio de sesión</h2>
          <p class="form-sub">Universidad Internacional UNINTER</p>

          <form @submit.prevent="handleLogin" class="form">
            <div class="field">
              <label class="field-label">Correo Electrónico</label>
              <div class="input-row">
                <span class="input-icon">📧</span>
                <input v-model="form.email" type="email" class="input" placeholder="demo@sicel.mx" />
              </div>
            </div>

            <div class="field">
              <label class="field-label">Contraseña</label>
              <div class="input-row">
                <span class="input-icon">🔒</span>
                <input v-model="form.password" :type="showPass ? 'text' : 'password'" class="input" placeholder="demo1234" />
                <button type="button" class="eye" @click="showPass = !showPass">
                  {{ showPass ? '🙈' : '👁️' }}
                </button>
              </div>
            </div>

            <p v-if="error" class="form-error">{{ error }}</p>
            <p class="form-hint">Demo: <code>demo@sicel.mx</code> / <code>demo1234</code></p>

            <button type="submit" class="submit" :disabled="loading">
              {{ loading ? 'Iniciando...' : 'Iniciar sesión' }}
            </button>
          </form>

          <p class="footer-text">© {{ new Date().getFullYear() }} Universidad Internacional.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSicelAuth } from '../../../stores/sicel-auth.js'
import PreviewBanner from '../PreviewBanner.vue'

const router = useRouter()
const auth = useSicelAuth()
const form = ref({ email: 'demo@sicel.mx', password: 'demo1234' })
const showPass = ref(false)
const loading = ref(false)
const error = ref('')

async function handleLogin() {
  loading.value = true
  error.value = ''
  const ok = await auth.signIn(form.value)
  loading.value = false
  if (ok) router.push('/preview/sicel/app/leads')
  else error.value = 'Credenciales incorrectas. Usa demo@sicel.mx / demo1234'
}
</script>

<style scoped>
.sicel-login-root {
  min-height: 100vh;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 56px 16px 16px;
  font-family: 'Segoe UI', sans-serif;
}

.sicel-login-card {
  display: flex;
  width: 100%;
  max-width: 900px;
  min-height: 520px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);
}

/* LEFT */
.login-left {
  width: 42%;
  background: linear-gradient(160deg, #1a2d4a 0%, #2d5a8e 50%, #1a5276 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 32px;
}

.brand-content { text-align: center; }

.logo-block { margin-bottom: 16px; }
.logo-sicel {
  font-size: 52px;
  font-weight: 900;
  color: white;
  letter-spacing: 6px;
  display: block;
}

.brand-tagline {
  color: rgba(255,255,255,0.75);
  font-size: 13px;
  line-height: 1.6;
  margin-bottom: 8px;
}
.brand-uni {
  color: rgba(255,255,255,0.5);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* RIGHT */
.login-right {
  flex: 1;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 40px;
}

.form-wrap { width: 100%; max-width: 340px; }

.form-title {
  font-size: 22px;
  font-weight: 700;
  color: #111827;
  text-align: center;
  margin-bottom: 4px;
}
.form-sub {
  font-size: 13px;
  color: #1a2d4a;
  text-align: center;
  margin-bottom: 28px;
  font-weight: 500;
}

.form { display: flex; flex-direction: column; gap: 14px; }

.field-label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.input-row {
  display: flex;
  align-items: center;
  position: relative;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  background: white;
  overflow: hidden;
  transition: border-color 0.2s;
}
.input-row:focus-within { border-color: #2d5a8e; }

.input-icon {
  padding: 0 10px;
  font-size: 15px;
  flex-shrink: 0;
}

.input {
  flex: 1;
  padding: 11px 10px;
  border: none;
  outline: none;
  font-size: 14px;
  color: #111827;
  background: transparent;
}

.eye {
  padding: 0 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 15px;
}

.form-error { color: #dc2626; font-size: 13px; text-align: center; }
.form-hint {
  font-size: 11px;
  color: #9ca3af;
  text-align: center;
}
.form-hint code {
  background: #f3f4f6;
  padding: 1px 5px;
  border-radius: 4px;
  font-family: monospace;
  color: #4b5563;
}

.submit {
  margin-top: 6px;
  width: 100%;
  padding: 13px;
  background: #1a2d4a;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: background 0.2s;
}
.submit:hover:not(:disabled) { background: #2d5a8e; }
.submit:disabled { opacity: 0.55; cursor: default; }

.footer-text {
  margin-top: 28px;
  text-align: center;
  font-size: 11px;
  color: #d1d5db;
}

@media (max-width: 640px) {
  .sicel-login-root { padding: 52px 12px 12px; align-items: flex-start; }
  .sicel-login-card { flex-direction: column; min-height: unset; }
  .login-left { display: none; }
  .login-right { padding: 32px 20px; }
}
</style>
