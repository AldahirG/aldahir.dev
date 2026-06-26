<template>
  <div class="sisa-dashboard">
    <!-- VIEW HEADER -->
    <div class="view-header">
      <div class="view-title-row">
        <div class="view-icon"><i class="pi pi-sync"></i></div>
        <div>
          <h2 class="view-title">Control Académico</h2>
          <p class="view-sub">Seguimiento de prácticas profesionales por alumno</p>
        </div>
      </div>

      <div class="header-badges">
        <span class="badge badge-total">
          <span class="badge-num">{{ data.alumnos.total }}</span>
          <span class="badge-lbl">Total</span>
        </span>
        <span class="badge badge-green">
          <span class="badge-num">{{ data.alumnos.activos }}</span>
          <span class="badge-lbl">Asignados</span>
        </span>
        <span class="badge badge-yellow">
          <span class="badge-num">{{ data.alumnos.total - data.alumnos.activos }}</span>
          <span class="badge-lbl">Sin asignar</span>
        </span>
        <span class="badge badge-red">
          <span class="badge-num">0</span>
          <span class="badge-lbl">Baja</span>
        </span>
      </div>

      <div class="header-actions">
        <button class="btn-avanzar">
          <i class="pi pi-arrow-up-right"></i> Avanzar prácticas
        </button>
        <button class="btn-no-periodo">
          <i class="pi pi-lock"></i> Sin período activo
        </button>
      </div>
    </div>

    <!-- SEARCH + FILTERS -->
    <div class="controls-row">
      <div class="search-wrap">
        <i class="pi pi-search search-ico"></i>
        <input v-model="search" type="text" placeholder="Buscar por nombre, matrícula o empresa..." class="search-inp" />
      </div>
      <select class="filter-select">
        <option>Todos los períodos</option>
        <option>ENE–JUN 2025</option>
        <option>AGO–DIC 2024</option>
      </select>
      <select class="filter-select">
        <option>Todas las empresas</option>
        <option>TechSolutions MX</option>
        <option>Grupo Industrial Norte</option>
        <option>Banco Regional SA</option>
      </select>
      <button class="refresh-btn"><i class="pi pi-refresh"></i></button>
    </div>

    <!-- TABLE -->
    <div class="table-wrap">
      <table class="sisa-table">
        <thead>
          <tr>
            <th>ALUMNO</th>
            <th>EMPRESA / VACANTE</th>
            <th>PERÍODO</th>
            <th>ASIGNACIÓN</th>
            <th>ENTREGABLES</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in filtered" :key="a.matricula">
            <td>
              <div class="alumno-cell">
                <div class="alumno-avatar">{{ a.nombre.charAt(0) }}</div>
                <div>
                  <div class="alumno-name">{{ a.nombre }}</div>
                  <div class="alumno-mat">{{ a.matricula }} · {{ a.carrera }}</div>
                </div>
              </div>
            </td>
            <td>
              <div class="empresa-name">{{ a.empresa }}</div>
            </td>
            <td>
              <span class="periodo-chip">{{ a.periodo }}</span>
            </td>
            <td>
              <span class="estado-chip" :class="estadoClass(a.estado)">{{ a.estado }}</span>
            </td>
            <td>
              <div class="entregable-bar">
                <div class="bar-track">
                  <div class="bar-fill" :style="{ width: a.entregables + '%' }"></div>
                </div>
                <span class="bar-pct">{{ a.entregables }}%</span>
              </div>
            </td>
            <td>
              <div class="row-actions">
                <button class="action-btn action-view" title="Ver detalle">
                  <i class="pi pi-eye"></i>
                </button>
                <button class="action-btn action-edit" title="Editar">
                  <i class="pi pi-pencil"></i>
                </button>
              </div>
            </td>
          </tr>

          <tr v-if="filtered.length === 0">
            <td colspan="6" class="empty-row">
              <i class="pi pi-inbox" style="font-size:32px;color:#d1d5db;display:block;margin-bottom:8px"></i>
              Sin resultados
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- PAGINATION -->
    <div class="table-pagination">
      <button class="pag-btn" disabled>«</button>
      <button class="pag-btn" disabled>‹</button>
      <button class="pag-btn pag-active">1</button>
      <button class="pag-btn" disabled>›</button>
      <button class="pag-btn" disabled>»</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import raw from '../../../data/mock/sisa-dashboard.json'

