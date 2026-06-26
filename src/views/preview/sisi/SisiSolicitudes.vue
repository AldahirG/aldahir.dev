<template>
  <div class="view-wrap">
    <div class="view-head">
      <div>
        <h2>Solicitudes</h2>
        <p>Historial de requisiciones por área y departamento</p>
      </div>
      <button class="btn-primary">+ Nueva solicitud</button>
    </div>

    <div class="filters-row">
      <div class="search-wrap">
        <input v-model="search" placeholder="Buscar solicitud..." />
      </div>
      <select v-model="filterArea">
        <option value="">Todas las áreas</option>
        <option>Sistemas</option>
        <option>Compras</option>
        <option>Mantenimiento</option>
        <option>Recursos Humanos</option>
      </select>
      <select v-model="filterStatus">
        <option value="">Todos los estados</option>
        <option>Pendiente</option>
        <option>En revisión</option>
        <option>Aprobado</option>
        <option>Rechazado</option>
        <option>Entregado</option>
      </select>
    </div>

    <div class="sol-list">
      <div v-for="s in filtered" :key="s.id" class="sol-card">
        <div class="sol-id">#{{ s.id }}</div>
        <div class="sol-body">
          <div class="sol-top">
            <span class="sol-title">{{ s.title }}</span>
            <span :class="['badge', statusClass(s.status)]">{{ s.status }}</span>
          </div>
          <div class="sol-meta">
            <span>📁 {{ s.area }}</span>
            <span>👤 {{ s.requester }}</span>
            <span>📅 {{ s.date }}</span>
            <span>💰 ${{ s.amount.toLocaleString() }}</span>
          </div>
          <div class="sol-progress">
            <div v-for="step in steps" :key="step" :class="['step', stepClass(s.status, step)]">
              <div class="step-dot"></div>
              <span>{{ step }}</span>
            </div>
          </div>
        </div>
        <div class="sol-actions">
          <button class="act-btn">Ver</button>
          <button v-if="s.status === 'En revisión'" class="act-btn act-approve">Aprobar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')
const filterArea = ref('')
const filterStatus = ref('')

const steps = ['Solicitado', 'En revisión', 'Aprobado', 'Entregado']

const solicitudes = [
  { id:'SOL-001', title:'Laptop Dell para área de sistemas',          area:'Sistemas',          requester:'Ing. Gómez',   date:'10 Jun 2025', amount:22000, status:'Entregado' },
  { id:'SOL-002', title:'Papel bond A4 (10 resmas)',                  area:'Compras',            requester:'Lic. Torres',  date:'12 Jun 2025', amount:650,   status:'Aprobado' },
  { id:'SOL-003', title:'Reparación de aire acondicionado sala 3',    area:'Mantenimiento',      requester:'Téc. Vargas',  date:'13 Jun 2025', amount:3500,  status:'En revisión' },
  { id:'SOL-004', title:'Sillas ergonómicas (x5)',                    area:'Recursos Humanos',   requester:'Lic. Castro',  date:'14 Jun 2025', amount:12500, status:'Pendiente' },
  { id:'SOL-005', title:'Switch de red Cisco 24 puertos',             area:'Sistemas',           requester:'Ing. Morales', date:'15 Jun 2025', amount:8900,  status:'En revisión' },
  { id:'SOL-006', title:'Tóner para impresoras (x3)',                 area:'Compras',            requester:'Lic. Torres',  date:'16 Jun 2025', amount:1200,  status:'Rechazado' },
]

const filtered = computed(() => solicitudes.filter(s => {
  const q = search.value.toLowerCase()
  return (
    (!q || s.title.toLowerCase().includes(q)) &&
    (!filterArea.value || s.area === filterArea.value) &&
    (!filterStatus.value || s.status === filterStatus.value)
  )
}))

function statusClass(st) {
  if (st === 'Entregado')   return 'bg-green'
  if (st === 'Aprobado')    return 'bg-blue'
  if (st === 'En revisión') return 'bg-yellow'
  if (st === 'Rechazado')   return 'bg-red'
  return 'bg-gray'
}

function stepClass(status, step) {
  const idx = steps.indexOf(status)
  const si  = steps.indexOf(step)
  if (si < idx)  return 'done'
  if (si === idx) return 'current'
  return 'pending'
}
</script>

<style scoped>
.view-wrap { padding: 24px; font-family: 'Segoe UI', sans-serif; }

.view-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
.view-head h2 { font-size: 20px; color: #1e293b; margin: 0 0 4px; font-weight: 700; }
.view-head p  { font-size: 13px; color: #64748b; margin: 0; }

.btn-primary {
  padding: 9px 16px; background: #4f46e5; color: white;
  border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer;
}

.filters-row { display: flex; gap: 10px; margin-bottom: 20px; }
.search-wrap { flex: 1; }
.search-wrap input {
  width: 100%; padding: 8px 12px; border: 1px solid #e2e8f0;
  border-radius: 8px; font-size: 13px; color: #1e293b; box-sizing: border-box;
}
.filters-row select {
  padding: 8px 12px; border: 1px solid #e2e8f0; border-radius: 8px;
  font-size: 13px; color: #475569;
}

.sol-list { display: flex; flex-direction: column; gap: 10px; }

.sol-card {
  background: white; border: 1px solid #e2e8f0; border-radius: 12px;
  padding: 16px 18px; display: flex; align-items: center; gap: 14px;
  transition: box-shadow 0.2s;
}
.sol-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.08); }

.sol-id {
  font-size: 11px; font-weight: 700; color: #94a3b8;
  font-family: monospace; width: 64px; flex-shrink: 0;
}

.sol-body { flex: 1; }

.sol-top { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
.sol-title { font-size: 14px; font-weight: 600; color: #1e293b; }

.sol-meta { display: flex; gap: 16px; font-size: 12px; color: #64748b; margin-bottom: 10px; }

.sol-progress { display: flex; align-items: center; gap: 0; }
.step {
  display: flex; align-items: center; gap: 4px;
  font-size: 10.5px; color: #94a3b8;
}
.step:not(:last-child)::after { content: '——'; margin: 0 4px; color: #e2e8f0; }
.step-dot { width: 8px; height: 8px; border-radius: 50%; background: #e2e8f0; flex-shrink: 0; }
.step.done    .step-dot { background: #22c55e; }
.step.current .step-dot { background: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.2); }
.step.done    { color: #16a34a; }
.step.current { color: #1d4ed8; font-weight: 600; }

.sol-actions { display: flex; flex-direction: column; gap: 6px; flex-shrink: 0; }
.act-btn {
  padding: 6px 14px; border: 1px solid #e2e8f0; background: white;
  color: #475569; font-size: 12px; font-weight: 600; border-radius: 7px; cursor: pointer;
}
.act-approve { background: #4f46e5; color: white; border-color: #4f46e5; }

.badge { padding: 2px 10px; border-radius: 99px; font-size: 11px; font-weight: 700; }
.bg-green  { background: #dcfce7; color: #166534; }
.bg-blue   { background: #dbeafe; color: #1d4ed8; }
.bg-yellow { background: #fef3c7; color: #92400e; }
.bg-red    { background: #fee2e2; color: #991b1b; }
.bg-gray   { background: #f1f5f9; color: #64748b; }
</style>
