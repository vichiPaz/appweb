<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const showModalPago = ref(false)
const metodoPago = ref('transferencia')

const carrito = computed(() => store.getters.getCarrito)
const totalCarrito = computed(() => store.getters.getTotalCarrito)
const totalPrecio = computed(() => store.getters.getTotalPrecioCarrito)
const userEmail = computed(() => store.getters.getUserEmail)

const eliminarDelCarrito = (cursoId) => {
  store.dispatch('eliminarDelCarrito', cursoId)
}

const limpiarCarrito = () => {
  if (confirm('¿Estás seguro de que quieres limpiar todo el carrito?')) {
    store.dispatch('limpiarCarrito')
    alert('🛒 Carrito limpiado exitosamente')
  }
}

const abrirModalPago = () => {
  if (carrito.value.length === 0) {
    alert('🛒 Tu carrito está vacío')
    return
  }
  showModalPago.value = true
}

const cerrarModalPago = () => {
  showModalPago.value = false
  metodoPago.value = 'transferencia'
}

const procesarCompra = async () => {
  try {
    await store.dispatch('procesarCompra', { metodoPago: metodoPago.value })
    cerrarModalPago()
    alert('✅ ¡Compra realizada exitosamente! Te has inscrito en todos los cursos seleccionados.')
  } catch (error) {
    alert('❌ Error al procesar la compra: ' + error.message)
  }
}
</script>

<template>
  <div class="cart-view">
    <header class="cart-view__header">
      <h1>🛒 Mi Carrito de Cursos</h1>
      <p class="text-secondary">Inscríbete en tus cursos favoritos de 31 Minutos</p>
    </header>

    <div v-if="totalCarrito === 0" class="empty-state">
      <h4>🛒 Tu carrito está vacío</h4>
      <p class="text-secondary">¡Explora nuestros cursos y agrega los que más te gusten!</p>
      <router-link to="/home" class="btn btn-primary">Ver Cursos</router-link>
    </div>

    <div v-else class="cart-layout">
      <div class="cart-items">
        <div class="card">
          <div class="card__header">
            <h5 class="font-bold">📚 Cursos Seleccionados ({{ totalCarrito }})</h5>
          </div>
          <div class="card__body">
            <div v-for="item in carrito" :key="item.cursoId" class="cart-item">
              <img :src="item.cursoImagen || 'https://picsum.photos/80/60?random=default'" 
                   :alt="item.cursoNombre" 
                   class="cart-item__image">
              
              <div class="cart-item__details">
                <h6 class="font-bold">{{ item.cursoNombre }}</h6>
                <span class="text-sm text-secondary">Código: {{ item.cursoCodigo }}</span>
                <p class="font-bold mt-2">${{ item.cursoPrecio.toLocaleString() }}</p>
              </div>
              
              <button @click="eliminarDelCarrito(item.cursoId)" class="btn btn-secondary" title="Eliminar del carrito">
                🗑️
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="cart-summary">
        <div class="card">
          <div class="card__header">
            <h5 class="font-bold">💰 Resumen de Compra</h5>
          </div>
          <div class="card__body">
            <div class="summary-row">
              <span>Cursos:</span>
              <span class="font-bold">{{ totalCarrito }}</span>
            </div>
            <hr class="divider">
            <div class="summary-row summary-row--total">
              <span>Total:</span>
              <span class="font-bold">${{ totalPrecio.toLocaleString() }}</span>
            </div>
            
            <div class="summary-actions">
              <button @click="abrirModalPago" class="btn btn-primary">
                💳 Proceder al Pago
              </button>
              <button @click="limpiarCarrito" class="btn btn-secondary">
                🗑️ Limpiar Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showModalPago" class="modal-overlay" @click.self="cerrarModalPago">
      <div class="modal-container">
        <header class="modal-header">
          <h5 class="modal-title">💳 Confirmar Compra</h5>
          <button @click="cerrarModalPago" class="modal-close-btn">×</button>
        </header>
        <div class="modal-body">
          <div class="form-group">
            <h6>Resumen de tu compra:</h6>
            <ul class="summary-list">
              <li v-for="item in carrito" :key="item.cursoId">
                <span>{{ item.cursoNombre }}</span>
                <span class="font-bold">${{ item.cursoPrecio.toLocaleString() }}</span>
              </li>
            </ul>
            <hr class="divider">
            <div class="summary-row summary-row--total">
              <span>Total a pagar:</span>
              <span class="font-bold">${{ totalPrecio.toLocaleString() }}</span>
            </div>
          </div>
          
          <div class="form-group">
            <label>Método de pago:</label>
            <select v-model="metodoPago">
              <option value="transferencia">🏦 Transferencia Bancaria</option>
              <option value="tarjeta">💳 Tarjeta de Crédito</option>
            </select>
          </div>
          
          <div class="info-box">
            <p><strong>Email de confirmación:</strong> {{ userEmail }}</p>
            <p><strong>Estado:</strong> Pendiente de confirmación</p>
          </div>
        </div>
        <footer class="modal-footer">
          <button @click="cerrarModalPago" class="btn btn-secondary">Cancelar</button>
          <button @click="procesarCompra" class="btn btn-primary">Confirmar Compra</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-view {
  padding: 2rem 0;
}
.cart-view__header {
  text-align: center;
  margin-bottom: 2rem;
}
.cart-view__header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
}
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  background-color: var(--color-surface);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border);
}
.cart-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 1024px) {
  .cart-layout {
    grid-template-columns: 2fr 1fr;
  }
}
.card {
  background-color: var(--color-surface);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border);
  overflow: hidden;
}
.card__header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-background);
}
.card__body {
  padding: 1.5rem;
}
.cart-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
}
.cart-item:not(:last-child) {
  border-bottom: 1px solid var(--color-border);
}
.cart-item__image {
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-border);
}
.cart-item__details {
  flex-grow: 1;
}
.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.summary-row--total {
  font-size: 1.25rem;
}
.divider {
  border: none;
  border-top: 1px solid var(--color-border);
  margin: 1rem 0;
}
.summary-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-container {
  background-color: var(--color-surface);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--color-border);
}
.modal-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
}
.modal-close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-text-secondary);
}
.modal-body {
  padding: 1.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--color-border);
}
.form-group {
  display: flex;
  flex-direction: column;
}
.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-text-secondary);
}
.form-group select {
  width: 100%;
  padding: 0.75rem;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-border);
  background-color: var(--color-background);
  color: var(--color-text-primary);
}
.summary-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.summary-list li {
  display: flex;
  justify-content: space-between;
}
.info-box {
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  padding: 1rem;
  border-radius: var(--border-radius-sm);
}
.info-box p {
  margin: 0;
  color: var(--color-text-secondary);
}
.info-box p:not(:last-child) {
  margin-bottom: 0.5rem;
}
</style>