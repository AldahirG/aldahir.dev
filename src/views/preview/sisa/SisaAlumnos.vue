<template>
  <div class="view-wrap">
    <div class="view-head">
      <div>
        <h2>Alumnos</h2>
        <p>Registro y gestión de alumnos en prácticas profesionales</p>
      </div>
      <button class="btn-primary"><i class="pi pi-user-plus"></i> Nuevo alumno</button>
    </div>

    <div class="controls-row">
      <div class="search-wrap">
        <i class="pi pi-search"></i>
        <input v-model="search" type="text" placeholder="Buscar por nombre o matrícula..." />
      </div>
      <select v-model="filterStatus">
        <option value="">Todos los estados</option>
        <option>Asignado</option>
        <option>Sin asignar</option>
        <option>Completado</option>
      </select>
    </div>

    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Matrícula</th><th>Nombre</th><th>Carrera</th><th>Empresa</th><th>Asesor</th><th>Período</th><th>Horas</th><th>Estado</th><th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in filtered" :key="a.id">
            <td class="td-mat">{{ a.mat }}</td>
            <td class="td-name">{{ a.name }}</td>
            <td>{{ a.career }}</td>
            <td>{{ a.company || '—' }}</td>
            <td>{{ a.asesor || '—' }}</td>
            <td>{{ a.period }}</td>
            <td>
              <div class="hours-wrap">
                <div class="hours-bar-track">
                  <div class="hours-bar" :style="{ width: (a.hours/480*100)+'%', background: hoursColor(a.hours) }"></div>
                </div>
                <span class="hours-txt">{{ a.hours }}/480h</span>
              </div>
            </td>
            <td><span :class="['badge', statusClass(a.status)]">{{ a.status }}</span></td>
            <td>
              <button class="dot-btn"><i class="pi pi-ellipsis-v"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-footer">
      <span>{{ filtered.length }} alumnos</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')
const filterStatus = ref('')

const alumnos = [
  { id:1, mat:'UTZ2021001', name:'Andrea Solís García',     career:'Ing. en Software', company:'TechSolutions MX',     asesor:'Ing. Ramírez', period:'ENE–JUN 2025', hours:480, status:'Completado' },
  { id:2, mat:'UTZ2021042', name:'Marco Ávila Pérez',       career:'Ing. en Software', company:'Grupo Industrial Norte', asesor:'Ing. Ramírez', period:'ENE–JUN 2025', hours:320, status:'Asignado' },
  { id:3, mat:'UTZ2022018', name:'Daniela Fuentes López',   career:'Administración',   company:'Banco Regional SA',    asesor:'Lic. Torres',  period:'ENE–JUN 2025', hours:240, status:'Asignado' },
  { id:4, mat:'UTZ2022055', name:'Rodrigo Castillo Vera',   career:'Ing. en Software', company:null,                   asesor:null,           period:'ENE–JUN 2025', hours:0,   status:'Sin asignar' },
  { id:5, mat:'UTZ2021099', name:'Fernanda Ortiz Méndez',   career:'Diseño Gráfico',   company:'Agencia Creativa HQ',  asesor:'Lic. García',  period:'ENE–JUN 2025', hours:150, status:'Asignado' },
  { id:6, mat:'UTZ2020077', name:'Iván Morales Rivas',      career:'Administración',   company:null,                   asesor:null,           period:'ENE–JUN 2025', hours:0,   status:'Sin asignar' },
]

const filtered = computed(() => alumnos.filter(a => {
  const q = search.value.toLowerCase()
  const matchQ = !q || a.name.toLowerCase().includes(q) || a.mat.includes(q)
  const matchS = !filterStatus.value || a.status === filterStatus.value
  return matchQ && matchS
}))

function statusClass(s) {
  if (s === 'Completado') return 'bg-green'
  if (s === 'Asignado')   return 'bg-blue'
  return 'bg-gray'
}

function hoursColor(h) {
  if (h >= 480) return '#22c55e'
  if (h >= 240) return '#3b82f6'
  if (h > 0)    return '#f59e0b'
  return '#e2e8f0'
}
</script>

<style scoped>
.view-wrap { padding: 24px; font-family: 'Segoe UI', sans-serif; }

.view-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
.view-head h2 { font-size: 20px; color: #1e293b; margin: 0 0 4px; font-weight: 700; }
.view-head p  { font-size: 13px; color: #64748b; margin: 0; }

.btn-primary {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 9px 16px; background: #1a5c8e; color: white;
  border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer;
}

.controls-row { display: flex; gap: 10px; margin-bottom: 16px; }
.search-wrap { position: relative; flex: 1; max-width: 380px; }
.search-wrap i { position: absolute; left: 11px; top: 50%; transform: translateY(-50%); color: #94a3b8; font-size: 13px; }
.search-wrap input {
  width: 100%; padding: 8px 12px 8px 34px; border: 1px solid #e2e8f0;
  border-radius: 8px; font-size: 13px; color: #1e293b; box-sizing: border-box;
}
.controls-row select {
  padding: 8px 12px; border: 1px solid #e2e8f0; border-radius: 8px;
  font-size: 13px; color: #475569;
}

.table-wrap { background: white; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; }
table { width: 100%; border-collapse: collapse; font-size: 13px; }
thead { background: #f8fafc; }
th { padding: 10px 14px; text-align: left; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.04em; border-bottom: 2px solid #e2e8f0; white-space: nowrap; }
td { padding: 11px 14px; border-bottom: 1px solid #f1f5f9; color: #475569; white-space: nowrap; }
.td-name { font-weight: 600; color: #1e293b; }
.td-mat  { font-size: 11.5px; color: #94a3b8; font-family: monospace; }

.hours-wrap { display: flex; align-items: center; gap: 8px; }
.hours-bar-track { width: 60px; height: 6px; background: #f1f5f9; border-radius: 99px; overflow: hidden; }
.hours-bar { height: 100%; border-radius: 99px; transition: width 0.5s; }
.hours-txt { font-size: 11px; color: #64748b; white-space: nowrap; }

.badge { padding: 2px 10px; border-radius: 99px; font-size: 11px; font-weight: 700; }
.bg-green { background: #dcfce7; color: #166534; }
.bg-blue  { background: #dbeafe; color: #1d4ed8; }
.bg-gray  { background: #f1f5f9; color: #64748b; }

.dot-btn { background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 6px; padding: 4px 8px; cursor: pointer; color: #64748b; }

.table-footer { padding: 10px 16px; background: white; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; font-weight: 600; }
</style>
