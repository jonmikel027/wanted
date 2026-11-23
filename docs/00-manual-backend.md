# Hoja de ruta: Desarrollo de API Backend (Node.js + Express + MongoDB)

## Fase 0. Diseño en papel
*(La que tú ya pusiste primero)*

* **Entidades y sus campos.**
* **Roles y tabla de permisos:** qué puede hacer cada rol en cada recurso.
* **Lista de endpoints:** método, ruta, quién puede acceder y qué devuelve.
* **Modelado de datos:** qué embebes y qué referencias, y por qué.

> **Entregable:** Una hoja que puedas seguir sin pensar mientras programas.

---

## Fase 1. Repositorio
* Crear repositorio con `README.md` y `.gitignore` de Node.
* Clonar en local y crear la rama `dev`.
* Seguir el estándar de commits:
  * `chore:` (configuración)
  * `feat:` (funcionalidad)
  * `fix:` (corrección de errores)
  * `test:` (pruebas)
  * `docs:` (documentación)

---

## Fase 2. Configuración
* Inicializar proyecto con `npm init` e instalar **Express**.
* Configurar variables de entorno con `dotenv`.
* Crear `.env` (ignorado por Git) y `.env.example` (commiteado).
* Definir variables iniciales: puerto, URL de Mongo y, más adelante, el secreto del JWT.

---

## Fase 3. Base de datos
* Crear `docker-compose.yml` con **MongoDB** y persistencia mediante volumen.
* Configurar la conexión con **Mongoose**.
* Comprobar que la API arranca conectada correctamente a la base de datos.
  
---

## Fase 4. Esqueleto mínimo
* Crear la estructura de carpetas: `routes`, `controllers`, `services`, `models`, `middlewares`.
* Crear un endpoint `GET /health` que responda `ok`.
* *Criterio de cierre:* Si arranca y responde, esta fase está cerrada.
  
---

## Fase 5. Primera entidad completa (de punta a punta)
> **Regla de oro:** Construye en vertical, no por capas. No hagas todos los modelos y luego todos los controladores.

1. Haz una entidad entera: `modelo → servicio → controlador → ruta`.
2. Pruébala con **Postman** o **Thunder Client**.
3. Haz commit.
4. Pasa a la siguiente entidad.

---

## Fase 6. Errores y validaciones
* Implementar un manejador de errores centralizado.
* Añadir validaciones de esquema.
* Asegurar el envío de códigos HTTP correctos.

---

## Fase 7. Usuarios y autenticación
* Crear modelo `User`.
* Implementar registro con encriptación de contraseñas (`bcrypt`).
* Implementar login y generación de **JWT**.
* Crear middleware que lea el token y deje los datos del usuario en `req.user`.

---

## Fase 8. Autorización
* Crear middleware de control de roles.
* Implementar comprobación de propiedad (permitir acceso solo al dueño del recurso o a un `admin`).

---

## Fase 9. Resto de entidades y relaciones
* Implementar relaciones mediante `populate()`.
* Añadir subdocumentos donde corresponda.
* Implementar filtros mediante *query params*.

---

## Fase 10. Tests
* Escribir pruebas unitarias y de integración.
* *Consejo:* Es mejor escribirlos conforme haces cada pieza (por ejemplo, el test del middleware de roles justo al terminarlo) que dejarlos para el final.

---

## Fase 11. Cierre
* Documentar el código con **JSDoc**.
* Exportar la colección de **Postman**.
* Completar el `README.md` y redactar la memoria del proyecto.
* Revisar el `.gitignore` (asegurar que no se suba `.env` ni `node_modules`).
* Hacer *merge* de `dev` a `main`.

---

## 💡 Tres hábitos que sostienen todo

1. **Iteraciones pequeñas y verificables:** Cada paso termina con algo que funciona y se puede probar. Si no puedes probarlo, el paso es demasiado grande.
2. **Commits con propósito:** Haz un commit por cada cosa que funciona, no por cada instalación suelta. Commitear explicando lo que instalas está bien para aprender, pero un solo commit como `chore: instala express y estructura inicial` es más habitual.
3. **Depuración por capas:** Si algo falla, localiza exactamente dónde ocurre:
   * ¿Llega la petición (ruta)?
   * ¿Llega al controlador?
   * ¿El servicio recibe lo correcto?
   * ¿Responde Mongo?
