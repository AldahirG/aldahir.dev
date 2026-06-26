<template>
  <section id="experience" class="experience">
    <div class="container">

      <p class="section-label">Trayectoria</p>
      <h2 class="section-title">Experiencia & Formación</h2>

      <!-- STATS -->
      <div class="stats-row">
        <div class="stat-card" v-for="stat in stats" :key="stat.label">
          <span class="stat-number">
            <span class="stat-prefix">{{ stat.prefix }}</span>{{ stat.animated }}<span class="stat-suffix">{{ stat.suffix }}</span>
          </span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>

      <!-- TIMELINE -->
      <div class="timeline">

        <!-- UNINTER -->
        <div class="timeline-item">
          <div class="timeline-dot dot-active"></div>
          <div class="timeline-line"></div>
          <div class="timeline-card">
            <div class="tcard-header">
              <div>
                <h3 class="tcard-title">Desarrollador Web Fullstack</h3>
                <p class="tcard-company">Universidad Internacional · UNINTER</p>
              </div>
              <div class="tcard-meta">
                <span class="badge-active">● Actual</span>
                <span class="tcard-date">Sep 2023 – Presente</span>
                <span class="tcard-location">📍 Cuernavaca, Morelos</span>
              </div>
            </div>
            <ul class="tcard-list">
              <li>Diseñé e implementé <strong>4+ plataformas digitales institucionales</strong> con componentes reutilizables, reduciendo tiempos de gestión manual en <strong>~60%</strong>.</li>
              <li>Construí un <strong>CRM</strong> que centraliza el seguimiento de <strong>+500 prospectos estudiantiles</strong> mensuales mediante APIs REST.</li>
              <li>Desarrollé plataformas adoptadas por <strong>5+ áreas</strong> de la universidad, coordinando equipos de diseño, operaciones y tecnología.</li>
              <li>Implementé <strong>pipelines CI/CD con GitHub Actions</strong> para automatizar pruebas y despliegue.</li>
            </ul>
            <div class="tcard-tags">
              <span class="ttag">Vue 3</span>
              <span class="ttag">TypeScript</span>
              <span class="ttag">NestJS</span>
              <span class="ttag">Tailwind</span>
              <span class="ttag">Pinia</span>
              <span class="ttag">MySQL</span>
              <span class="ttag">GitHub Actions</span>
            </div>
          </div>
        </div>

        <!-- ACCIONTI -->
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-line"></div>
          <div class="timeline-card">
            <div class="tcard-header">
              <div>
                <h3 class="tcard-title">Desarrollador Front/Back-end</h3>
                <p class="tcard-company">AccionTI</p>
              </div>
              <div class="tcard-meta">
                <span class="tcard-date">May 2022 – Ene 2023</span>
                <span class="tcard-location">📍 Monterrey, Nuevo León</span>
              </div>
            </div>
            <ul class="tcard-list">
              <li>Desarrollé y mantuve <strong>+8 aplicaciones web progresivas (PWA)</strong> para clientes de la empresa.</li>
              <li>Automaticé la <strong>logística de procesos internos</strong>, reduciendo dependencia de flujos manuales en <strong>~50%</strong>.</li>
            </ul>
            <div class="tcard-tags">
              <span class="ttag">React Native</span>
              <span class="ttag">Node.js</span>
              <span class="ttag">TypeScript</span>
              <span class="ttag">PWA</span>
            </div>
          </div>
        </div>

        <!-- EDUCACION -->
        <div class="timeline-item edu-item">
          <div class="timeline-dot dot-edu"></div>
          <div class="timeline-card">
            <div class="tcard-header">
              <div>
                <h3 class="tcard-title">Ingeniería en Desarrollo y Gestión de Software</h3>
                <p class="tcard-company">Universidad Tecnológica Emiliano Zapata</p>
              </div>
              <div class="tcard-meta">
                <span class="tcard-date">2020 – 2025 · Emiliano Zapata, Mor.</span>
              </div>
            </div>
            <p class="tcard-edu-note">TSU en Desarrollo de Software Multiplataforma (2020–2022) → Ingeniería en Software (2022–2025)</p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const stats = ref([
  { prefix: '', value: 4,   suffix: '+', label: 'Años de experiencia',       animated: '0' },
  { prefix: '', value: 20,  suffix: '+', label: 'Proyectos desarrollados',    animated: '0' },
  { prefix: '', value: 10,  suffix: '+', label: 'Tecnologías dominadas',      animated: '0' },
  { prefix: '', value: 3,   suffix: '+', label: 'Empresas & clientes',        animated: '0' },
])

