<template>
  <div class="demo">
    <div class="layout">
      <!-- MENÚ -->
      <div class="menu-panel">
        <div class="panel-title">Menú del día</div>

        <div class="categories">
          <button
            v-for="cat in categories"
            :key="cat"
            class="cat-btn"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >{{ cat }}</button>
        </div>

        <div class="menu-grid">
          <div
            v-for="item in filteredMenu"
            :key="item.id"
            class="menu-item"
            @click="addToCart(item)"
          >
            <span class="item-emoji">{{ item.emoji }}</span>
            <div class="item-info">
              <span class="item-name">{{ item.name }}</span>
              <span class="item-price">${{ item.price }}</span>
            </div>
            <button class="add-btn">+</button>
          </div>
        </div>
      </div>

      <!-- CARRITO -->
      <div class="cart-panel">
        <div class="panel-title">
          Tu pedido
          <span v-if="cartItems.length" class="cart-count">{{ totalItems }}</span>
        </div>

        <div v-if="!cartItems.length" class="cart-empty">
          Toca un producto para agregar
        </div>

        <div v-else class="cart-items">
          <div v-for="ci in cartItems" :key="ci.id" class="cart-item">
            <span class="cart-emoji">{{ ci.emoji }}</span>
            <div class="cart-item-info">
              <span>{{ ci.name }}</span>
              <span class="cart-price">${{ ci.price * ci.qty }}</span>
            </div>
            <div class="qty-controls">
              <button @click="changeQty(ci, -1)">−</button>
              <span>{{ ci.qty }}</span>
              <button @click="changeQty(ci, 1)">+</button>
            </div>
          </div>
        </div>

        <div v-if="cartItems.length" class="cart-footer">
          <div class="total-row">
            <span>Total</span>
            <strong>${{ totalPrice }}</strong>
          </div>
          <button class="order-btn" :disabled="orderStatus !== null" @click="placeOrder">
            {{ orderStatus ? orderStatus : 'Realizar pedido' }}
          </button>
        </div>

        <!-- STATUS EN VIVO -->
        <div v-if="orderStatus && orderStep > 0" class="order-status">
          <div class="status-steps">
            <div v-for="(step, i) in orderSteps" :key="i" class="step" :class="{ done: i < orderStep, active: i === orderStep - 1 }">
              <span class="step-icon">{{ step.icon }}</span>
              <span class="step-label">{{ step.label }}</span>
            </div>
          </div>
          <p class="order-num">Pedido <strong>#{{ orderNum }}</strong></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('Todos')
const categories = ['Todos', 'Bebidas', 'Comida', 'Snacks']

const menuItems = [
  { id: 1, name: 'Café americano', price: 20, emoji: '☕', cat: 'Bebidas' },
  { id: 2, name: 'Cappuccino', price: 30, emoji: '🍵', cat: 'Bebidas' },
  { id: 3, name: 'Agua natural', price: 10, emoji: '💧', cat: 'Bebidas' },
  { id: 4, name: 'Tacos x3', price: 45, emoji: '🌮', cat: 'Comida' },
  { id: 5, name: 'Torta de milanesa', price: 55, emoji: '🥪', cat: 'Comida' },
  { id: 6, name: 'Arroz con pollo', price: 60, emoji: '🍗', cat: 'Comida' },
  { id: 7, name: 'Papas fritas', price: 25, emoji: '🍟', cat: 'Snacks' },
  { id: 8, name: 'Galletas', price: 15, emoji: '🍪', cat: 'Snacks' },
]

const filteredMenu = computed(() =>
  activeCategory.value === 'Todos'
    ? menuItems
    : menuItems.filter(m => m.cat === activeCategory.value)
)

const cartItems = ref([])
const orderStatus = ref(null)
const orderStep = ref(0)
const orderNum = ref(null)

const orderSteps = [
  { icon: '📋', label: 'Pedido recibido' },
  { icon: '👨‍🍳', label: 'En preparación' },
  { icon: '✅', label: 'Listo para recoger' },
]

const totalItems = computed(() => cartItems.value.reduce((s, c) => s + c.qty, 0))
const totalPrice = computed(() => cartItems.value.reduce((s, c) => s + c.price * c.qty, 0))

function addToCart(item) {
  if (orderStatus.value) return
  const existing = cartItems.value.find(c => c.id === item.id)
  if (existing) existing.qty++
  else cartItems.value.push({ ...item, qty: 1 })
}

