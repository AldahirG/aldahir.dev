<template>
  <PreviewBanner name="SICEL CRM" cred-email="demo@sicel.mx" />

  <div class="sicel-app">
    <!-- SIDEBAR -->
    <aside class="sicel-sidebar">
      <div class="sidebar-brand">
        <span class="brand-name">SICEL</span>
        <span class="brand-dot"></span>
      </div>

      <nav class="sidebar-nav">
        <p class="nav-section-label">PRINCIPAL</p>
        <RouterLink to="/preview/sicel/app/leads" class="nav-link" active-class="nav-link--active">
          <i class="bi bi-people"></i>
          <span>Leads</span>
        </RouterLink>
        <RouterLink to="/preview/sicel/app/inscripciones" class="nav-link" active-class="nav-link--active">
          <i class="bi bi-person-check"></i>
          <span>Inscripciones</span>
        </RouterLink>
        <a class="nav-link nav-link--off">
          <i class="bi bi-graph-up-arrow"></i>
          <span>Seguimiento</span>
        </a>

        <p class="nav-section-label">ADMINISTRACIÓN</p>
        <a class="nav-link nav-link--off">
          <i class="bi bi-megaphone"></i>
          <span>Campañas</span>
        </a>
        <RouterLink to="/preview/sicel/app/reportes" class="nav-link" active-class="nav-link--active">
          <i class="bi bi-bar-chart-line"></i>
          <span>Reportes</span>
        </RouterLink>
        <a class="nav-link nav-link--off">
          <i class="bi bi-gear"></i>
          <span>Configuración</span>
        </a>
      </nav>

      <div class="sidebar-user">
        <div class="user-avatar">{{ auth.user?.name?.charAt(0) ?? 'D' }}</div>
        <div class="user-meta">
          <span class="user-name">{{ auth.user?.name ?? 'Demo User' }}</span>
          <span class="user-role">Administrador</span>
        </div>
        <button @click="logout" class="logout-icon" title="Cerrar sesión">
          <i class="bi bi-box-arrow-right"></i>
        </button>
      </div>
    </aside>

    <!-- CONTENT -->
    <div class="sicel-main">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useSicelAuth } from '../../../stores/sicel-auth.js'
import PreviewBanner from '../PreviewBanner.vue'

const router = useRouter()
const auth = useSicelAuth()

function logout() {
  auth.signOut()
  router.push('/preview/sicel')
}
</script>

<style scoped>
.sicel-app {
  display: flex;
  height: 100vh;
  padding-top: 37px;
  background: #f1f5f9;
  font-family: 'Segoe UI', sans-serif;
}

/* SIDEBAR */
.sicel-sidebar {
  width: 230px;
  flex-shrink: 0;
  background: white;
  border-right: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 2px 0 8px rgba(0,0,0,0.04);
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 20px 20px 18px;
  border-bottom: 1px solid #f1f5f9;
}

.brand-name {
  font-size: 20px;
  font-weight: 900;
  color: #1a2d4a;
  letter-spacing: 3px;
}

.brand-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2d5a8e;
  margin-top: 2px;
}

.sidebar-nav {
  flex: 1;
  padding: 16px 10px;
  overflow-y: auto;
}

.nav-section-label {
  font-size: 10px;
  font-weight: 700;
  color: #94a3b8;
  letter-spacing: 0.08em;
  padding: 12px 10px 4px;
  margin: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 8px;
  color: #64748b;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.15s;
  cursor: pointer;
  margin-bottom: 2px;
}
.nav-link:hover { background: #f1f5f9; color: #1a2d4a; }
.nav-link--active {
  background: #dbeafe;
  color: #1a2d4a;
  font-weight: 700;
  border-left: 3px solid #2d5a8e;
}
.nav-link--off { opacity: 0.45; cursor: default; }
.nav-link--off:hover { background: none; color: #64748b; }

.sidebar-user {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 14px;
  border-top: 1px solid #f1f5f9;
}

.user-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #1a2d4a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}

.user-meta { flex: 1; min-width: 0; }
.user-name {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #1e293b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.user-role { display: block; font-size: 11px; color: #94a3b8; }

.logout-icon {
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  font-size: 16px;
  padding: 4px;
  flex-shrink: 0;
}
.logout-icon:hover { color: #ef4444; }

/* MAIN */
.sicel-main {
  flex: 1;
  overflow: auto;
  background: #f8fafc;
}
</style>
