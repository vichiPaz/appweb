# 🎭 31 Minutos - Plataforma de Cursos

Una aplicación web moderna desarrollada con Vue.js 3, Vuex, Vue Router y Firebase, inspirada en los personajes de 31 Minutos.

## 🚀 Características

### ✨ Funcionalidades Principales
- **Catálogo de Cursos**: Visualización de cursos disponibles con información detallada
- **Sistema de Autenticación**: Registro e inicio de sesión con Firebase Auth
- **Carrito de Compras**: Sistema de inscripción a cursos con gestión de cupos
- **Panel de Administración**: CRUD completo para gestión de cursos y alumnos
- **Tema 31 Minutos**: Diseño colorido inspirado en los personajes icónicos

### 🎨 Diseño
- **Paleta de Colores**: Amarillo, naranja, rojo, azul, verde, negro y beige
- **Responsive Design**: Optimizado para dispositivos móviles y desktop
- **Animaciones**: Efectos visuales y transiciones suaves
- **Bootstrap**: Framework CSS para componentes y layout

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Vue.js 3** - Framework JavaScript reactivo
- **Vuex** - Gestión de estado global
- **Vue Router** - Enrutamiento de la aplicación
- **Bootstrap** - Framework CSS
- **Vite** - Herramienta de build rápida

### Backend & Servicios
- **Firebase Authentication** - Autenticación de usuarios
- **Cloud Firestore** - Base de datos NoSQL en tiempo real
- **Firebase Hosting** - Hosting estático

## 📁 Estructura del Proyecto

```
src/
├── components/
│   └── NavBar.vue              # Barra de navegación
├── views/
│   ├── HomeView.vue            # Página principal con catálogo
│   ├── LoginView.vue           # Página de inicio de sesión
│   ├── RegisterView.vue        # Página de registro
│   ├── CarritoView.vue         # Carrito de compras
│   ├── AdministracionView.vue  # Panel de administración
│   └── EditarView.vue          # Edición de cursos
├── router/
│   └── index.js                # Configuración de rutas
├── store/
│   └── index.js                # Store de Vuex
├── fireBaseConfig.js           # Configuración de Firebase
├── App.vue                     # Componente raíz
└── main.js                     # Punto de entrada
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn
- Cuenta de Firebase

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd vue-firebase/vue-firebase-auth-database
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar Firebase**
   - Crear un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Habilitar Authentication (Email/Password)
   - Habilitar Firestore Database
   - Configurar las reglas de Firestore:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if true; // Para desarrollo
       }
     }
   }
   ```

4. **Actualizar configuración**
   - Reemplazar la configuración en `src/fireBaseConfig.js` con tus credenciales

5. **Ejecutar en desarrollo**
```bash
npm run dev
```

## 🏗️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo

# Producción
npm run build        # Build para producción
npm run preview      # Vista previa del build

# Despliegue
firebase deploy      # Desplegar a Firebase Hosting
```

## 📱 Funcionalidades por Vista

### 🏠 HomeView
- **Acceso público**: Visible sin autenticación
- **Catálogo de cursos**: Cards con información detallada
- **Botones de inscripción**: Requieren autenticación
- **Gestión de cupos**: Reducción automática al agregar al carrito

### 🔐 LoginView / RegisterView
- **Autenticación**: Email y contraseña
- **Validación**: Campos requeridos y formato de email
- **Redirección**: Automática al home después del login

### 🛒 CarritoView
- **Solo usuarios autenticados**
- **Lista de cursos**: Seleccionados para inscripción
- **Cálculo de totales**: Precio y cantidad
- **Procesamiento de pago**: Simulado con diferentes métodos

### ⚙️ AdministracionView
- **Acceso restringido**: Solo usuarios autenticados
- **Gestión de cursos**: CRUD completo
- **Vista de alumnos**: Lista de inscripciones por curso
- **Estadísticas**: Resumen de inscripciones

## 🎨 Paleta de Colores 31 Minutos

```css
:root {
  --treinta-uno-amarillo: #FFD700;
  --treinta-uno-naranja: #FF8C00;
  --treinta-uno-rojo: #DC143C;
  --treinta-uno-azul: #4169E1;
  --treinta-uno-verde: #32CD32;
  --treinta-uno-negro: #1a1a1a;
  --treinta-uno-blanco: #FFFFFF;
  --treinta-uno-beige: #F5DEB3;
}
```

## 🔧 Configuración de Firebase

### Estructura de Datos

#### Colección: `cursos`
```javascript
{
  codigo: "TUL001",
  nombre: "Yo, Tulio Triviño – Periodismo sin esfuerzo",
  estado: true,
  precio: "45000",
  duracion: "2 meses",
  descripcion: "Aprende periodismo sin esfuerzo...",
  cupos: 20,
  inscritos: 0,
  img: "https://picsum.photos/400/300?random=tulio"
}
```

#### Colección: `inscripciones`
```javascript
{
  usuarioId: "user123",
  usuarioEmail: "usuario@email.com",
  cursoId: "curso123",
  cursoNombre: "Nombre del Curso",
  cursoPrecio: 45000,
  fechaInscripcion: timestamp,
  estado: "confirmada",
  metodoPago: "transferencia",
  total: 45000
}
```

## 🚀 Despliegue en Firebase Hosting

1. **Instalar Firebase CLI**
```bash
npm install -g firebase-tools
```

2. **Login en Firebase**
```bash
firebase login
```

3. **Inicializar hosting**
```bash
firebase init hosting
```

4. **Build y deploy**
```bash
npm run build
firebase deploy
```

## 👥 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🎭 Inspiración

Inspirado en los personajes icónicos de 31 Minutos:
- **Tulio Triviño**: Periodismo sin esfuerzo
- **Juan Carlos Bodoque**: Técnicas de investigación
- **Juanín**: Cocina creativa
- **Guatón Loyola**: Descontrol festivo

## 📞 Contacto

Desarrollado con ❤️ inspirado en 31 Minutos

---

*¡31 Minutos es una producción de Aplaplac!*