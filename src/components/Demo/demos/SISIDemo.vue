<template>
  <div class="demo">
    <!-- HEADER ACTIONS -->
    <div class="demo-header">
      <span class="total">{{ allCards.length }} solicitudes activas</span>
      <button class="new-btn" @click="showForm = !showForm">
        {{ showForm ? '✕ Cancelar' : '+ Nueva solicitud' }}
      </button>
    </div>

    <!-- FORM NUEVA SOLICITUD -->
    <form v-if="showForm" class="new-form" @submit.prevent="addCard">
      <input v-model="form.titulo" placeholder="Título de la solicitud" required />
      <select v-model="form.tipo">
        <option value="Banner">Banner</option>
        <option value="Postal">Postal</option>
        <option value="Tarjeta">Tarjeta de presentación</option>
        <option value="Video">Video promocional</option>
      </select>
      <input v-model="form.solicitante" placeholder="Solicitante" required />
      <button type="submit" class="submit-btn">Crear solicitud</button>
    </form>

    <!-- KANBAN -->
    <div class="kanban">
      <div v-for="col in columns" :key="col.id" class="column">
        <div class="col-header">
          <span class="col-dot" :style="{ background: col.color }"></span>
          <span class="col-title">{{ col.label }}</span>
          <span class="col-count">{{ cardsByCol(col.id).length }}</span>
        </div>
        <div class="cards">
          <div
            v-for="card in cardsByCol(col.id)"
            :key="card.id"
            class="card"
          >
            <div class="card-top">
              <span class="card-tipo" :style="{ color: tipoColor(card.tipo) }">{{ card.tipo }}</span>
              <span class="card-date">{{ card.fecha }}</span>
            </div>
            <p class="card-title">{{ card.titulo }}</p>
            <div class="card-footer">
              <span class="card-user">👤 {{ card.solicitante }}</span>
              <div class="card-actions">
                <button
                  v-if="col.id !== 'pendiente'"
                  class="move-btn"
                  @click="moveCard(card, -1)"
                  title="Retroceder"
                >←</button>
                <button
                  v-if="col.id !== 'completado'"
                  class="move-btn primary"
                  @click="moveCard(card, 1)"
                  title="Avanzar"
                >→</button>
              </div>
            </div>
          </div>
          <div v-if="cardsByCol(col.id).length === 0" class="empty-col">Sin solicitudes</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const showForm = ref(false)
const form = ref({ titulo: '', tipo: 'Banner', solicitante: '' })
let nextId = 10

const columns = [
  { id: 'pendiente', label: 'Pendiente', color: '#878ea1' },
  { id: 'proceso', label: 'En proceso', color: '#eabd5f' },
  { id: 'revision', label: 'En revisión', color: '#3996db' },
  { id: 'completado', label: 'Completado', color: '#82bc4f' },
]
const colOrder = ['pendiente', 'proceso', 'revision', 'completado']

const allCards = ref([
  { id: 1, titulo: 'Banner Feria de Carreras 2025', tipo: 'Banner', solicitante: 'Promoción', fecha: '10 Jun', col: 'completado' },
  { id: 2, titulo: 'Tarjetas Rectoría Q2', tipo: 'Tarjeta', solicitante: 'Rectoría', fecha: '11 Jun', col: 'proceso' },
  { id: 3, titulo: 'Postal Congreso de Ingeniería', tipo: 'Postal', solicitante: 'Vinculación', fecha: '12 Jun', col: 'proceso' },
  { id: 4, titulo: 'Video Bienvenida Semestre', tipo: 'Video', solicitante: 'Dirección', fecha: '13 Jun', col: 'pendiente' },
  { id: 5, titulo: 'Banner Graduación Jul 2025', tipo: 'Banner', solicitante: 'Servicios Escolares', fecha: '13 Jun', col: 'revision' },
  { id: 6, titulo: 'Tarjetas Departamento TI', tipo: 'Tarjeta', solicitante: 'TI', fecha: '14 Jun', col: 'pendiente' },
])