function changeQty(ci, delta) {
  ci.qty += delta
  if (ci.qty <= 0) cartItems.value = cartItems.value.filter(c => c.id !== ci.id)
}

function placeOrder() {
  orderNum.value = Math.floor(Math.random() * 900) + 100
  orderStatus.value = '⏳ Enviando pedido...'
  orderStep.value = 1

  setTimeout(() => { orderStatus.value = '👨‍🍳 En preparación...'; orderStep.value = 2 }, 1500)
  setTimeout(() => { orderStatus.value = '✅ ¡Listo para recoger!'; orderStep.value = 3 }, 4000)
}
</script>

<style scoped>
.demo { height: 100%; }

.layout {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 16px;
  height: 100%;
}

.panel-title {
  font-size: 15px; font-weight: 700; margin-bottom: 14px;
  display: flex; align-items: center; gap: 8px;
}

.cart-count {
  background: var(--red); border-radius: 999px;
  padding: 2px 8px; font-size: 12px;
}

/* MENÚ */
.menu-panel { display: flex; flex-direction: column; gap: 12px; }
.categories { display: flex; gap: 8px; flex-wrap: wrap; }
.cat-btn {
  padding: 5px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.15);
  background: transparent; color: var(--gray300); cursor: pointer; font-size: 12px;
  transition: 0.2s;
}
.cat-btn.active { background: var(--red); border-color: var(--red); color: white; }

.menu-grid { display: flex; flex-direction: column; gap: 6px; overflow-y: auto; max-height: 320px; }
.menu-item {
  display: flex; align-items: center; gap: 10px;
  background: rgba(255,255,255,0.05); border-radius: 8px; padding: 10px;
  cursor: pointer; transition: background 0.15s; border: 1px solid transparent;
}
.menu-item:hover { background: rgba(255,255,255,0.09); border-color: rgba(227,100,110,0.3); }
.item-emoji { font-size: 22px; }
.item-info { flex: 1; display: flex; flex-direction: column; }
.item-name { font-size: 13px; font-weight: 500; }
.item-price { font-size: 12px; color: #82bc4f; }
.add-btn {
  width: 28px; height: 28px; border-radius: 50%; background: var(--red);
  border: none; color: white; font-size: 18px; cursor: pointer; line-height: 1;
  display: flex; align-items: center; justify-content: center;
}

/* CARRITO */
.cart-panel {
  background: rgba(255,255,255,0.04);
  border-radius: 10px; padding: 14px;
  border: 1px solid rgba(255,255,255,0.08);
  display: flex; flex-direction: column; gap: 10px;
}
.cart-empty { font-size: 12px; color: var(--gray300); text-align: center; padding: 20px 0; }
.cart-items { display: flex; flex-direction: column; gap: 8px; flex: 1; overflow-y: auto; }
.cart-item {
  display: flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.04); border-radius: 8px; padding: 8px;
}
.cart-emoji { font-size: 18px; }
.cart-item-info { flex: 1; display: flex; flex-direction: column; font-size: 12px; }
.cart-price { color: #82bc4f; font-weight: 600; }
.qty-controls { display: flex; align-items: center; gap: 6px; font-size: 13px; }
.qty-controls button {
  width: 22px; height: 22px; border-radius: 50%; background: rgba(255,255,255,0.1);
  border: none; color: white; cursor: pointer; font-size: 14px;
  display: flex; align-items: center; justify-content: center;
}

.cart-footer { display: flex; flex-direction: column; gap: 10px; }
.total-row { display: flex; justify-content: space-between; font-size: 14px; }
.total-row strong { color: #82bc4f; font-size: 16px; }

.order-btn {
  padding: 10px; background: var(--red); border: none; border-radius: 8px;
  color: white; cursor: pointer; font-size: 13px; font-weight: 600;
  transition: background 0.2s; width: 100%;
}
.order-btn:disabled { background: var(--gray400); cursor: default; }

.order-status { display: flex; flex-direction: column; gap: 10px; }
.status-steps { display: flex; flex-direction: column; gap: 6px; }
.step {
  display: flex; align-items: center; gap: 8px;
  font-size: 12px; color: var(--gray300); transition: color 0.3s;
}
.step.done, .step.active { color: var(--gray100); }
.step-icon { font-size: 16px; }
.order-num { font-size: 12px; color: var(--gray300); text-align: center; }

@media (max-width: 600px) {
  .layout { grid-template-columns: 1fr; }
}
</style>