const data = raw
const search = ref('')

const alumnos = raw.alumnos_recientes.map((a, i) => ({
  ...a,
  entregables: [91, 68, 46, 85, 100][i % 5],
}))

const filtered = computed(() => {
  if (!search.value.trim()) return alumnos
  const q = search.value.toLowerCase()
  return alumnos.filter(a =>
    a.nombre.toLowerCase().includes(q) ||
    a.matricula.includes(q) ||
    a.empresa.toLowerCase().includes(q)
  )
})

function estadoClass(e) {
  if (e === 'Activo') return 'estado-green'
  if (e === 'Pendiente') return 'estado-yellow'
  if (e === 'Concluido') return 'estado-blue'
  return 'estado-gray'
}
</script>

<style scoped>
.sisa-dashboard {
  display: flex;
  flex-direction: column;
  gap: 0;
  height: 100%;
  background: #f3f4f6;
  font-family: 'Inter', 'Segoe UI', sans-serif;
}

/* VIEW HEADER */
.view-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  flex-wrap: wrap;
}

.view-title-row {
  display: flex; align-items: center; gap: 12px; flex: 1; min-width: 200px;
}
.view-icon {
  width: 36px; height: 36px; border-radius: 50%;
  background: #eff6ff; color: #2563eb;
  display: flex; align-items: center; justify-content: center; font-size: 16px;
}
.view-title { font-size: 16px; font-weight: 700; color: #111827; margin: 0 0 2px; }
.view-sub { font-size: 12px; color: #9ca3af; margin: 0; }

.header-badges { display: flex; gap: 8px; }
.badge {
  display: flex; flex-direction: column; align-items: center;
  padding: 4px 14px; border-radius: 6px; border: 1px solid;
  min-width: 60px;
}
.badge-num { font-size: 16px; font-weight: 800; line-height: 1.2; }
.badge-lbl { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
.badge-total { background: #f3f4f6; border-color: #e5e7eb; color: #374151; }
.badge-green { background: #f0fdf4; border-color: #bbf7d0; color: #15803d; }
.badge-yellow { background: #fefce8; border-color: #fef08a; color: #854d0e; }
.badge-red { background: #fef2f2; border-color: #fecaca; color: #991b1b; }

.header-actions { display: flex; gap: 8px; margin-left: auto; }
.btn-avanzar {
  display: flex; align-items: center; gap: 6px;
  padding: 8px 14px; background: #10b981; color: white;
  border: none; border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer;
}
.btn-avanzar:hover { background: #059669; }
.btn-no-periodo {
  display: flex; align-items: center; gap: 6px;
  padding: 8px 14px; background: #fef2f2; color: #991b1b;
  border: 1px solid #fecaca; border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer;
}

/* CONTROLS */
.controls-row {
  display: flex; align-items: center; gap: 10px;
  padding: 12px 20px; background: white; border-bottom: 1px solid #e5e7eb;
}
.search-wrap { position: relative; flex: 1; }
.search-ico { position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: #9ca3af; font-size: 13px; }
.search-inp {
  width: 100%; padding: 9px 12px 9px 32px; border: 1px solid #d1d5db;
  border-radius: 6px; font-size: 13px; color: #111827; background: #f9fafb;
  box-sizing: border-box;
}
.search-inp:focus { outline: none; border-color: #2563eb; background: white; }

.filter-select {
  padding: 9px 28px 9px 10px; border: 1px solid #d1d5db; border-radius: 6px;
  font-size: 13px; color: #374151; background: #f9fafb; cursor: pointer; min-width: 150px;
  appearance: auto;
}
.refresh-btn {
  padding: 9px 10px; border: 1px solid #d1d5db; border-radius: 6px;
  background: white; color: #9ca3af; cursor: pointer; font-size: 14px;
}
.refresh-btn:hover { color: #374151; }

/* TABLE */
.table-wrap { flex: 1; overflow: auto; background: white; margin: 12px 20px 0; border-radius: 8px; border: 1px solid #e5e7eb; }

.sisa-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.sisa-table thead { position: sticky; top: 0; background: #f9fafb; }
.sisa-table th {
  padding: 10px 16px; text-align: left;
  font-size: 11px; font-weight: 700; color: #9ca3af;
  letter-spacing: 0.06em; border-bottom: 1px solid #e5e7eb;
}
.sisa-table td { padding: 14px 16px; border-bottom: 1px solid #f3f4f6; color: #374151; }
.sisa-table tbody tr:hover td { background: #f9fafb; }
.sisa-table tbody tr:last-child td { border-bottom: none; }

.alumno-cell { display: flex; align-items: center; gap: 10px; }
.alumno-avatar {
  width: 34px; height: 34px; border-radius: 50%;
  background: #dbeafe; color: #1d4ed8;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 14px; flex-shrink: 0;
}
.alumno-name { font-weight: 600; color: #111827; }
.alumno-mat { font-size: 11px; color: #9ca3af; margin-top: 2px; }

.empresa-name { font-weight: 500; color: #374151; }

.periodo-chip {
  padding: 3px 10px; border-radius: 99px; font-size: 11px; font-weight: 600;
  background: #f3f4f6; color: #6b7280; border: 1px solid #e5e7eb;
}

.estado-chip {
  padding: 3px 10px; border-radius: 99px; font-size: 11px; font-weight: 600; border: 1px solid transparent;
}
.estado-green  { background: #f0fdf4; color: #15803d; border-color: #bbf7d0; }
.estado-yellow { background: #fefce8; color: #854d0e; border-color: #fef08a; }
.estado-blue   { background: #eff6ff; color: #1d4ed8; border-color: #bfdbfe; }
.estado-gray   { background: #f3f4f6; color: #6b7280; border-color: #e5e7eb; }

.entregable-bar { display: flex; align-items: center; gap: 8px; }
.bar-track { flex: 1; height: 6px; background: #f3f4f6; border-radius: 99px; overflow: hidden; }
.bar-fill { height: 100%; background: #10b981; border-radius: 99px; }
.bar-pct { font-size: 11px; color: #6b7280; font-weight: 600; min-width: 32px; }

.row-actions { display: flex; gap: 6px; }
.action-btn {
  width: 28px; height: 28px; border-radius: 6px; border: 1px solid #e5e7eb;
  background: white; cursor: pointer; display: flex; align-items: center; justify-content: center;
  font-size: 12px; color: #6b7280; transition: all 0.15s;
}
.action-view:hover { background: #eff6ff; color: #2563eb; border-color: #bfdbfe; }
.action-edit:hover { background: #fefce8; color: #854d0e; border-color: #fef08a; }

.empty-row { text-align: center; padding: 48px; color: #9ca3af; font-size: 14px; }

/* PAGINATION */
.table-pagination {
  display: flex; justify-content: center; align-items: center;
  gap: 4px; padding: 14px 20px; background: white;
  border-top: 1px solid #e5e7eb; margin: 0 20px 12px; border-top: none;
}
.pag-btn {
  width: 30px; height: 30px; border: 1px solid #e5e7eb; border-radius: 6px;
  background: white; color: #6b7280; cursor: pointer; font-size: 13px;
  display: flex; align-items: center; justify-content: center;
}
.pag-btn:disabled { opacity: 0.4; cursor: default; }
.pag-active { background: #2563eb; color: white; border-color: #2563eb; }
</style>