function cardsByCol(colId) {
  return allCards.value.filter(c => c.col === colId)
}

function moveCard(card, dir) {
  const idx = colOrder.indexOf(card.col)
  const next = colOrder[idx + dir]
  if (next) card.col = next
}

function addCard() {
  allCards.value.unshift({
    id: nextId++,
    titulo: form.value.titulo,
    tipo: form.value.tipo,
    solicitante: form.value.solicitante,
    fecha: 'Hoy',
    col: 'pendiente'
  })
  form.value = { titulo: '', tipo: 'Banner', solicitante: '' }
  showForm.value = false
}

const tipoColors = { Banner: '#bb72e9', Postal: '#3996db', Tarjeta: '#eabd5f', Video: '#e3646e' }
function tipoColor(tipo) { return tipoColors[tipo] || '#878ea1' }
</script>

<style scoped>
.demo { display: flex; flex-direction: column; gap: 16px; }

.demo-header {
  display: flex; justify-content: space-between; align-items: center;
}
.total { font-size: 13px; color: var(--gray300); }
.new-btn {
  padding: 7px 16px; background: var(--red); border: none; border-radius: 8px;
  color: white; cursor: pointer; font-size: 13px; transition: background 0.2s;
}
.new-btn:hover { background: #c0444d; }

.new-form {
  background: rgba(255,255,255,0.05); border-radius: 10px; padding: 14px;
  display: flex; gap: 10px; flex-wrap: wrap;
}
.new-form input, .new-form select {
  flex: 1; min-width: 140px; padding: 8px 12px; border-radius: 8px;
  background: var(--gray600); border: 1px solid rgba(255,255,255,0.12);
  color: white; font-size: 13px;
}
.submit-btn {
  padding: 8px 18px; background: #82bc4f; border: none; border-radius: 8px;
  color: white; cursor: pointer; font-size: 13px; font-weight: 600;
}

.kanban {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  min-height: 300px;
}

.column {
  background: rgba(255,255,255,0.03);
  border-radius: 10px; padding: 12px;
  border: 1px solid rgba(255,255,255,0.07);
}

.col-header {
  display: flex; align-items: center; gap: 8px; margin-bottom: 12px;
}
.col-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.col-title { font-size: 13px; font-weight: 600; flex: 1; }
.col-count {
  background: rgba(255,255,255,0.1); border-radius: 999px;
  padding: 1px 8px; font-size: 11px; color: var(--gray300);
}

.cards { display: flex; flex-direction: column; gap: 8px; }

.card {
  background: var(--gray500); border-radius: 8px; padding: 10px;
  border: 1px solid rgba(255,255,255,0.07);
  transition: transform 0.15s;
}
.card:hover { transform: translateY(-2px); }

.card-top { display: flex; justify-content: space-between; margin-bottom: 6px; }
.card-tipo { font-size: 11px; font-weight: 600; }
.card-date { font-size: 11px; color: var(--gray300); }
.card-title { font-size: 12px; line-height: 1.4; margin-bottom: 8px; }
.card-footer { display: flex; justify-content: space-between; align-items: center; }
.card-user { font-size: 11px; color: var(--gray300); }
.card-actions { display: flex; gap: 4px; }
.move-btn {
  padding: 3px 8px; background: rgba(255,255,255,0.08); border: none;
  border-radius: 6px; color: var(--gray200); cursor: pointer; font-size: 12px;
  transition: background 0.15s;
}
.move-btn.primary { background: rgba(227,100,110,0.3); color: #e3646e; }
.move-btn:hover { background: rgba(255,255,255,0.15); }

.empty-col { font-size: 12px; color: var(--gray300); text-align: center; padding: 20px 0; }

@media (max-width: 700px) {
  .kanban { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .kanban { grid-template-columns: 1fr; }
}
</style>
