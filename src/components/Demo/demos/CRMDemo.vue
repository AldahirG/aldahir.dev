<template>
  <div class="demo">
    <!-- MÉTRICAS -->
    <div class="metrics">
      <div class="metric">
        <span class="metric-value">523</span>
        <span class="metric-label">Prospectos este mes</span>
      </div>
      <div class="metric">
        <span class="metric-value green">48</span>
        <span class="metric-label">Inscritos</span>
      </div>
      <div class="metric">
        <span class="metric-value yellow">134</span>
        <span class="metric-label">En seguimiento</span>
      </div>
      <div class="metric">
        <span class="metric-value red">12</span>
        <span class="metric-label">Sin contactar</span>
      </div>
    </div>

    <!-- FILTROS -->
    <div class="filters">
      <button
        v-for="f in filters"
        :key="f.value"
        class="filter-btn"
        :class="{ active: activeFilter === f.value }"
        @click="activeFilter = f.value"
      >
        {{ f.label }}
      </button>
    </div>

    <!-- TABLA -->
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Carrera</th>
            <th>Fecha contacto</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="p in filtered"
            :key="p.id"
            class="prospect-row"
            :class="{ selected: selected?.id === p.id }"
            @click="selected = selected?.id === p.id ? null : p"
          >
            <td class="name">{{ p.nombre }}</td>
            <td class="muted">{{ p.carrera }}</td>
            <td class="muted">{{ p.fecha }}</td>
            <td><span class="badge" :class="p.status">{{ statusLabel[p.status] }}</span></td>
            <td class="arrow">{{ selected?.id === p.id ? '▲' : '▼' }}</td>
          </tr>
          <!-- DETALLE INLINE -->
          <tr v-if="selected" class="detail-row">
            <td colspan="5">
              <div class="detail">
                <div class="detail-item"><span>Teléfono</span><strong>{{ selected.tel }}</strong></div>
                <div class="detail-item"><span>Email</span><strong>{{ selected.email }}</strong></div>
                <div class="detail-item"><span>Asesor</span><strong>{{ selected.asesor }}</strong></div>
                <div class="detail-item"><span>Notas</span><strong>{{ selected.notas }}</strong></div>
                <div class="detail-actions">
                  <button class="action-btn" @click="advance(selected)">Avanzar etapa →</button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('all')
const selected = ref(null)

const filters = [
  { label: 'Todos', value: 'all' },
  { label: 'Nuevo', value: 'nuevo' },
  { label: 'Contactado', value: 'contactado' },
  { label: 'Interesado', value: 'interesado' },
  { label: 'Inscrito', value: 'inscrito' },
]

const statusLabel = {
  nuevo: 'Nuevo',
  contactado: 'Contactado',
  interesado: 'Interesado',
  inscrito: 'Inscrito',
}

const statusOrder = ['nuevo', 'contactado', 'interesado', 'inscrito']

const prospects = ref([
  { id: 1, nombre: 'Ana Martínez López', carrera: 'Ing. en Software', fecha: '10 Jun 2025', status: 'inscrito', tel: '777 123 4567', email: 'ana.m@gmail.com', asesor: 'Carlos R.', notas: 'Interesada en beca deportiva.' },
  { id: 2, nombre: 'Luis García Soto', carrera: 'Administración', fecha: '11 Jun 2025', status: 'interesado', tel: '777 234 5678', email: 'luis.g@gmail.com', asesor: 'María P.', notas: 'Pendiente enviar plan de pagos.' },
  { id: 3, nombre: 'Paola Reyes Cruz', carrera: 'Psicología', fecha: '12 Jun 2025', status: 'contactado', tel: '777 345 6789', email: 'paola.r@gmail.com', asesor: 'Carlos R.', notas: 'Llamar martes por la tarde.' },
  { id: 4, nombre: 'Diego Hernández V.', carrera: 'Contaduría', fecha: '13 Jun 2025', status: 'nuevo', tel: '777 456 7890', email: 'diego.h@gmail.com', asesor: 'Sin asignar', notas: 'Registro vía formulario web.' },
  { id: 5, nombre: 'Sofía Mendoza R.', carrera: 'Ing. en Software', fecha: '13 Jun 2025', status: 'interesado', tel: '777 567 8901', email: 'sofia.m@gmail.com', asesor: 'María P.', notas: 'Preguntó por modalidad en línea.' },
  { id: 6, nombre: 'Carlos Torres M.', carrera: 'Derecho', fecha: '14 Jun 2025', status: 'nuevo', tel: '777 678 9012', email: 'carlos.t@gmail.com', asesor: 'Sin asignar', notas: 'Referido por alumno activo.' },
])

