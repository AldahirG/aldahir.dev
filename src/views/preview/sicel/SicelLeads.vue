<template>
  <div class="leads-wrap">
    <!-- TOPBAR -->
    <div class="leads-topbar">
      <div class="search-box">
        <i class="bi bi-search search-ico"></i>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Buscar por nombre o teléfono..."
          class="search-input"
        />
      </div>
      <div class="topbar-actions">
        <button class="btn btn-csv">
          <i class="bi bi-filetype-csv"></i> Subir CSV
        </button>
        <button class="btn btn-new">
          <i class="bi bi-person-plus-fill"></i> Crear Lead
        </button>
      </div>
    </div>

    <!-- FILTROS ACTIVOS -->
    <div v-if="appliedFilters.length" class="active-filters">
      <span
        v-for="f in appliedFilters"
        :key="f.type"
        class="filter-chip"
        :class="chipColor(f.type)"
      >
        {{ f.label }}
        <button @click="removeFilter(f.type)" class="chip-remove">✕</button>
      </span>
      <button @click="clearFilters" class="btn-clear-filters">
        <i class="bi bi-x-circle"></i> Eliminar filtros
      </button>
    </div>

    <!-- TABLE -->
    <div class="table-container">
      <table class="leads-table">
        <thead>
          <tr>
            <th class="th-check"><input type="checkbox" /></th>
            <th>Promotor <ColumnFilter field="promoter.name" :leads="leads" @filter-applied="handleFilter" /></th>
            <th>Nombre Completo</th>
            <th>Género <ColumnFilter field="information.genre" :leads="leads" @filter-applied="handleFilter" /></th>
            <th>Seguimiento <ColumnFilter field="information.followUp.name" :leads="leads" @filter-applied="handleFilter" /></th>
            <th>Carrera de Interés <ColumnFilter field="information.careerInterest" :leads="leads" @filter-applied="handleFilter" /></th>
            <th>Grado</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Tipo Contacto</th>
            <th>Campaña</th>
            <th>Estado</th>
            <th>Ciclo</th>
            <th>Última modif.</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="lead in filtered"
            :key="lead.id"
            :class="rowClass(lead.updateAt)"
          >
            <td><input type="checkbox" /></td>
            <td class="td-promotor">{{ lead.promoter?.name || 'Sin info' }}</td>
            <td class="td-name">{{ lead.information?.name || '—' }}</td>
            <td>{{ lead.information?.genre || '—' }}</td>
            <td>
              <span class="follow-chip" :class="followColor(lead.information?.followUp?.name)">
                {{ lead.information?.followUp?.name || 'Sin info' }}
              </span>
            </td>
            <td>{{ lead.information?.careerInterest || '—' }}</td>
            <td>{{ lead.grade?.name || '—' }}</td>
            <td>{{ lead.phones?.[0] || '—' }}</td>
            <td>{{ lead.emails?.[0] || '—' }}</td>
            <td>{{ lead.asetName?.contactType || '—' }}</td>
            <td>{{ lead.campaign?.name || '—' }}</td>
            <td>{{ lead.address?.state || '—' }}</td>
            <td>{{ lead.cycle?.name || '—' }}</td>
            <td>{{ fmtDate(lead.updateAt) }}</td>
            <td>
              <div class="actions-cell">
                <button @click="toggleDrop(lead.id)" class="dot-btn">
                  <i class="bi bi-three-dots"></i>
                </button>
                <div v-if="drops[lead.id]" class="dropdown-menu">
                  <button class="dd-btn dd-indigo">
                    <i class="bi bi-person-fill-add"></i> Asignar
                  </button>
                  <button class="dd-btn dd-blue" @click="viewLead(lead)">
                    <i class="bi bi-eye-fill"></i> Ver
                  </button>
                  <button class="dd-btn dd-amber">
                    <i class="bi bi-pencil-fill"></i> Editar
                  </button>
                  <button class="dd-btn dd-red">
                    <i class="bi bi-trash3-fill"></i> Eliminar
                  </button>
                </div>
              </div>
            </td>
          </tr>

          <tr v-if="filtered.length === 0">
            <td colspan="15" class="td-empty">
              Sin resultados para "{{ searchQuery }}"
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="table-footer">
      <span class="count-label">{{ filtered.length }} leads encontrados</span>
      <div class="pagination">
        <button class="pag-btn" disabled>← Anterior</button>
        <span class="pag-info">Página 1 de 1</span>
        <button class="pag-btn" disabled>Siguiente →</button>
      </div>
    </div>

    <!-- MODAL DETALLE -->
    <div v-if="selectedLead" class="modal-bg" @click.self="selectedLead = null">
      <div class="modal-box">
        <div class="modal-head">
          <h3>{{ selectedLead.information?.name }}</h3>
          <button @click="selectedLead = null" class="modal-close">✕</button>
        </div>
        <div class="modal-body">
          <div class="detail-grid">
            <div v-for="item in detailItems(selectedLead)" :key="item.label" class="detail-item">
              <span class="d-label">{{ item.label }}</span>
              <span class="d-val">{{ item.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import leadsData from '../../../data/mock/sicel-leads.json'
import ColumnFilter from '../../../components/sicel-ui/ColumnFilter.vue'

const leads = ref([...leadsData.data])
const searchQuery = ref('')
const filters = ref({})
const appliedFilters = ref([])
const drops = ref({})
const selectedLead = ref(null)

function getVal(obj, path) {
  return path.split('.').reduce((a, k) => a?.[k], obj)
}

const filtered = computed(() => {
  let r = leads.value
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    r = r.filter(l =>
      l.information?.name?.toLowerCase().includes(q) ||
      l.phones?.[0]?.includes(q)
    )
  }
  if (Object.keys(filters.value).length) {
    r = r.filter(l =>
      Object.entries(filters.value).every(([field, sel]) => {
        const v = getVal(l, field) ?? '(Vacías)'
        return sel.includes(v)
      })
    )
  }
  return r
})

function handleFilter({ key, value }) {
  filters.value[key] = value
  const label = `${key.split('.').pop()}: ${value.join(', ')}`
  const ex = appliedFilters.value.find(f => f.type === key)
  if (ex) ex.label = label
  else appliedFilters.value.push({ type: key, label })
}

function removeFilter(type) {
  delete filters.value[type]
  appliedFilters.value = appliedFilters.value.filter(f => f.type !== type)
}

function clearFilters() {
  filters.value = {}
  appliedFilters.value = []
}

function toggleDrop(id) {
  drops.value = { ...drops.value, [id]: !drops.value[id] }
}

function viewLead(lead) {
  selectedLead.value = lead
  drops.value = {}
}

function fmtDate(d) {
  if (!d) return '—'
  return new Date(d).toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' })
}

function rowClass(updatedAt) {
  if (!updatedAt) return ''
  const days = Math.floor((new Date() - new Date(updatedAt)) / 86400000)
  if (days <= 2) return 'row-fresh'
  if (days <= 4) return 'row-warn'
  return 'row-stale'
}

function followColor(name) {
  if (!name || name === 'Sin información' || name === 'Sin info') return 'chip-gray'
  if (name.toLowerCase().includes('inscrit')) return 'chip-green'
  if (name.toLowerCase().includes('interesad')) return 'chip-yellow'
  if (name.toLowerCase().includes('contactad')) return 'chip-blue'
  return 'chip-gray'
}

function chipColor(type) {
  const map = {
    'promoter.name': 'cf-purple',
    'information.genre': 'cf-pink',
    'information.followUp.name': 'cf-blue',
    'information.careerInterest': 'cf-green',
  }
  return map[type] || 'cf-blue'
}

function detailItems(lead) {
  return [
    { label: 'Carrera', value: lead.information?.careerInterest },
    { label: 'Seguimiento', value: lead.information?.followUp?.name || 'Sin info' },
    { label: 'Teléfono', value: lead.phones?.[0] },
    { label: 'Correo', value: lead.emails?.[0] },
    { label: 'Promotor', value: lead.promoter?.name || 'Sin asignar' },
    { label: 'Campaña', value: lead.campaign?.name },
    { label: 'Estado', value: `${lead.address?.state}, ${lead.address?.city}` },
    { label: 'Ciclo', value: lead.cycle?.name },
    { label: 'Beca', value: lead.scholarship },
    { label: 'Tipo', value: lead.intern },
  ]
}
</script>

<style scoped>
.leads-wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #f8fafc;
  font-family: 'Segoe UI', sans-serif;
}

