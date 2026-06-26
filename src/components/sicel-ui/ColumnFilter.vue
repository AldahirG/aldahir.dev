<template>
  <span class="col-filter">
    <button class="filter-btn" @click.stop="open = !open" :class="{ active: selected.length }">
      <i class="bi bi-funnel-fill"></i>
    </button>
    <div v-if="open" class="filter-panel" @click.stop>
      <p class="filter-title">Filtrar</p>
      <label v-for="val in unique" :key="val" class="filter-option">
        <input type="checkbox" :value="val" v-model="selected" />
        <span>{{ val }}</span>
      </label>
      <div class="filter-actions">
        <button class="fa-clear" @click="clear">Limpiar</button>
        <button class="fa-apply" @click="apply">Aplicar</button>
      </div>
    </div>
  </span>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({ field: String, leads: Array })
const emit = defineEmits(['filter-applied'])

const open = ref(false)
const selected = ref([])

const unique = computed(() => {
  const vals = props.leads.map(l => {
    const v = props.field.split('.').reduce((a, k) => a?.[k], l)
    return v ?? '(Vacías)'
  })
  return [...new Set(vals)].sort()
})

function apply() {
  emit('filter-applied', { key: props.field, value: [...selected.value] })
  open.value = false
}

function clear() {
  selected.value = []
  emit('filter-applied', { key: props.field, value: [] })
  open.value = false
}

function closeOnOutside() { open.value = false }
onMounted(() => document.addEventListener('click', closeOnOutside))
onUnmounted(() => document.removeEventListener('click', closeOnOutside))
</script>

<style scoped>
.col-filter { position: relative; display: inline-block; margin-left: 4px; }

.filter-btn {
  background: none; border: none; cursor: pointer;
  color: #94a3b8; font-size: 11px; padding: 2px 4px;
  border-radius: 4px; line-height: 1;
}
.filter-btn:hover, .filter-btn.active { color: #2d5a8e; background: #dbeafe; }

.filter-panel {
  position: absolute; top: 100%; left: 0; z-index: 300;
  background: white; border: 1px solid #e2e8f0; border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  min-width: 180px; padding: 10px;
}

.filter-title {
  font-size: 10px; font-weight: 700; color: #94a3b8;
  text-transform: uppercase; letter-spacing: 0.05em;
  margin: 0 0 8px;
}

.filter-option {
  display: flex; align-items: center; gap: 8px;
  padding: 4px 0; cursor: pointer; font-size: 12px; color: #475569;
}
.filter-option input { accent-color: #2d5a8e; }

.filter-actions {
  display: flex; gap: 6px; margin-top: 10px;
  border-top: 1px solid #f1f5f9; padding-top: 8px;
}

.fa-clear {
  flex: 1; padding: 5px; border: 1px solid #e2e8f0;
  background: white; color: #64748b; font-size: 11px;
  border-radius: 5px; cursor: pointer;
}
.fa-apply {
  flex: 1; padding: 5px; border: none;
  background: #1a2d4a; color: white; font-size: 11px;
  border-radius: 5px; cursor: pointer; font-weight: 600;
}
</style>
