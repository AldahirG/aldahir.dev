<template>
  <PreviewBanner name="SISA" cred-email="admin@sisa.mx" />

  <div class="sisa-root">
    <!-- LEFT -->
    <div class="left-panel">
      <div class="bg-circle circle-1"></div>
      <div class="bg-circle circle-2"></div>

      <div class="left-content">
        <div class="sisa-logo">
          <div class="logo-icon">
            <i class="pi pi-sync"></i>
          </div>
          <span class="logo-label">SISA</span>
        </div>

        <h2 class="left-title">Sistema de Gestión de<br>Prácticas Profesionales</h2>
        <p class="left-sub">Conectamos estudiantes con oportunidades reales de crecimiento académico y profesional.</p>

        <ul class="feature-list">
          <li v-for="f in features" :key="f.text">
            <div class="feat-icon"><i :class="['pi', f.icon]"></i></div>
            <span>{{ f.text }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- RIGHT -->
    <div class="right-panel">
      <div class="form-area">
        <div class="form-header">
          <h2>Bienvenido de vuelta</h2>
          <p class="form-subline">Ingresa con tus credenciales institucionales</p>
        </div>

        <form @submit.prevent="handleLogin">
          <div class="field">
            <label>Correo institucional</label>
            <div class="input-wrap">
              <i class="pi pi-envelope input-icon"></i>
              <input v-model="form.email" type="email" placeholder="usuario@institucion.edu.mx" />
            </div>
          </div>

          <div class="field">
            <label>Contraseña</label>
            <div class="input-wrap">
              <input v-model="form.password" :type="showPass ? 'text' : 'password'" placeholder="••••••••" />
              <button type="button" class="eye-btn" @click="showPass = !showPass">
                <i :class="['pi', showPass ? 'pi-eye-slash' : 'pi-eye']"></i>
              </button>
            </div>
          </div>

          <p v-if="error" class="error-msg">{{ error }}</p>

          <button type="submit" class="submit-btn" :disabled="loading">
            {{ loading ? 'Accediendo...' : 'Ingresar al sistema' }}
            <i class="pi pi-arrow-right"></i>
          </button>
        </form>

        <div class="help-box">
          <i class="pi pi-info-circle"></i>
          <span>¿Problemas para acceder? Contacta a tu coordinador académico.</span>
        </div>

        <p class="demo-hint">Demo: <code>admin@sisa.mx</code> / <code>demo1234</code></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSisaAuth } from '../../../stores/sisa-auth.js'
import PreviewBanner from '../PreviewBanner.vue'

const router = useRouter()
const auth = useSisaAuth()
const form = ref({ email: 'admin@sisa.mx', password: 'demo1234' })
const showPass = ref(false)
const loading = ref(false)
const error = ref('')

const features = [
  { icon: 'pi-briefcase', text: 'Explora vacantes en empresas verificadas' },
  { icon: 'pi-upload', text: 'Entrega y da seguimiento a tus documentos' },
  { icon: 'pi-chart-line', text: 'Monitorea tu avance académico en tiempo real' },
  { icon: 'pi-calendar', text: 'Gestión completa del periodo de prácticas' },
]

async function handleLogin() {
  loading.value = true
  error.value = ''
  const ok = await auth.signIn(form.value)
  loading.value = false
  if (ok) router.push('/preview/sisa/app/dashboard')
  else error.value = 'Credenciales incorrectas. Usa admin@sisa.mx / demo1234'
}
</script>

<style scoped>
.sisa-root {
  display: flex;
  height: 100vh;
  padding-top: 37px;
  font-family: 'Inter', 'Segoe UI', sans-serif;
}

/* LEFT */
.left-panel {
  width: 45%;
  background: linear-gradient(145deg, #1a3c6e 0%, #1e6bb5 55%, #2980d4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 40px;
  position: relative;
  overflow: hidden;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
}
.circle-1 {
  width: 320px; height: 320px;
  top: -60px; left: -80px;
}
.circle-2 {
  width: 260px; height: 260px;
  bottom: -40px; right: -60px;
}

.left-content { position: relative; z-index: 1; max-width: 340px; }

.sisa-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
}
.logo-icon {
  width: 36px; height: 36px;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.6);
  display: flex; align-items: center; justify-content: center;
  color: white; font-size: 16px;
}
.logo-label {
  font-size: 20px;
  font-weight: 800;
  color: white;
  letter-spacing: 2px;
}

.left-title {
  font-size: 22px;
  font-weight: 700;
  color: white;
  line-height: 1.4;
  margin-bottom: 12px;
}
.left-sub {
  font-size: 13px;
  color: rgba(255,255,255,0.7);
  line-height: 1.6;
  margin-bottom: 28px;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.feature-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: rgba(255,255,255,0.85);
}
.feat-icon {
  width: 30px; height: 30px;
  border-radius: 6px;
  background: rgba(255,255,255,0.15);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  font-size: 14px;
  color: white;
}

/* RIGHT */
.right-panel {
  flex: 1;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 40px;
}

.form-area { width: 100%; max-width: 360px; }

.form-header { margin-bottom: 32px; }
.form-header h2 {
  font-size: 24px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 6px;
}
.form-subline {
  font-size: 13px;
  color: #1e6bb5;
  font-weight: 500;
}

.field { margin-bottom: 16px; }
.field label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 6px;
}
.input-wrap {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: white;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.input-wrap:focus-within {
  border-color: #1e6bb5;
  box-shadow: 0 0 0 3px rgba(30,107,181,0.1);
}
.input-icon {
  padding: 0 10px;
  font-size: 13px;
  color: #9ca3af;
  flex-shrink: 0;
}
.input-wrap input {
  flex: 1;
  padding: 11px 12px;
  border: none;
  outline: none;
  font-size: 14px;
  color: #111827;
  background: transparent;
}
.input-wrap input::placeholder { color: #d1d5db; }
.eye-btn {
  padding: 0 10px;
  background: none; border: none;
  color: #9ca3af; cursor: pointer; font-size: 13px;
}
.eye-btn:hover { color: #6b7280; }

.error-msg {
  font-size: 13px;
  color: #dc2626;
  margin-bottom: 12px;
}

.submit-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px;
  background: #1a3c6e;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 8px;
}
.submit-btn:hover:not(:disabled) { background: #1e6bb5; }
.submit-btn:disabled { opacity: 0.55; cursor: default; }

.help-box {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 16px;
  padding: 12px 14px;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 6px;
  font-size: 12px;
  color: #1e40af;
}
.help-box i { font-size: 14px; flex-shrink: 0; margin-top: 1px; }

.demo-hint {
  margin-top: 14px;
  font-size: 11px;
  color: #9ca3af;
  text-align: center;
}
.demo-hint code {
  background: #f3f4f6;
  padding: 1px 5px;
  border-radius: 4px;
  color: #6b7280;
}
</style>