.leads-topbar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  background: white;
  border-bottom: 1px solid #e2e8f0;
}

.search-box { position: relative; flex: 1; max-width: 420px; }
.search-ico {
  position: absolute; left: 12px; top: 50%;
  transform: translateY(-50%); color: #94a3b8; font-size: 14px;
}
.search-input {
  width: 100%; padding: 9px 14px 9px 36px;
  border: 2px solid #e2e8f0; border-radius: 8px;
  font-size: 13px; color: #1e293b; background: #f8fafc;
  box-sizing: border-box; transition: border-color 0.2s;
}
.search-input:focus { outline: none; border-color: #2d5a8e; background: white; }

.topbar-actions { display: flex; gap: 8px; margin-left: auto; }

.btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 14px; border-radius: 8px; border: none;
  cursor: pointer; font-size: 13px; font-weight: 600;
}
.btn:hover { opacity: 0.85; }
.btn-csv { background: #4f6d7a; color: white; }
.btn-new { background: #1a2d4a; color: white; }

.active-filters {
  display: flex; flex-wrap: wrap; gap: 8px; align-items: center;
  padding: 10px 20px; background: white; border-bottom: 1px solid #f1f5f9;
}

.filter-chip {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 3px 10px; border-radius: 99px;
  font-size: 11px; font-weight: 600; border: 1px solid;
}
.cf-blue   { background: #dbeafe; color: #1e40af; border-color: #93c5fd; }
.cf-green  { background: #dcfce7; color: #166534; border-color: #86efac; }
.cf-purple { background: #ede9fe; color: #5b21b6; border-color: #c4b5fd; }
.cf-pink   { background: #fce7f3; color: #9d174d; border-color: #f9a8d4; }
.chip-remove { background: none; border: none; cursor: pointer; font-size: 11px; }

.btn-clear-filters {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 3px 12px; background: #fee2e2; color: #991b1b;
  border: 1px solid #fca5a5; border-radius: 99px; font-size: 11px; cursor: pointer;
}

.table-container { flex: 1; overflow: auto; max-height: calc(100vh - 200px); }

.leads-table { width: 100%; border-collapse: collapse; font-size: 13px; background: white; }
.leads-table thead { position: sticky; top: 0; z-index: 10; background: #f8fafc; }
.leads-table th {
  padding: 10px 12px; text-align: left;
  font-size: 11px; font-weight: 700; color: #64748b;
  text-transform: uppercase; letter-spacing: 0.04em;
  border-bottom: 2px solid #e2e8f0; white-space: nowrap;
}
.th-check { width: 36px; }
.leads-table td {
  padding: 10px 12px; border-bottom: 1px solid #f1f5f9;
  color: #475569; white-space: nowrap;
}
.td-name { font-weight: 600; color: #1e293b; }
.td-promotor { color: #64748b; }

.row-fresh td { background: #f0fdf4; }
.row-warn  td { background: #fefce8; }
.row-stale td { background: #fff1f2; }

.follow-chip {
  padding: 2px 10px; border-radius: 99px;
  font-size: 11px; font-weight: 600; border: 1px solid transparent;
}
.chip-gray   { background: #f1f5f9; color: #64748b; border-color: #e2e8f0; }
.chip-blue   { background: #dbeafe; color: #1e40af; border-color: #93c5fd; }
.chip-yellow { background: #fef3c7; color: #92400e; border-color: #fcd34d; }
.chip-green  { background: #dcfce7; color: #166534; border-color: #86efac; }

.actions-cell { position: relative; }
.dot-btn {
  padding: 5px 9px; background: #f1f5f9; border: 1px solid #e2e8f0;
  border-radius: 6px; cursor: pointer; font-size: 14px; color: #64748b;
}
.dot-btn:hover { background: #e2e8f0; }

.dropdown-menu {
  position: absolute; right: 0; top: 100%; z-index: 200;
  background: white; border: 1px solid #e2e8f0; border-radius: 8px;
  box-shadow: 0 4px 12px rgba(94,137,255,0.2);
  overflow: hidden; min-width: 130px;
}
.dd-btn {
  display: flex; align-items: center; gap: 7px;
  width: 100%; padding: 8px 14px; border: none;
  font-size: 12px; font-weight: 600; cursor: pointer; color: white;
}
.dd-btn:hover { filter: brightness(0.9); }
.dd-indigo { background: #6366f1; }
.dd-blue   { background: #3b82f6; }
.dd-amber  { background: #f59e0b; }
.dd-red    { background: #ef4444; }

.td-empty { text-align: center; padding: 48px; color: #94a3b8; font-size: 14px; }

.table-footer {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 20px; background: white; border-top: 1px solid #e2e8f0;
}
.count-label { font-size: 13px; color: #64748b; font-weight: 600; }
.pagination { display: flex; align-items: center; gap: 12px; }
.pag-btn {
  padding: 6px 14px; border: 1px solid #e2e8f0;
  border-radius: 6px; background: white; color: #64748b;
  font-size: 12px; cursor: pointer;
}
.pag-btn:disabled { opacity: 0.4; cursor: default; }
.pag-info { font-size: 12px; color: #64748b; }

.modal-bg {
  position: fixed; inset: 0; background: rgba(0,0,0,0.4);
  z-index: 999; display: flex; align-items: center;
  justify-content: center; padding: 20px;
}
.modal-box {
  background: white; border-radius: 14px;
  width: 100%; max-width: 580px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.2); overflow: hidden;
}
.modal-head {
  display: flex; justify-content: space-between; align-items: center;
  padding: 18px 24px; background: #1a2d4a; color: white;
}
.modal-head h3 { margin: 0; font-size: 17px; font-weight: 700; }
.modal-close {
  background: rgba(255,255,255,0.15); border: none; color: white;
  width: 26px; height: 26px; border-radius: 50%; cursor: pointer; font-size: 13px;
}
.modal-body { padding: 24px; }
.detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.detail-item { display: flex; flex-direction: column; gap: 2px; }
.d-label { font-size: 10px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.06em; }
.d-val { font-size: 13px; color: #1e293b; font-weight: 500; }
</style>
