<template>
  <PreviewBanner name="SISA" cred-email="admin@sisa.mx" />

  <div class="sisa-app">
    <!-- SIDEBAR -->
    <aside class="sisa-sidebar">
      <div class="sidebar-top">
        <button class="menu-toggle"><i class="pi pi-bars"></i></button>
        <div class="sidebar-brand">
          <div class="brand-icon"><i class="pi pi-sync"></i></div>
          <span class="brand-name">SISA</span>
        </div>
      </div>

      <nav class="sidebar-nav">
        <div class="nav-group">
          <p class="group-label">PRINCIPAL</p>
          <RouterLink to="/preview/sisa/app/dashboard" class="nav-item" active-class="nav-item--active">
            <i class="pi pi-home"></i><span>Dashboard</span>
          </RouterLink>
        </div>

        <div class="nav-group">
          <p class="group-label">GESTIÓN ACADÉMICA</p>
          <a class="nav-item nav-item--off"><i class="pi pi-calendar"></i><span>Periodos</span></a>
          <a class="nav-item nav-item--off"><i class="pi pi-file"></i><span>Entregables</span></a>
          <a class="nav-item nav-item--off"><i class="pi pi-star"></i><span>Evaluaciones</span></a>
          <a class="nav-item nav-item--off nav-item--highlight"><i class="pi pi-sync"></i><span>Control Académico</span></a>
          <a class="nav-item nav-item--off"><i class="pi pi-list"></i><span>Niveles de Práctica</span></a>
        </div>

        <div class="nav-group">
          <p class="group-label">USUARIOS</p>
          <RouterLink to="/preview/sisa/app/alumnos" class="nav-item" active-class="nav-item--active"><i class="pi pi-users"></i><span>Alumnos</span></RouterLink>
        </div>

        <div class="nav-group">
          <p class="group-label">EMPRESAS</p>
          <a class="nav-item nav-item--off"><i class="pi pi-building"></i><span>Empresas</span></a>
          <a class="nav-item nav-item--off"><i class="pi pi-briefcase"></i><span>Vacantes</span></a>
        </div>

        <div class="nav-group">
          <p class="group-label">SEGUIMIENTO</p>
          <a class="nav-item nav-item--off"><i class="pi pi-send"></i><span>Postulaciones</span></a>
          <a class="nav-item nav-item--off"><i class="pi pi-history"></i><span>Historial</span></a>
          <a class="nav-item nav-item--off"><i class="pi pi-chart-bar"></i><span>Encuestas</span></a>
        </div>

        <div class="nav-group">
          <p class="group-label">HERRAMIENTAS</p>
          <a class="nav-item nav-item--off"><i class="pi pi-calendar-plus"></i><span>Calendario</span></a>
          <a class="nav-item nav-item--off"><i class="pi pi-user"></i><span>Mi perfil</span></a>
        </div>
      </nav>

      <div class="sidebar-footer-brand">
        <span class="footer-uni">UNIVERSIDAD</span>
        <span class="footer-int">INTERNACIONAL</span>
      </div>
    </aside>

    <!-- CONTENT -->
    <div class="sisa-content">
      <!-- TOPBAR -->
      <header class="sisa-topbar">
        <div class="topbar-left"></div>
        <div class="topbar-right">
          <div class="user-chip">
            <div class="user-avatar">{{ auth.user?.name?.charAt(0) ?? 'A' }}</div>
            <span class="user-nm">{{ auth.user?.name ?? 'Admin' }}</span>
            <i class="pi pi-chevron-down" style="font-size:11px;color:#9ca3af"></i>
          </div>
          <button class="logout-btn" @click="logout" title="Cerrar sesión">
            <i class="pi pi-sign-out"></i>
          </button>
        </div>
      </header>

      <main class="sisa-main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useSisaAuth } from '../../../stores/sisa-auth.js'
import PreviewBanner from '../PreviewBanner.vue'

const router = useRouter()
const auth = useSisaAuth()

function logout() {
  auth.signOut()
  router.push('/preview/sisa')
}
</script>

<style scoped>
.sisa-app {
  display: flex;
  height: 100vh;
  padding-top: 37px;
  background: #f3f4f6;
  font-family: 'Inter', 'Segoe UI', sans-serif;
}

/* SIDEBAR */
.sisa-sidebar {
  width: 220px;
  flex-shrink: 0;
  background: white;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
}

.sidebar-top {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border-bottom: 1px solid #f3f4f6;
}

.menu-toggle {
  background: none; border: none;
  color: #9ca3af; cursor: pointer; font-size: 14px; padding: 4px;
}

.sidebar-brand {
  display: flex; align-items: center; gap: 8px;
}
.brand-icon {
  width: 28px; height: 28px; border-radius: 50%;
  border: 2px solid #10b981;
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-size: 12px;
}
.brand-name {
  font-size: 16px; font-weight: 800; color: #111827; letter-spacing: 1px;
}

.sidebar-nav { flex: 1; padding: 8px 8px; overflow-y: auto; }

.nav-group { margin-bottom: 4px; }
.group-label {
  font-size: 10px; font-weight: 700; color: #9ca3af;
  letter-spacing: 0.07em; padding: 10px 8px 4px; margin: 0;
}

.nav-item {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 10px; border-radius: 6px;
  color: #6b7280; text-decoration: none; font-size: 13px;
  transition: all 0.15s; cursor: pointer; margin-bottom: 1px;
}
.nav-item:hover { background: #f3f4f6; color: #111827; }
.nav-item--active {
  background: #eff6ff; color: #1d4ed8;
  font-weight: 600;
  border-left: 3px solid #1d4ed8;
}
.nav-item--highlight { color: #10b981; }
.nav-item--off { cursor: default; }
.nav-item--off:hover { background: none; color: #6b7280; }

.sidebar-footer-brand {
  padding: 14px 16px;
  border-top: 1px solid #f3f4f6;
  display: flex; align-items: baseline; gap: 4px;
}
.footer-uni { font-size: 10px; font-weight: 700; color: #9ca3af; letter-spacing: 1px; }
.footer-int { font-size: 10px; font-weight: 700; color: #10b981; letter-spacing: 1px; }

/* CONTENT */
.sisa-content { flex: 1; display: flex; flex-direction: column; overflow: hidden; }

.sisa-topbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 10px 20px; background: white; border-bottom: 1px solid #e5e7eb;
  height: 52px;
}

.topbar-right { display: flex; align-items: center; gap: 10px; }

.user-chip {
  display: flex; align-items: center; gap: 8px;
  padding: 6px 12px; border-radius: 999px;
  border: 1px solid #e5e7eb; background: #f9fafb; cursor: pointer;
}
.user-avatar {
  width: 26px; height: 26px; border-radius: 50%;
  background: #10b981; color: white;
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 700;
}
.user-nm { font-size: 13px; color: #374151; font-weight: 500; }

.logout-btn {
  background: none; border: none; color: #9ca3af;
  cursor: pointer; font-size: 15px; padding: 6px;
  border-radius: 6px;
}
.logout-btn:hover { color: #ef4444; background: #fef2f2; }

.sisa-main { flex: 1; overflow: auto; background: #f3f4f6; }
</style>
