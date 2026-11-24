# Paso 03: Definir el flujo de registro

El registro permite crear una cuenta con una de las tres placas autorizadas. El backend asigna el rol según la placa.

## Datos recibidos

* **Nombre.**
* **Número de placa.**
* **Contraseña.**

## Flujo del backend

1. **Recibir la petición** con los datos del registro.
2. **Validar el nombre.** Debe ser texto y no estar vacío ni contener solo espacios. 
   * *Si falla:* devolver `400`: «Elige un nombre válido».
3. **Comprobar la placa:**
   * Existe en la lista de tres placas del archivo de configuración.
   * No está utilizada por otro usuario en la base de datos.
   * *Si falla cualquiera de las comprobaciones:* devolver el mismo código y mensaje: `400`: «No se puede completar el registro con esa placa».
4. **Validar la contraseña.** Debe tener al menos 8 caracteres, una mayúscula y un número. 
   * *Si no cumple:* devolver `400`: «Contraseña débil: debe tener al menos 8 caracteres, una mayúscula y un número».
5. **Asignar el rol** correspondiente a la placa:
   * `user`: ayudante del sheriff.
   * `admin`: sheriff.
   * *Nota:* El usuario no puede elegir ni enviar su propio rol.
6. **Hashear la contraseña** con `bcrypt`. La contraseña original nunca se guarda.
7. **Guardar el usuario** con su nombre, placa, contraseña hasheada y rol. La placa debe ser única.
8. **Responder con `201`** tras guardar correctamente: «Usuario [nombre], [ayudante del sheriff/sheriff], creado correctamente».

## Errores inesperados

Si ocurre un fallo inesperado, se envía al middleware centralizado de errores. Este devuelve `500`: «Error interno del servidor», sin mostrar detalles internos.

## Decisiones acordadas

* El registro solo crea la cuenta. Después hay que hacer login para obtener el token.
* Nunca se devuelve la contraseña ni su hash.
* Los errores de placa comparten código y mensaje para no revelar si una placa existe o está utilizada.
