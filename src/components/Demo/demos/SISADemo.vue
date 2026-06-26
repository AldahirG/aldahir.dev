<template>
  <div class="demo">
    <div class="demo-header">
      <div class="search-wrap">
        <input v-model="search" placeholder="Buscar alumno..." class="search-input" />
      </div>
      <button class="new-btn" @click="showForm = !showForm">
        {{ showForm ? '✕ Cancelar' : '+ Registrar práctica' }}
      </button>
    </div>

    <!-- FORM -->
    <form v-if="showForm" class="reg-form" @submit.prevent="addRecord">
      <input v-model="form.nombre" placeholder="Nombre completo" required />
      <input v-model="form.empresa" placeholder="Empresa / Institución" required />
      <select v-model="form.carrera">
        <option>Ing. en Software</option>
        <option>Administración</option>
        <option>Contaduría</option>
        <option>Psicología</option>
      </select>
      <input v-model="form.asesor" placeholder="Asesor académico" required />
      <button type="submit" class="submit-btn">Registrar</button>
    </form>

    <!-- STATS -->
    <div class="stats">
      <div class="stat" v-for="s in stats" :key="s.label">
        <span class="stat-val" :style="{ color: s.color }">{{ s.val }}</span>
        <span class="stat-label">{{ s.label }}</span>
      </div>
    </div>

    <!-- TABLA -->
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Alumno</th>
            <th>Carrera</th>
            <th>Empresa</th>
            <th>Asesor</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in filtered" :key="r.id">
            <td class="name">{{ r.nombre }}</td>
            <td class="muted small">{{ r.carrera }}</td>
            <td class="muted">{{ r.empresa }}</td>
            <td class="muted small">{{ r.asesor }}</td>
            <td><span class="badge" :class="r.status">{{ statusLabel[r.status] }}</span></td>
            <td>
              <button class="advance-btn" @click="advance(r)" :disabled="r.status === 'completada'">
                {{ r.status === 'completada' ? '✓' : '→' }}
              </button>
            </td>
          </tr>
          <tr v-if="filtered.length === 0">
            <td colspan="6" class="no-results">Sin resultados</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')
const showForm = ref(false)
let nextId = 20
const form = ref({ nombre: '', empresa: '', carrera: 'Ing. en Software', asesor: '' })

const statusOrder = ['pendiente', 'aprobada', 'en_curso', 'completada']
const statusLabel = {
  pendiente: 'Pendiente',
  aprobada: 'Aprobada',
  en_curso: 'En curso',
  completada: 'Completada',
}

const records = ref([
  { id: 1, nombre: 'Ana Martínez López', carrera: 'Ing. en Software', empresa: 'UNINTER', asesor: 'Dr. Ramírez', status: 'completada' },
  { id: 2, nombre: 'Luis García Soto', carrera: 'Administración', empresa: 'Banamex', asesor: 'Mtra. Pérez', status: 'en_curso' },
  { id: 3, nombre: 'Paola Reyes Cruz', carrera: 'Psicología', empresa: 'IMSS Cuernavaca', asesor: 'Dr. Ramírez', status: 'en_curso' },
  { id: 4, nombre: 'Diego Hernández V.', carrera: 'Contaduría', empresa: 'Despacho Torres', asesor: 'Mtro. Solís', status: 'aprobada' },
  { id: 5, nombre: 'Sofía Mendoza R.', carrera: 'Ing. en Software', empresa: 'Accionti', asesor: 'Mtra. Pérez', status: 'pendiente' },
  { id: 6, nombre: 'Carlos Torres M.', carrera: 'Administración', empresa: 'Walmart MX', asesor: 'Mtro. Solís', status: 'aprobada' },
])

const filtered = computed(() => {
  const q = search.value.toLowerCase()
  return records.value.filter(r =>
    r.nombre.toLowerCase().includes(q) ||
    r.empresa.toLowerCase().includes(q) ||
    r.carrera.toLowerCase().includes(q)
  )
})

const stats = computed(() => [
  { label: 'Total', val: records.value.length, color: '#e2e4e9' },
  { label: 'En curso', val: records.value.filter(r => r.status === 'en_curso').length, color: '#3996db' },
  { label: 'Completadas', val: records.value.filter(r => r.status === 'completada').length, color: '#82bc4f' },
  { label: 'Pendientes', val: records.value.filter(r => r.status === 'pendiente').length, color: '#eabd5f' },
])

function advance(r) {
  const idx = statusOrder.indexOf(r.status)
  if (idx < statusOrder.length - 1) r.status = statusOrder[idx + 1]
}

function addRecord() {
  records.value.unshift({ id: nextId++, ...form.value, status: 'pendiente' })
  form.value = { nombre: '', empresa: '', carrera: 'Ing. en Software', asesor: '' }
  showForm.value = false
}
</script>

<style scoped>
.demo { display: flex; flex-direction: column; gap: 14px; }

.demo-header { display: flex; gap: 10px; align-items: center; }
.search-input {
  flex: 1; padding: 8px 14px; border-radius: 8px;
  background: var(--gray600); border: 1px solid rgba(255,255,255,0.12);
  color: white; font-size: 13px;
}
.new-btn {
  padding: 8px 16px; background: var(--red); border: none; border-radius: 8px;
  color: white; cursor: pointer; font-size: 13px; white-space: nowrap;
}

.reg-form {
  background: rgba(255,255,255,0.05); border-radius: 10px; padding: 14px;
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;
}
.reg-form input, .reg-form select {
  padding: 8px 12px; border-radius: 8px;
  background: var(--gray600); border: 1px solid rgba(255,255,255,0.12);
  color: white; font-size: 13px;
}
.submit-btn {
  grid-column: 1 / -1; padding: 9px; background: #82bc4f;
  border: none; border-radius: 8px; color: white; cursor: pointer; font-weight: 600;
}

.stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.stat {
  background: rgba(255,255,255,0.05); border-radius: 10px;
  padding: 10px; text-align: center;
}
.stat-val { display: block; font-size: 20px; font-weight: 700; }
.stat-label { font-size: 11px; color: var(--gray300); }

.table-wrap { overflow-x: auto; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); }
table { width: 100%; border-collapse: collapse; }
th { padding: 10px 14px; text-align: left; font-size: 12px; color: var(--gray300); background: rgba(255,255,255,0.04); }
td { padding: 10px 14px; font-size: 13px; border-top: 1px solid rgba(255,255,255,0.06); }
.name { font-weight: 500; }
.muted { color: var(--gray300); }
.small { font-size: 12px; }
.no-results { text-align: center; color: var(--gray300); }

.badge {
  padding: 3px 10px; border-radius: 999px; font-size: 11px; font-weight: 600;
}
.badge.pendiente { background: rgba(255,255,255,0.08); color: var(--gray200); }
.badge.aprobada { background: rgba(234,189,95,0.2); color: #eabd5f; }
.badge.en_curso { background: rgba(57,150,219,0.2); color: #3996db; }
.badge.completada { background: rgba(130,188,79,0.2); color: #82bc4f; }

.advance-btn {
  padding: 4px 10px; background: rgba(255,255,255,0.08); border: none;
  border-radius: 6px; color: white; cursor: pointer; font-size: 13px;
}
.advance-btn:disabled { opacity: 0.4; cursor: default; }

@media (max-width: 600px) {
  .stats { grid-template-columns: repeat(2, 1fr); }
  .reg-form { grid-template-columns: 1fr; }
}
</style>
