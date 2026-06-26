<template>
  <div class="board-root">
    <!-- HEADER -->
    <div class="board-header">
      <div class="header-left">
        <h1 class="board-title">Mi Tablero</h1>
        <span class="board-sub">{{ tasks.length }} solicitudes activas</span>
      </div>
      <div class="header-actions">
        <el-button size="small" text style="color:#888">
          <el-icon><Filter /></el-icon> Filtrar
        </el-button>
        <el-button size="small" text style="color:#888">
          <el-icon><Sort /></el-icon> Ordenar
        </el-button>
        <el-button size="small" text style="color:#888">
          <el-icon><Grid /></el-icon> Agrupar
        </el-button>
        <el-button size="small" text style="color:#888">
          <el-icon><More /></el-icon>
        </el-button>
        <el-button type="primary" size="small" @click="showForm = true" style="background:#A435FE; border-color:#A435FE;">
          <el-icon><Plus /></el-icon> Nueva solicitud
        </el-button>
      </div>
    </div>

    <!-- KANBAN -->
    <div class="kanban-board">
      <div v-for="col in columns" :key="col.id" class="kanban-col">
        <div class="col-header">
          <span class="col-emoji">{{ col.emoji }}</span>
          <span class="col-label">{{ col.label }}</span>
          <span class="col-count">{{ tasksByCol(col.id).length }}</span>
          <button class="col-add-btn" @click="quickAdd(col.id)" title="Agregar">+</button>
        </div>

        <div class="col-cards">
          <el-card
            v-for="task in tasksByCol(col.id)"
            :key="task.id"
            class="task-card"
            shadow="hover"
          >
            <div class="card-top">
              <el-tag
                :type="priorityType(task.priority)"
                size="small"
                effect="dark"
                round
              >
                {{ task.priority }}
              </el-tag>
              <el-dropdown trigger="click" @command="(cmd) => handleCmd(cmd, task)">
                <el-button text size="small" style="color:#666; padding:4px">
                  <el-icon><MoreFilled /></el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item command="view">👀 Ver detalle</el-dropdown-item>
                    <el-dropdown-item
                      v-for="c in columns.filter(c => c.id !== col.id)"
                      :key="c.id"
                      :command="'move:' + c.id"
                    >
                      {{ c.emoji }} Mover a {{ c.label }}
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>

            <h4 class="card-title">{{ task.title }}</h4>
            <p class="card-desc">{{ task.description }}</p>

            <div class="card-meta">
              <span class="meta-project">{{ task.project }}</span>
              <span class="meta-date" :class="dueCls(task.dueDate)">
                ⏰ {{ fmtDate(task.dueDate) }}
              </span>
            </div>

            <div class="card-footer">
              <el-button size="small" text @click="viewTask(task)" style="color:#A435FE;">
                👀 Ver
              </el-button>
              <el-button size="small" text style="color:#666;">
                ✏️ Editar
              </el-button>
            </div>
          </el-card>

          <div v-if="tasksByCol(col.id).length === 0" class="empty-col">
            Sin solicitudes
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL DETALLE -->
    <el-dialog
      v-model="detailVisible"
      :title="selectedTask?.title"
      width="520px"
      class="sisi-dialog"
    >
      <div v-if="selectedTask" class="task-detail">
        <el-descriptions :column="2" border>
          <el-descriptions-item label="Prioridad">
            <el-tag :type="priorityType(selectedTask.priority)" effect="dark" round size="small">
              {{ selectedTask.priority }}
            </el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="Departamento">{{ selectedTask.department }}</el-descriptions-item>
          <el-descriptions-item label="Proyecto">{{ selectedTask.project }}</el-descriptions-item>
          <el-descriptions-item label="Fecha límite">{{ fmtDate(selectedTask.dueDate) }}</el-descriptions-item>
          <el-descriptions-item label="Descripción" :span="2">{{ selectedTask.description }}</el-descriptions-item>
        </el-descriptions>
      </div>
    </el-dialog>

    <!-- MODAL NUEVA TAREA -->
    <el-dialog v-model="showForm" title="Nueva solicitud" width="460px" class="sisi-dialog">
      <el-form :model="newTask" label-width="110px" size="small">
        <el-form-item label="Título">
          <el-input v-model="newTask.title" placeholder="Nombre de la solicitud" />
        </el-form-item>
        <el-form-item label="Descripción">
          <el-input v-model="newTask.description" type="textarea" :rows="2" />
        </el-form-item>
        <el-form-item label="Prioridad">
          <el-select v-model="newTask.priority" style="width:100%">
            <el-option label="Alta" value="Alta" />
            <el-option label="Media" value="Media" />
            <el-option label="Baja" value="Baja" />
          </el-select>
        </el-form-item>
        <el-form-item label="Proyecto">
          <el-input v-model="newTask.project" placeholder="Nombre del proyecto" />
        </el-form-item>
        <el-form-item label="Fecha límite">
          <el-input v-model="newTask.dueDate" type="date" style="width:100%" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showForm = false">Cancelar</el-button>
        <el-button type="primary" @click="createTask" style="background:#A435FE; border-color:#A435FE">
          Crear solicitud
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import tasksData from '../../../data/mock/sisi-tasks.json'