function animateCounter(stat, duration = 1200) {
  const start = performance.now()
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    stat.animated = Math.floor(eased * stat.value).toString()
    if (progress < 1) requestAnimationFrame(update)
    else stat.animated = stat.value.toString()
  }
  requestAnimationFrame(update)
}

onMounted(() => {
  const section = document.querySelector('.stats-row')
  if (!section) return
  const run = () => stats.value.forEach((s, i) => setTimeout(() => animateCounter(s), i * 150))
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) { run(); observer.disconnect() }
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
  // fire immediately if already visible
  if (section.getBoundingClientRect().top < window.innerHeight) run()
  else observer.observe(section)
})
</script>

<style scoped>
.experience { padding: 120px 0; }

.section-label {
  text-align: center;
  color: var(--red);
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.section-title {
  text-align: center;
  font-size: 32px;
  margin-bottom: 56px;
  background: linear-gradient(135deg, #fff 30%, var(--red) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* STATS */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 64px;
}

.stat-card {
  background: var(--gray500);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px;
  padding: 28px 20px;
  text-align: center;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.stat-card:hover {
  border-color: rgba(227, 100, 110, 0.3);
  box-shadow: 0 8px 30px rgba(227, 100, 110, 0.1);
}

.stat-number {
  display: block;
  font-size: 42px;
  font-weight: 800;
  letter-spacing: -2px;
  background: linear-gradient(135deg, #fff, var(--red));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-prefix { font-size: 28px; }
.stat-suffix { font-size: 28px; }

.stat-label {
  font-size: 12px;
  color: var(--gray300);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* TIMELINE */
.timeline {
  position: relative;
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.timeline-item {
  display: grid;
  grid-template-columns: 20px 2px 1fr;
  gap: 0 20px;
  position: relative;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--gray400);
  border: 2px solid var(--gray300);
  margin-top: 22px;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
  grid-column: 1;
  align-self: start;
}

.dot-active {
  background: var(--green);
  border-color: var(--green);
  box-shadow: 0 0 12px rgba(130, 188, 79, 0.5);
  animation: pulse 2s infinite;
}

.dot-edu {
  background: var(--purple);
  border-color: var(--purple);
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 8px rgba(130, 188, 79, 0.5); }
  50%       { box-shadow: 0 0 20px rgba(130, 188, 79, 0.8); }
}

.timeline-line {
  grid-column: 2;
  width: 2px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(255,255,255,0.04));
  align-self: stretch;
}

.timeline-card {
  grid-column: 3;
  background: var(--gray500);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px;
  padding: 22px 24px;
  margin-bottom: 24px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.timeline-card:hover {
  border-color: rgba(255,255,255,0.14);
  box-shadow: 0 8px 30px rgba(0,0,0,0.3);
}

.tcard-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 14px;
  flex-wrap: wrap;
}

.tcard-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--gray100);
  margin-bottom: 3px;
}

.tcard-company {
  font-size: 13px;
  color: var(--red);
  font-weight: 600;
}

.tcard-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  flex-shrink: 0;
}

.badge-active {
  font-size: 11px;
  color: var(--green);
  font-weight: 700;
  letter-spacing: 0.3px;
}

.tcard-date {
  font-size: 12px;
  color: var(--gray300);
}

.tcard-location {
  font-size: 11px;
  color: var(--gray300);
}

.tcard-list {
  list-style: none;
  padding: 0;
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.tcard-list li {
  font-size: 13.5px;
  color: var(--gray300);
  line-height: 1.5;
  padding-left: 16px;
  position: relative;
}

.tcard-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--red);
  flex-shrink: 0;
}

.tcard-list li strong { color: var(--gray100); font-weight: 600; }

.tcard-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.ttag {
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: var(--gray200);
}

.tcard-edu-note {
  font-size: 13px;
  color: var(--gray300);
  line-height: 1.5;
}

.edu-item .timeline-line { display: none; }

@media (max-width: 700px) {
  .stats-row { grid-template-columns: 1fr 1fr; }
  .stat-number { font-size: 32px; }
  .tcard-header { flex-direction: column; }
  .tcard-meta { align-items: flex-start; }
  .timeline-item { grid-template-columns: 14px 2px 1fr; gap: 0 12px; }
}

@media (max-width: 420px) {
  .stats-row { grid-template-columns: 1fr 1fr; }
}
</style>