const filtered = computed(() =>
  activeFilter.value === 'all'
    ? prospects.value
    : prospects.value.filter(p => p.status === activeFilter.value)
)

function advance(p) {
  const idx = statusOrder.indexOf(p.status)
  if (idx < statusOrder.length - 1) {
    p.status = statusOrder[idx + 1]
  }
}
</script>

<style scoped>
.demo { display: flex; flex-direction: column; gap: 16px; }

.metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.metric {
  background: rgba(255,255,255,0.05);
  border-radius: 10px;
  padding: 12px;
  text-align: center;
}
.metric-value { display: block; font-size: 22px; font-weight: 700; }
.metric-value.green { color: #82bc4f; }
.metric-value.yellow { color: #eabd5f; }
.metric-value.red { color: #e3646e; }
.metric-label { font-size: 11px; color: var(--gray300); }

.filters { display: flex; gap: 8px; flex-wrap: wrap; }
.filter-btn {
  padding: 5px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.15);
  background: transparent; color: var(--gray300); cursor: pointer; font-size: 13px;
  transition: 0.2s;
}
.filter-btn.active, .filter-btn:hover {
  background: var(--red); border-color: var(--red); color: white;
}

.table-wrap { overflow-x: auto; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); }
table { width: 100%; border-collapse: collapse; }
th { padding: 10px 14px; text-align: left; font-size: 12px; color: var(--gray300); background: rgba(255,255,255,0.04); }
td { padding: 10px 14px; font-size: 13px; border-top: 1px solid rgba(255,255,255,0.06); }
.prospect-row { cursor: pointer; transition: background 0.15s; }
.prospect-row:hover { background: rgba(255,255,255,0.04); }
.prospect-row.selected { background: rgba(227,100,110,0.1); }
.name { font-weight: 500; }
.muted { color: var(--gray300); }
.arrow { color: var(--gray300); font-size: 10px; }

.badge {
  padding: 3px 10px; border-radius: 999px; font-size: 11px; font-weight: 600;
}
.badge.nuevo { background: rgba(255,255,255,0.08); color: var(--gray200); }
.badge.contactado { background: rgba(57,150,219,0.2); color: #3996db; }
.badge.interesado { background: rgba(234,189,95,0.2); color: #eabd5f; }
.badge.inscrito { background: rgba(130,188,79,0.2); color: #82bc4f; }

.detail-row td { padding: 0; }
.detail {
  padding: 14px 16px;
  background: rgba(227,100,110,0.07);
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;
}
.detail-item { display: flex; flex-direction: column; gap: 2px; }
.detail-item span { font-size: 11px; color: var(--gray300); }
.detail-item strong { font-size: 13px; }
.detail-actions { grid-column: 1 / -1; }
.action-btn {
  padding: 7px 16px; background: var(--red); border: none; border-radius: 8px;
  color: white; cursor: pointer; font-size: 13px; transition: background 0.2s;
}
.action-btn:hover { background: #c0444d; }

@media (max-width: 600px) {
  .metrics { grid-template-columns: repeat(2, 1fr); }
  .detail { grid-template-columns: 1fr; }
}
</style>
