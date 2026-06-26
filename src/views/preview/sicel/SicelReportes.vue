<template>
  <div class="view-wrap">
    <div class="view-head">
      <div>
        <h2>Reportes</h2>
        <p>Métricas y conversión del ciclo 2025-2</p>
      </div>
      <button class="btn-export"><i class="bi bi-download"></i> Exportar CSV</button>
    </div>

    <!-- KPIs -->
    <div class="kpi-row">
      <div class="kpi-card">
        <span class="kpi-icon">👥</span>
        <div><span class="kpi-n">10</span><span class="kpi-l">Total leads</span></div>
      </div>
      <div class="kpi-card">
        <span class="kpi-icon">✅</span>
        <div><span class="kpi-n" style="color:#16a34a">3</span><span class="kpi-l">Inscritos</span></div>
      </div>
      <div class="kpi-card">
        <span class="kpi-icon">📊</span>
        <div><span class="kpi-n" style="color:#2d5a8e">30%</span><span class="kpi-l">Conversión</span></div>
      </div>
      <div class="kpi-card">
        <span class="kpi-icon">📣</span>
        <div><span class="kpi-n">3</span><span class="kpi-l">Promotores activos</span></div>
      </div>
    </div>

    <div class="charts-grid">
      <!-- Por seguimiento -->
      <div class="chart-card">
        <h3>Leads por seguimiento</h3>
        <div class="bar-chart">
          <div v-for="b in byFollowUp" :key="b.label" class="bar-row">
            <span class="bar-label">{{ b.label }}</span>
            <div class="bar-track">
              <div class="bar-fill" :style="{ width: b.pct + '%', background: b.color }"></div>
            </div>
            <span class="bar-val">{{ b.count }}</span>
          </div>
        </div>
      </div>

      <!-- Por canal -->
      <div class="chart-card">
        <h3>Leads por canal de captación</h3>
        <div class="bar-chart">
          <div v-for="b in byChannel" :key="b.label" class="bar-row">
            <span class="bar-label">{{ b.label }}</span>
            <div class="bar-track">
              <div class="bar-fill" :style="{ width: b.pct + '%', background: b.color }"></div>
            </div>
            <span class="bar-val">{{ b.count }}</span>
          </div>
        </div>
      </div>

      <!-- Por carrera -->
      <div class="chart-card">
        <h3>Interés por carrera</h3>
        <div class="bar-chart">
          <div v-for="b in byCareer" :key="b.label" class="bar-row">
            <span class="bar-label">{{ b.label }}</span>
            <div class="bar-track">
              <div class="bar-fill" :style="{ width: b.pct + '%', background: '#6366f1' }"></div>
            </div>
            <span class="bar-val">{{ b.count }}</span>
          </div>
        </div>
      </div>

      <!-- Por promotor -->
      <div class="chart-card">
        <h3>Leads por promotor</h3>
        <div class="promotor-list">
          <div v-for="p in byPromotor" :key="p.name" class="promotor-row">
            <div class="p-avatar">{{ p.name.charAt(0) }}</div>
            <div class="p-info">
              <span class="p-name">{{ p.name }}</span>
              <div class="p-bar-track"><div class="p-bar" :style="{ width: p.pct + '%' }"></div></div>
            </div>
            <span class="p-count">{{ p.count }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const byFollowUp = [
  { label: 'Interesado/a',    count: 3, pct: 30, color: '#f59e0b' },
  { label: 'Contactado/a',    count: 2, pct: 20, color: '#3b82f6' },
  { label: 'Inscrito/a',      count: 3, pct: 30, color: '#22c55e' },
  { label: 'Sin información', count: 2, pct: 20, color: '#94a3b8' },
]
const byChannel = [
  { label: 'Facebook Ads',   count: 3, pct: 30, color: '#3b82f6' },
  { label: 'Google Ads',     count: 2, pct: 20, color: '#f59e0b' },
  { label: 'Feria Educativa',count: 2, pct: 20, color: '#8b5cf6' },
  { label: 'Visita Escolar', count: 1, pct: 10, color: '#14b8a6' },
  { label: 'Instagram Ads',  count: 1, pct: 10, color: '#ec4899' },
  { label: 'TikTok Ads',     count: 1, pct: 10, color: '#000' },
]
const byCareer = [
  { label: 'Ing. en Software', count: 3, pct: 30 },
  { label: 'Enfermería',       count: 1, pct: 10 },
  { label: 'Administración',   count: 1, pct: 10 },
  { label: 'Psicología',       count: 1, pct: 10 },
  { label: 'Medicina',         count: 1, pct: 10 },
  { label: 'Otros',            count: 3, pct: 30 },
]
const byPromotor = [
  { name: 'Carlos Ruiz', count: 3, pct: 75 },
  { name: 'María Pérez', count: 3, pct: 75 },
  { name: 'Juan López',  count: 2, pct: 50 },
  { name: 'Sin asignar', count: 2, pct: 50 },
]
</script>

<style scoped>
.view-wrap { padding: 24px; font-family: 'Segoe UI', sans-serif; }

.view-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; }
.view-head h2 { font-size: 20px; color: #1e293b; margin: 0 0 4px; font-weight: 700; }
.view-head p  { font-size: 13px; color: #64748b; margin: 0; }

.btn-export {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 9px 16px; background: white; color: #1e293b;
  border: 1px solid #e2e8f0; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer;
}

.kpi-row { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; margin-bottom: 24px; }
.kpi-card {
  background: white; border: 1px solid #e2e8f0; border-radius: 12px;
  padding: 16px 18px; display: flex; align-items: center; gap: 14px;
}
.kpi-icon { font-size: 24px; }
.kpi-n { font-size: 26px; font-weight: 800; color: #1e293b; display: block; }
.kpi-l { font-size: 12px; color: #64748b; }

.charts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

.chart-card {
  background: white; border: 1px solid #e2e8f0; border-radius: 12px;
  padding: 18px 20px;
}
.chart-card h3 { font-size: 13px; font-weight: 700; color: #1e293b; margin: 0 0 16px; }

.bar-chart { display: flex; flex-direction: column; gap: 10px; }
.bar-row { display: flex; align-items: center; gap: 10px; }
.bar-label { font-size: 11.5px; color: #64748b; width: 130px; flex-shrink: 0; }
.bar-track { flex: 1; height: 8px; background: #f1f5f9; border-radius: 99px; overflow: hidden; }
.bar-fill  { height: 100%; border-radius: 99px; transition: width 0.6s ease; }
.bar-val   { font-size: 12px; font-weight: 700; color: #1e293b; width: 20px; text-align: right; }

.promotor-list { display: flex; flex-direction: column; gap: 12px; }
.promotor-row  { display: flex; align-items: center; gap: 10px; }
.p-avatar {
  width: 30px; height: 30px; border-radius: 50%;
  background: #1a2d4a; color: white; font-weight: 700; font-size: 12px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.p-info { flex: 1; }
.p-name { font-size: 12px; font-weight: 600; color: #1e293b; display: block; margin-bottom: 4px; }
.p-bar-track { height: 6px; background: #f1f5f9; border-radius: 99px; overflow: hidden; }
.p-bar { height: 100%; background: #2d5a8e; border-radius: 99px; }
.p-count { font-size: 12px; font-weight: 700; color: #1e293b; }
</style>
