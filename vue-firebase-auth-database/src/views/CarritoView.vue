<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// Estados reactivos
const showModalPago = ref(false)
const metodoPago = ref('transferencia')

// Computed
const carrito = computed(() => store.getters.getCarrito)
const totalCarrito = computed(() => store.getters.getTotalCarrito)
const totalPrecio = computed(() => store.getters.getTotalPrecioCarrito)
const userEmail = computed(() => store.getters.getUserEmail)

// Métodos
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
  <div class="container py-5">
    <div class="text-center mb-5">
      <h1 class="display-4 fw-bold" style="color: var(--treinta-uno-negro); text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">🛒 Mi Carrito de Cursos</h1>
      <p class="lead" style="color: var(--treinta-uno-negro); font-weight: 500;">Inscríbete en tus cursos favoritos de 31 Minutos</p>
    </div>

    <!-- Carrito vacío -->
    <div v-if="totalCarrito === 0" class="text-center py-5">
      <div class="alert alert-info" style="border: 3px solid var(--treinta-uno-negro); background: var(--treinta-uno-beige);">
        <h4 style="color: var(--treinta-uno-negro);">🛒 Tu carrito está vacío</h4>
        <p style="color: var(--treinta-uno-negro);">¡Explora nuestros cursos y agrega los que más te gusten!</p>
        <router-link to="/home" class="btn btn-lg" style="
          background: linear-gradient(45deg, var(--treinta-uno-amarillo), var(--treinta-uno-naranja));
          color: var(--treinta-uno-negro);
          border: 3px solid var(--treinta-uno-negro);
          font-weight: bold;
          border-radius: 15px;
        ">Ver Cursos</router-link>
      </div>
    </div>

    <!-- Carrito con cursos -->
    <div v-else>
      <!-- Resumen del carrito -->
      <div class="row mb-4">
        <div class="col-md-8">
          <div class="card" style="border: 3px solid var(--treinta-uno-negro); background: var(--treinta-uno-blanco);">
            <div class="card-header" style="background: linear-gradient(45deg, var(--treinta-uno-amarillo), var(--treinta-uno-naranja)); color: var(--treinta-uno-negro);">
              <h5 class="mb-0 fw-bold">📚 Cursos Seleccionados ({{ totalCarrito }})</h5>
            </div>
            <div class="card-body">
              <div v-for="item in carrito" :key="item.cursoId" class="d-flex align-items-center mb-3 p-3" style="border: 2px solid var(--treinta-uno-negro); border-radius: 15px; background: var(--treinta-uno-beige);">
                <img :src="item.cursoImagen || 'https://picsum.photos/80/60?random=default'" 
                     :alt="item.cursoNombre" 
                     class="rounded me-3" 
                     style="width: 80px; height: 60px; object-fit: cover; border: 2px solid var(--treinta-uno-negro);">
                
                <div class="flex-grow-1">
                  <h6 class="mb-1 fw-bold" style="color: var(--treinta-uno-azul);">{{ item.cursoNombre }}</h6>
                  <small class="text-muted">Código: {{ item.cursoCodigo }}</small>
                  <div class="mt-1">
                    <span class="badge" style="background: linear-gradient(45deg, var(--treinta-uno-amarillo), var(--treinta-uno-naranja)); color: var(--treinta-uno-negro); font-weight: bold; border: 2px solid var(--treinta-uno-negro);">
                      ${{ item.cursoPrecio.toLocaleString() }}
                    </span>
                  </div>
                </div>
                
                <button @click="eliminarDelCarrito(item.cursoId)" 
                        class="btn btn-sm" 
                        style="
                          background: linear-gradient(45deg, var(--treinta-uno-rojo), var(--treinta-uno-naranja));
                          color: white;
                          border: 3px solid var(--treinta-uno-negro);
                          font-weight: bold;
                          border-radius: 8px;
                          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                        "
                        title="Eliminar del carrito">
                  🗑️
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="card" style="border: 3px solid var(--treinta-uno-negro); background: var(--treinta-uno-blanco);">
            <div class="card-header" style="background: linear-gradient(45deg, var(--treinta-uno-rojo), var(--treinta-uno-naranja)); color: white;">
              <h5 class="mb-0 fw-bold">💰 Resumen de Compra</h5>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between mb-2">
                <span style="color: var(--treinta-uno-negro); font-weight: bold;">Cursos:</span>
                <span style="color: var(--treinta-uno-negro); font-weight: bold;">{{ totalCarrito }}</span>
              </div>
              <hr style="border-color: var(--treinta-uno-negro);">
              <div class="d-flex justify-content-between mb-3">
                <span style="color: var(--treinta-uno-negro); font-weight: bold; font-size: 1.2rem;">Total:</span>
                <span style="color: var(--treinta-uno-verde); font-weight: bold; font-size: 1.2rem;">${{ totalPrecio.toLocaleString() }}</span>
              </div>
              
              <div class="d-grid gap-2">
                <button @click="abrirModalPago" 
                        class="btn btn-lg" 
                        style="
                          background: linear-gradient(45deg, var(--treinta-uno-amarillo) 0%, var(--treinta-uno-naranja) 50%, var(--treinta-uno-rojo) 100%);
                          color: var(--treinta-uno-negro);
                          border: 3px solid var(--treinta-uno-negro);
                          font-weight: bold;
                          border-radius: 15px;
                          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                        ">
                  💳 Proceder al Pago
                </button>
                
                <button @click="limpiarCarrito" 
                        class="btn btn-lg" 
                        style="
                          background: linear-gradient(45deg, var(--treinta-uno-verde), var(--treinta-uno-azul));
                          color: white;
                          border: 3px solid var(--treinta-uno-negro);
                          font-weight: bold;
                          border-radius: 15px;
                          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                        ">
                  🗑️ Limpiar Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de pago -->
    <div v-if="showModalPago" class="modal show d-block" style="background: rgba(0,0,0,0.5);">
      <div class="modal-dialog">
        <div class="modal-content" style="border: 3px solid var(--treinta-uno-negro); border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          <div class="modal-header" style="background: linear-gradient(45deg, var(--treinta-uno-amarillo), var(--treinta-uno-naranja)); color: var(--treinta-uno-negro);">
            <h5 class="modal-title fw-bold">💳 Confirmar Compra</h5>
            <button type="button" class="btn-close" @click="cerrarModalPago" style="filter: invert(1);"></button>
          </div>
          <div class="modal-body" style="background: var(--treinta-uno-blanco); padding: 2rem;">
            <div class="mb-4">
              <h6 style="color: var(--treinta-uno-negro); font-weight: bold;">Resumen de tu compra:</h6>
              <ul class="list-unstyled">
                <li v-for="item in carrito" :key="item.cursoId" class="mb-1">
                  <span style="color: var(--treinta-uno-azul); font-weight: bold;">{{ item.cursoNombre }}</span> - 
                  <span style="color: var(--treinta-uno-verde); font-weight: bold;">${{ item.cursoPrecio.toLocaleString() }}</span>
                </li>
              </ul>
              <hr style="border-color: var(--treinta-uno-negro);">
              <div class="d-flex justify-content-between">
                <span style="color: var(--treinta-uno-negro); font-weight: bold; font-size: 1.2rem;">Total a pagar:</span>
                <span style="color: var(--treinta-uno-verde); font-weight: bold; font-size: 1.2rem;">${{ totalPrecio.toLocaleString() }}</span>
              </div>
            </div>
            
            <div class="mb-4">
              <label class="form-label fw-bold" style="color: var(--treinta-uno-negro);">Método de pago:</label>
              <select v-model="metodoPago" class="form-select" style="border: 2px solid var(--treinta-uno-negro); border-radius: 10px; background: var(--treinta-uno-beige);">
                <option value="transferencia">🏦 Transferencia Bancaria</option>
                <option value="efectivo">💵 Efectivo</option>
                <option value="tarjeta">💳 Tarjeta de Crédito</option>
              </select>
            </div>
            
            <div class="alert alert-info" style="border: 2px solid var(--treinta-uno-negro); background: var(--treinta-uno-beige);">
              <small style="color: var(--treinta-uno-negro);">
                <strong>📧 Email de confirmación:</strong> {{ userEmail }}<br>
                <strong>📋 Estado:</strong> Pendiente de confirmación
              </small>
            </div>
          </div>
          <div class="modal-footer" style="background: var(--treinta-uno-beige); border-top: 3px solid var(--treinta-uno-negro); padding: 1.5rem;">
            <button type="button" class="btn btn-lg me-3" @click="cerrarModalPago" style="
              background: var(--treinta-uno-rojo);
              color: white;
              border: 3px solid var(--treinta-uno-negro);
              font-weight: bold;
              border-radius: 10px;
            ">❌ Cancelar</button>
            <button type="button" class="btn btn-lg" @click="procesarCompra" style="
              background: linear-gradient(45deg, var(--treinta-uno-amarillo) 0%, var(--treinta-uno-naranja) 50%, var(--treinta-uno-rojo) 100%);
              color: var(--treinta-uno-negro);
              border: 3px solid var(--treinta-uno-negro);
              font-weight: bold;
              border-radius: 10px;
            ">✅ Confirmar Compra</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: calc(100vh - 56px);
}

.modal {
  z-index: 1050;
}

.card {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
}
</style>
