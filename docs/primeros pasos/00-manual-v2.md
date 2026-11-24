# Hoja de ruta: API Backend Wanted
**Stack:** Node.js + Express + MongoDB

---

## Fase 0. Diseño inicial — *completada*
* Definir entidades, campos y relaciones.
* Decidir qué datos se embeben y cuáles se referencian.
* Definir roles y tabla de permisos.
* Describir el flujo del registro.
* Preparar la tabla de endpoints.

> **Documentación:** entidades, permisos, registro y endpoints dentro de `docs/`.

---

## Fase 1. Repositorio — *completada*
* Crear el repositorio con `README.md` y `.gitignore` de Node.
* Clonar y crear `dev`.
* Incorporar la documentación inicial.

> **Flujo de trabajo:** crear una rama desde `dev`, desarrollar y comprobar, hacer commit, integrar en `dev` y hacer push.

| Prefijo | Uso |
| :--- | :--- |
| `chore` | Configuración y organización |
| `feat` | Funcionalidad nueva |
| `fix` | Corrección de errores |
| `docs` | Documentación |
| `test` | Pruebas |

* **Ramas:** con nombres sencillos y descriptivos.
* **Commits:** en infinitivo (ej. `feat: añadir creación de carteles`).

---

## Fase 2. Servidor y configuración — *completada*
* Inicializar con `npm init` e instalar Express.
* Configurar módulos con `"type": "module"`.
* Configurar scripts `start` y `dev`, usando `node --watch`.
* Crear `GET /health`.
* Cargar variables con `dotenv`.
* Crear `.env` y `.env.example`.

> **Comprobación:** el servidor responde y utiliza el puerto configurado.

---

## Fase 3. Base de datos — *completada*
* Crear `docker-compose.yml` con MongoDB y volumen persistente.
* Instalar Mongoose.
* Definir `MONGO_URI`.
* Crear `src/config/connectMongo.js`.
* Conectar con Mongo antes de poner el servidor a escuchar.

> **Comprobación:** conexión establecida y `/health` funcionando.

---

## Fase 4. Organización del servidor — *completada*
* Separar la configuración de Express del arranque.
* Mantener rutas y middlewares en el archivo de aplicación.
* Mantener conexión y listen en `startServer.js`.

*Nota: Las carpetas `models`, `services`, `controllers`, `routes` y `middlewares` se crearán cuando las necesitemos.*

> **Comprobación:** la separación no cambia el funcionamiento.

---

## Fase 5. Primera funcionalidad de carteles — *siguiente*
* Crear el modelo `Poster` con sus validaciones básicas.
* Construir el recorrido `modelo → servicio → controlador → ruta`.
* Implementar y probar las operaciones de los carteles una a una.
* Preparar la referencia al agente creador.

> **Durante esta fase:** las operaciones que finalmente requieren permisos estarán pendientes de protección hasta implementar autenticación y autorización.

---

## Fase 6. Errores y validaciones
* Centralizar el manejo de errores.
* Responder a rutas inexistentes.
* Gestionar datos inválidos, identificadores incorrectos y recursos no encontrados.
* Utilizar códigos HTTP y mensajes coherentes.
* Controlar los errores de arranque.

*Nota: Las validaciones básicas se añaden desde el primer modelo; aquí unificamos su tratamiento.*

---

## Fase 7. Usuarios y autenticación
* Crear el modelo `User`.
* Configurar las tres placas autorizadas y sus roles.
* Implementar el registro y hashear contraseñas con `bcrypt`.
* Implementar login y generación de JWT.
* Crear el middleware de autenticación y establecer `req.user`.

> **Decisiones acordadas:** el registro no devuelve token y nunca se devuelve la contraseña ni su hash.

---

## Fase 8. Autorización
* Aplicar los permisos de `user` y `admin`.
* Permitir modificar carteles al creador o al sheriff.
* Asignar el creador desde el usuario autenticado.
* Implementar la baja de agentes y decidir qué ocurre con sus carteles y su placa.

> **Comprobación:** probar tanto accesos permitidos como rechazados.

---

## Fase 9. Pistas, relaciones y filtros
* Incorporar las pistas como subdocumentos del cartel.
* Permitir añadirlas cuando el cartel acepte pistas.
* Permitir eliminarlas al creador del cartel o al sheriff.
* Utilizar `populate()` donde necesitemos datos del creador.
* Implementar los filtros acordados mediante parámetros de consulta.

---

## Fase 10. Pruebas
* Añadir pruebas conforme terminemos comportamientos importantes.
* Probar validación de contraseñas, registro, login y permisos.
* Comprobar operaciones de carteles y pistas.
* Revisar casos de error y persistencia de datos.

*Nota: Esta fase sirve para completar la cobertura pendiente; las pruebas no empiezan aquí.*

---

## Fase 11. Documentación y entrega
* Añadir JSDoc donde ayude a entender el código.
* Exportar la colección de peticiones.
* Completar `README` y memoria.
* Documentar instalación, variables, Docker y ejecución de pruebas.
* Comprobar que `.env` y `node_modules` no están versionados.
* Verificar el proyecto desde una instalación limpia.
* Integrar `dev` en `main` y hacer push.

---

## Hábitos de trabajo
1. Un ejercicio cada vez y dificultad progresiva.
2. Comprobar el comportamiento antes del commit.
3. Usar `git add .` y revisar lo incluido con `git status`.
4. Hacer commits por avances con sentido.
5. Cerrar cada rama con merge a `dev` y push.
6. Actualizar este manual cuando cambie el recorrido.
