# Definir entidades: User, Poster y Pistas

Tablón de carteles "Wanted". Solo los policías tienen cuenta y pueden crear carteles; el público solo puede verlos y filtrarlos.

## Resumen

| Entidad         | Tipo               | Qué representa                       |
| --------------- | ------------------ | ------------------------------------ |
| User            | Colección          | Agente de policía con cuenta         |
| Poster          | Colección          | Cartel de búsqueda                   |
| Pista ciudadana | Embebida en Poster | Información aportada sobre un cartel |

Cada documento de una colección tiene un `_id` generado automáticamente por MongoDB. Las pistas embebidas también reciben su propio `_id`.

## User

| Campo       | Tipo                    | Reglas                                                                                          |
| ----------- | ----------------------- | ----------------------------------------------------------------------------------------------- |
| id          | ObjectId                | Automático                                                                                      |
| Nombre      | Texto                   | Obligatorio                                                                                     |
| Contraseña  | Texto (hash con bcrypt) | Obligatorio. Nunca se devuelve en las respuestas                                                |
| Nº de placa | Texto                   | Obligatorio y único                                                                             |
| Rol         | Texto                   | Lo asigna el backend según la placa. Valores: `user` (ayudante del sheriff) o `admin` (sheriff) |

Notas:
- No hay correo electrónico. El login se hace con nº de placa y contraseña.
- El cliente nunca envía el rol: sale de la placa.
- Hay 3 placas definidas aparte: 1 de sheriff (`admin`) y 2 de ayudante (`user`).

## Poster

| Campo                        | Tipo                              | Reglas                                                                            |
| ---------------------------- | --------------------------------- | --------------------------------------------------------------------------------- |
| id                           | ObjectId                          | Automático                                                                        |
| Nombre de la persona buscada | Texto                             | Obligatorio                                                                       |
| Foto                         | Texto (URL)                       | Opcional                                                                          |
| Recompensa                   | Número entero                     | Obligatorio, mínimo 1                                                             |
| Info                         | Texto                             | Obligatorio, máximo X caracteres                                                  |
| Estado                       | Texto                             | Obligatorio. Valores: en busca y captura (por defecto), detenido, absuelto        |
| Creado por                   | Referencia a User (id del agente) | Obligatorio. Lo asigna el backend con el usuario logueado, no lo envía el cliente |
| Fecha de creación            | Fecha                             | Automática                                                                        |
| Ayuda ciudadana              | Booleano                          | False por defecto                                                                 |
| Pistas ciudadanas            | Lista de Pista (embebida)         | Vacía por defecto                                                                 |

## Pista ciudadana (embebida en Poster)

| Campo             | Tipo     | Reglas                           |
| ----------------- | -------- | -------------------------------- |
| id                | ObjectId | Automático                       |
| Info              | Texto    | Obligatorio, máximo X caracteres |
| Fecha de creación | Fecha    | Automática                       |

## Relaciones

- **User → Poster (1 a N), referenciada.** El cartel guarda el id del agente que lo creó y se recupera con `populate()`. Motivo: el agente existe por sí mismo y es autor de muchos carteles.
- **Poster → Pista (1 a N), embebida.** Las pistas viven dentro del documento del cartel. Motivo: solo tienen sentido dentro de su cartel y se leen siempre con él.

## Decisiones tomadas

- El cartel guarda el id del policía que lo ha creado.
- No hay correo; el nº de placa identifica al agente.
- Un nº de placa solo puede registrar una cuenta (es único).
- El rol depende de la placa con la que se registra el agente.

## Pendiente

- Decidir quién puede añadir pistas (se resuelve en la tabla de permisos, paso siguiente).
- Detalles para concretar al implementar: fechas automáticas, número entero, longitudes máximas, valores internos del estado, normalización de la placa e idioma de los nombres de campo.
