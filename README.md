# Sistema de Administración de Cursos "31 Minutos"

Este proyecto es un sistema de administración de cursos en línea inspirado en la temática de "31 Minutos", desarrollado como solución a un caso práctico para la empresa "adweb online". La aplicación permite a los usuarios registrarse, iniciar sesión y administrar una base de datos de cursos, utilizando Vue.js en el frontend y Firebase para la autenticación y la base de datos en tiempo real.

## Características Principales

*   **Autenticación de Usuarios:** Sistema de registro e inicio de sesión de usuarios utilizando Firebase Authentication.
*   **Acceso Restringido:** Solo los usuarios registrados y autenticados pueden acceder al panel de administración.
*   **Gestión de Cursos (CRUD):**
    *   **Crear:** Añadir nuevos cursos a la base de datos.
    *   **Leer:** Visualizar la lista de cursos existentes.
    *   **Actualizar:** Editar la información de los cursos.
    *   **Eliminar:** Borrar cursos de la base de datos.
*   **Interfaz de Usuario Atractiva:** Se utiliza el framework **BootstrapVueNext** para crear una interfaz de usuario responsiva y estilizada.

## Tecnologías Utilizadas

*   **Frontend:**
    *   [Vue.js](https://vuejs.org/) (v3)
    *   [Vue Router](https://router.vuejs.org/) para el enrutamiento de vistas.
    *   [Pinia](https://pinia.vuejs.org/) para el manejo del estado.
    *   [BootstrapVueNext](https://bootstrap-vue-next.github.io/) como framework de UI.
*   **Backend & Base de Datos:**
    *   [Firebase](https://firebase.google.com/)
        *   Firebase Authentication
        *   Firestore Database
*   **Entorno de Desarrollo:**
    *   [Vite](https://vitejs.dev/)

## Instalación y Puesta en Marcha

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL-DEL-REPOSITORIO>
    ```
2.  **Navegar al directorio del proyecto:**
    ```bash
    cd vue-firebase/vue-firebase-auth-database
    ```
3.  **Instalar dependencias:**
    ```bash
    npm install
    ```
4.  **Configurar Firebase:**
    *   Crea un proyecto en [Firebase](https://console.firebase.google.com/).
    *   Copia la configuración de tu proyecto (apiKey, authDomain, etc.).
    *   Reemplaza la configuración de ejemplo en el archivo `src/fireBaseConfig.js` con tus propias credenciales.

5.  **Ejecutar la aplicación en modo de desarrollo:**
    ```bash
    npm run dev
    ```