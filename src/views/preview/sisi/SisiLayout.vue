<template>
  <PreviewBanner name="SISI" cred-email="designer@sisi.mx" />

  <div class="sisi-app">
    <!-- SIDEBAR -->
    <aside class="sisi-sidebar">
      <div class="sidebar-logo">SISI</div>

      <nav class="sidebar-nav">
        <RouterLink to="/preview/sisi/app/board" class="nav-item" active-class="nav-item--active">
          <el-icon><Grid /></el-icon>
          <span>Tablero</span>
        </RouterLink>
        <RouterLink to="/preview/sisi/app/solicitudes" class="nav-item" active-class="nav-item--active">
          <el-icon><List /></el-icon>
          <span>Solicitudes</span>
        </RouterLink>
        <a class="nav-item nav-item--off">
          <el-icon><Calendar /></el-icon>
          <span>Calendario</span>
        </a>
        <a class="nav-item nav-item--off">
          <el-icon><DataBoard /></el-icon>
          <span>Panel</span>
        </a>
      </nav>

      <div class="sidebar-footer">
        <div class="user-row">
          <div class="avatar">{{ auth.user?.name?.charAt(0) ?? 'D' }}</div>
          <div>
            <div class="user-name">{{ auth.user?.name ?? 'Demo' }}</div>
            <div class="user-role">Diseñador</div>
          </div>
        </div>
        <button class="logout-btn" @click="logout" title="Salir">
          <el-icon><SwitchButton /></el-icon>
        </button>
      </div>
    </aside>

    <div class="sisi-main">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useSisiAuth } from '../../../stores/sisi-auth.js'
import PreviewBanner from '../PreviewBanner.vue'

const router = useRouter()
const auth = useSisiAuth()

function logout() {
  auth.signOut()
  router.push('/preview/sisi')
}
</script>

<style scoped>
.sisi-app {
  display: flex;
  height: 100vh;
  padding-top: 37px;
  background: #121212;
  font-family: 'Inter', sans-serif;
}

.sisi-sidebar {
  width: 200px;
  flex-shrink: 0;
  background: #1a1a1a;
  border-right: 1px solid #2a2a2a;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.sidebar-logo {
  padding: 20px 20px 16px;
  font-size: 22px;
  font-weight: 900;
  color: #A435FE;
  letter-spacing: 3px;
  border-bottom: 1px solid #2a2a2a;
  text-shadow: 0 0 20px rgba(164,53,254,0.4);
}

.sidebar-nav {
  flex: 1;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  color: #666;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.15s;
  cursor: pointer;
}
.nav-item:hover { background: rgba(164,53,254,0.08); color: #ccc; }
.nav-item--active {
  background: rgba(164,53,254,0.15);
  color: #A435FE;
  font-weight: 600;
}
.nav-item--off { opacity: 0.3; cursor: default; }
.nav-item--off:hover { background: none; color: #666; }

.sidebar-footer {
  padding: 14px;
  border-top: 1px solid #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.user-row { display: flex; align-items: center; gap: 8px; }
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #A435FE;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 13px;
  flex-shrink: 0;
}
.user-name { font-size: 12px; font-weight: 600; color: #ccc; }
.user-role { font-size: 11px; color: #555; }
.logout-btn {
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
  font-size: 16px;
  padding: 4px;
}
.logout-btn:hover { color: #f87171; }

.sisi-main { flex: 1; overflow: auto; background: #121212; }

@media (max-width: 640px) {
  .sisi-app { flex-direction: column; height: auto; min-height: 100vh; }

  .sisi-sidebar {
    width: 100%;
    height: auto;
    flex-direction: row;
    flex-shrink: 0;
    border-right: none;
    border-bottom: 1px solid #2a2a2a;
    overflow-x: auto;
    overflow-y: hidden;
    align-items: center;
    padding: 0 8px;
    gap: 4px;
  }

  .sidebar-logo { padding: 10px 12px; font-size: 16px; flex-shrink: 0; border-bottom: none; }

  .sidebar-nav {
    flex: 1;
    flex-direction: row;
    gap: 4px;
    padding: 6px 4px;
    overflow-x: auto;
  }

  .nav-item {
    flex-direction: column;
    gap: 2px;
    padding: 6px 10px;
    font-size: 11px;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .sidebar-footer { display: none; }

  .sisi-main { overflow-x: auto; }
}
</style>
