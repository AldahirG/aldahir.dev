<template>
  <div class="view-wrap">
    <div class="view-head">
      <div>
        <h2>Inscripciones</h2>
        <p>Prospectos que avanzaron a proceso de inscripción</p>
      </div>
      <button class="btn-primary"><i class="bi bi-person-plus-fill"></i> Nueva inscripción</button>
    </div>

    <div class="stats-row">
      <div class="stat-card"><span class="stat-n">3</span><span class="stat-l">Total inscritos</span></div>
      <div class="stat-card green"><span class="stat-n">2</span><span class="stat-l">Documentación completa</span></div>
      <div class="stat-card yellow"><span class="stat-n">1</span><span class="stat-l">Pendiente de pago</span></div>
      <div class="stat-card red"><span class="stat-n">0</span><span class="stat-l">Rechazados</span></div>
    </div>

    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Nombre</th><th>Carrera</th><th>Ciclo</th><th>Promotor</th><th>Beca</th><th>Documentos</th><th>Pago</th><th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in rows" :key="r.name">
            <td class="td-name">{{ r.name }}</td>
            <td>{{ r.career }}</td>
            <td>{{ r.cycle }}</td>
            <td>{{ r.promoter }}</td>
            <td>{{ r.scholarship }}</td>
            <td><span :class="['badge', r.docsClass]">{{ r.docs }}</span></td>
            <td><span :class="['badge', r.payClass]">{{ r.pay }}</span></td>
            <td><span :class="['badge', r.stClass]">{{ r.status }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const rows = [
  { name: 'Valentina Cruz Ríos',  career: 'Enfermería',      cycle: '2025-2', promoter: 'Juan López',  scholarship: 'Beca Académica', docs: 'Completo',  docsClass: 'bg-green',  pay: 'Pagado',   payClass: 'bg-green',  status: 'Inscrita',  stClass: 'bg-green' },
  { name: 'Ana Martínez López',   career: 'Ing. en Software', cycle: '2025-2', promoter: 'Carlos Ruiz', scholarship: 'Sin beca',       docs: 'Completo',  docsClass: 'bg-green',  pay: 'Pendiente', payClass: 'bg-yellow', status: 'En proceso', stClass: 'bg-yellow' },
  { name: 'Sofía Mendoza R.',     career: 'Ing. en Software', cycle: '2025-2', promoter: 'María Pérez', scholarship: 'Sin beca',       docs: 'Incompleto', docsClass: 'bg-yellow', pay: 'Pendiente', payClass: 'bg-yellow', status: 'En proceso', stClass: 'bg-yellow' },
]
</script>

<style scoped>
.view-wrap { padding: 24px; font-family: 'Segoe UI', sans-serif; }

.view-head {
  display: flex; justify-content: space-between; align-items: flex-start;
  margin-bottom: 24px;
}
.view-head h2 { font-size: 20px; color: #1e293b; margin: 0 0 4px; font-weight: 700; }
.view-head p  { font-size: 13px; color: #64748b; margin: 0; }

.btn-primary {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 9px 16px; background: #1a2d4a; color: white;
  border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer;
}

.stats-row { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; margin-bottom: 24px; }

.stat-card {
  background: white; border: 1px solid #e2e8f0; border-radius: 12px;
  padding: 16px 18px; display: flex; flex-direction: column; gap: 4px;
}
.stat-n { font-size: 28px; font-weight: 800; color: #1e293b; }
.stat-l { font-size: 12px; color: #64748b; }
.stat-card.green .stat-n { color: #16a34a; }
.stat-card.yellow .stat-n { color: #ca8a04; }
.stat-card.red .stat-n   { color: #dc2626; }

.table-wrap { background: white; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; }
table { width: 100%; border-collapse: collapse; font-size: 13px; }
thead { background: #f8fafc; }
th { padding: 10px 14px; text-align: left; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.04em; border-bottom: 2px solid #e2e8f0; }
td { padding: 12px 14px; border-bottom: 1px solid #f1f5f9; color: #475569; }
.td-name { font-weight: 600; color: #1e293b; }

.badge { padding: 2px 10px; border-radius: 99px; font-size: 11px; font-weight: 700; }
.bg-green  { background: #dcfce7; color: #166534; }
.bg-yellow { background: #fef3c7; color: #92400e; }
.bg-red    { background: #fee2e2; color: #991b1b; }
</style>