const normalize = (id) => [1,2,3,4].includes(id) ? id : 1
const tasks = ref(tasksData.map(t => ({ ...t, idStatusRequest: normalize(t.idStatusRequest) })))

const columns = [
  { id: 1, label: 'Por hacer', emoji: '📫' },
  { id: 2, label: 'En proceso', emoji: '🎯' },
  { id: 3, label: 'En revisión', emoji: '😴' },
  { id: 4, label: 'Completado', emoji: '🎊' },
]

const detailVisible = ref(false)
const selectedTask = ref(null)
const showForm = ref(false)
const newTask = ref({ title: '', description: '', priority: 'Media', project: '', dueDate: '', department: 'Diseño' })

function tasksByCol(colId) {
  return tasks.value.filter(t => t.idStatusRequest === colId)
}

function handleCmd(cmd, task) {
  if (cmd === 'view') { viewTask(task) }
  else if (cmd.startsWith('move:')) {
    task.idStatusRequest = parseInt(cmd.split(':')[1])
  }
}

function viewTask(task) {
  selectedTask.value = task
  detailVisible.value = true
}

function quickAdd(colId) {
  newTask.value = { title: '', description: '', priority: 'Media', project: '', dueDate: '', department: 'Diseño', _col: colId }
  showForm.value = true
}

function createTask() {
  if (!newTask.value.title.trim()) return
  tasks.value.push({
    id: Date.now(),
    idStatusRequest: newTask.value._col || 1,
    ...newTask.value,
  })
  showForm.value = false
  newTask.value = { title: '', description: '', priority: 'Media', project: '', dueDate: '', department: 'Diseño' }
}

function priorityType(p) {
  if (p === 'Alta') return 'danger'
  if (p === 'Media') return 'warning'
  return 'success'
}

function fmtDate(d) {
  if (!d) return '—'
  return new Date(d).toLocaleDateString('es-MX', { day: '2-digit', month: 'short' })
}

function dueCls(d) {
  if (!d) return ''
  const days = Math.floor((new Date(d) - new Date()) / 86400000)
  if (days < 0) return 'due-late'
  if (days <= 2) return 'due-soon'
  return ''
}
</script>

<style scoped>
.board-root {
  padding: 20px 24px;
  background: #121212;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: 'Inter', sans-serif;
}

.board-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 4px;
  border-bottom: 1px solid #2a2a2a;
}
.header-left { display: flex; flex-direction: column; gap: 2px; }
.board-title {
  font-size: 22px;
  font-weight: 900;
  color: #A435FE;
  text-shadow: 1px 1px 3px rgba(164,53,254,0.5);
  margin: 0;
}
.board-sub { font-size: 12px; color: #555; }
.header-actions { display: flex; align-items: center; gap: 6px; }

/* KANBAN */
.kanban-board {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  flex: 1;
  align-items: flex-start;
  padding-bottom: 12px;
}

.kanban-col {
  flex: 0 0 250px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.col-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 10px;
  background: #1a1a1a;
  border-radius: 8px;
  border: 1px solid #2a2a2a;
}
.col-emoji { font-size: 14px; }
.col-label { font-size: 13px; font-weight: 600; color: #ccc; flex: 1; }
.col-count {
  background: #2a2a2a;
  color: #888;
  font-size: 11px;
  font-weight: 700;
  padding: 1px 7px;
  border-radius: 99px;
}
.col-add-btn {
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  padding: 0 2px;
}
.col-add-btn:hover { color: #A435FE; }

.col-cards { display: flex; flex-direction: column; gap: 8px; }

/* TASK CARD — override Element Plus */
.task-card {
  border-radius: 10px !important;
  box-shadow: 0 2px 5px rgba(0,0,0,0.3) !important;
}

/* Use :deep for Element Plus inner elements */
.task-card :deep(.el-card__body) {
  padding: 14px !important;
  background: #1e1e1e !important;
  border-radius: 10px !important;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.card-title {
  font-size: 13px;
  font-weight: 600;
  color: #e0e0e0;
  margin: 0 0 6px;
  line-height: 1.4;
}
.card-desc {
  font-size: 12px;
  color: #666;
  margin: 0 0 10px;
  line-height: 1.5;
}

.card-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;
}
.meta-project {
  font-size: 11px;
  color: #A435FE;
  font-weight: 600;
}
.meta-date { font-size: 11px; color: #555; }
.due-late { color: #f87171; }
.due-soon { color: #fbbf24; }

.card-footer {
  display: flex;
  gap: 4px;
  border-top: 1px solid #2a2a2a;
  padding-top: 8px;
}

.empty-col {
  text-align: center;
  font-size: 12px;
  color: #333;
  padding: 24px 0;
}

/* Override el-dialog dark style */
.sisi-dialog :deep(.el-dialog) {
  background: #1e1e1e;
  border: 1px solid #333;
  border-radius: 12px;
}
.sisi-dialog :deep(.el-dialog__title) { color: #e0e0e0; }
.sisi-dialog :deep(.el-dialog__body) { color: #ccc; }
.sisi-dialog :deep(.el-descriptions__label) { background: #2a2a2a; color: #888; }
.sisi-dialog :deep(.el-descriptions__content) { background: #1e1e1e; color: #ccc; }
.sisi-dialog :deep(.el-descriptions__cell) { border-color: #333; }
.sisi-dialog :deep(.el-form-item__label) { color: #888; }
</style>
