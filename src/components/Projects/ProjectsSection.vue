<template>
  <section id="projects" class="projects">
    <div class="container">

      <p class="section-label">Mi trabajo</p>
      <h2 class="section-title">Proyectos destacados</h2>

      <!-- FILTROS -->
      <div class="filter-row">
        <button
          v-for="f in filters"
          :key="f.key"
          class="filter-pill"
          :class="{ active: activeFilter === f.key }"
          @click="activeFilter = f.key"
        >
          <span v-if="f.icon" v-html="f.icon" class="pill-icon"></span>
          {{ f.label }}
        </button>
      </div>

      <!-- GRID -->
      <div class="projects-grid">
        <div
          v-for="project in filtered"
          :key="project.title"
          class="card-appear"
        >
          <ProjectCard :project="project" @open-demo="openDemo" />
        </div>
      </div>

      <p v-if="filtered.length === 0" class="no-results">
        No hay proyectos con esa tecnología aún.
      </p>

    </div>
  </section>

  <DemoModal
    v-if="activeProject"
    :project="activeProject"
    @close="activeProject = null"
  />
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import ProjectCard from './ProjectCard.vue'
import DemoModal from '../Demo/DemoModal.vue'
import { projects } from '../../data/projects'

const activeProject = ref(null)
const activeFilter = ref('all')

function openDemo(project) { activeProject.value = project }

const filters = [
  { key: 'all',         label: 'Todos',       icon: null },
  { key: 'Java',        label: 'Java',        icon: '<span style="font-size:12px">☕</span>' },
  { key: 'Spring Boot', label: 'Spring Boot', icon: '<span style="color:#6db33f;font-size:12px">🌿</span>' },
  { key: 'Vue 3',       label: 'Vue 3',       icon: '<img src="/icons/vue.png" style="width:13px;height:13px;vertical-align:middle" />' },
  { key: 'React',       label: 'React',       icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2.5" fill="#61dafb"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" stroke-width="1.5" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" stroke-width="1.5" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" stroke-width="1.5" fill="none" transform="rotate(120 12 12)"/></svg>' },
  { key: 'Node.js',     label: 'Node.js',     icon: '<img src="/icons/node-js.png" style="width:13px;height:13px;vertical-align:middle" />' },
  { key: 'NestJS',      label: 'NestJS',      icon: '<span style="background:#e0234e;color:#fff;font-size:9px;font-weight:700;padding:1px 4px;border-radius:3px;line-height:1.4">N</span>' },
  { key: 'TypeScript',  label: 'TypeScript',  icon: '<span style="background:#3178c6;color:#fff;font-size:9px;font-weight:700;padding:1px 4px;border-radius:3px;line-height:1.4">TS</span>' },
  { key: 'MongoDB',     label: 'MongoDB',     icon: '<span style="font-size:12px">🍃</span>' },
  { key: 'React Native',label: 'Mobile',      icon: '<span style="color:#61dafb;font-size:12px">⬡</span>' },
]

const filtered = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter(p => p.tags.includes(activeFilter.value))
})

// Animación de entrada
function revealCards() {
  nextTick(() => {
    const cards = document.querySelectorAll('#projects .card-appear:not(.visible)')
    if (!cards.length) return
    const vh = window.innerHeight

    cards.forEach((el, i) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < vh + 60 && rect.bottom > 0) {
        // Stagger para los que ya están en viewport
        setTimeout(() => el.classList.add('visible'), i * 80)
      }
    })
  })
}

function onScroll() {
  const cards = document.querySelectorAll('#projects .card-appear:not(.visible)')
  if (!cards.length) { window.removeEventListener('scroll', onScroll); return }
  const vh = window.innerHeight
  cards.forEach(el => {
    const rect = el.getBoundingClientRect()
    if (rect.top < vh - 30) el.classList.add('visible')
  })
}

// Cuando cambia el filtro, revelar cards inmediatamente (ya están en viewport)
watch(activeFilter, () => {
  nextTick(() => {
    document.querySelectorAll('#projects .card-appear').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60)
    })
  })
})

onMounted(() => {
  // Pequeño delay para asegurar que el DOM está pintado
  setTimeout(revealCards, 100)
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.projects { padding: 120px 0; }

.section-label {
  text-align: center;
  color: var(--red);
  margin-bottom: 10px;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.section-title {
  text-align: center;
  font-size: 32px;
  margin-bottom: 36px;
  background: linear-gradient(135deg, #fff 30%, var(--red) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* FILTROS */
.filter-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 48px;
}

.filter-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 16px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.04);
  color: var(--gray300);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-pill:hover {
  border-color: rgba(227,100,110,0.35);
  color: var(--gray100);
  background: rgba(227,100,110,0.08);
}

.filter-pill.active {
  background: rgba(227,100,110,0.15);
  border-color: rgba(227,100,110,0.5);
  color: white;
  font-weight: 600;
}

.pill-icon {
  display: inline-flex;
  align-items: center;
  line-height: 1;
}

/* GRID */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

/* ANIMACIÓN ENTRADA */
.card-appear {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.card-appear.visible {
  opacity: 1;
  transform: translateY(0);
}

.no-results {
  text-align: center;
  color: var(--gray300);
  font-style: italic;
  padding: 48px 0;
}

@media (max-width: 900px) {
  .projects-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .projects-grid { grid-template-columns: 1fr; }
}
</style>
