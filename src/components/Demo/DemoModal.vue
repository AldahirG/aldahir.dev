<template>
  <Teleport to="body">
    <div class="modal-overlay" @click.self="$emit('close')">
      <div class="modal">
        <div class="modal-header">
          <div>
            <h3 class="modal-title">{{ project.title }}</h3>
            <div class="modal-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
          <button class="close-btn" @click="$emit('close')">✕</button>
        </div>

        <div class="modal-body">
          <component :is="demoComponent" v-if="demoComponent" />
          <div v-else class="no-demo">No hay demo interactivo disponible.</div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue'

const props = defineProps({
  project: Object
})
defineEmits(['close'])

const demoMap = {
  crm: defineAsyncComponent(() => import('./demos/CRMDemo.vue')),
  sisi: defineAsyncComponent(() => import('./demos/SISIDemo.vue')),
  cafeteria: defineAsyncComponent(() => import('./demos/CafeteriaDemo.vue')),
  sisa: defineAsyncComponent(() => import('./demos/SISADemo.vue')),
}

const demoComponent = computed(() => props.project?.demoType ? demoMap[props.project.demoType] : null)
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal {
  background: var(--gray500);
  border-radius: 16px;
  width: 100%;
  max-width: 860px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: slideUp 0.25s ease;
  overflow: hidden;
}

@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 24px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  flex-shrink: 0;
}

.modal-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 6px;
}

.modal-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.tag {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 11px;
  padding: 2px 10px;
  border-radius: 999px;
  color: var(--gray200);
}

.close-btn {
  background: rgba(255, 255, 255, 0.08);
  border: none;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  flex-shrink: 0;
  transition: background 0.2s;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.18);
}

.modal-body {
  padding: 20px 24px;
  overflow-y: auto;
  flex: 1;
}

.no-demo {
  text-align: center;
  color: var(--gray300);
  padding: 40px;
}

@media (max-width: 600px) {
  .modal { max-height: 95vh; border-radius: 12px; }
  .modal-header, .modal-body { padding: 16px; }
}
</style>
