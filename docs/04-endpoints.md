# Paso 04: Definir los endpoints

Activar o desactivar las pistas forma parte de editar el cartel.

| Método | Ruta                               | Quién puede                                  | Qué hace                                    |
| ------ | ---------------------------------- | -------------------------------------------- | ------------------------------------------- |
| POST   | `/auth/register`                   | Cualquiera con una placa válida y disponible | Crear una cuenta                            |
| POST   | `/auth/login`                      | Cualquiera con credenciales válidas          | Iniciar sesión y obtener un token           |
| GET    | `/posters`                         | Cualquiera                                   | Listar y filtrar carteles                   |
| GET    | `/posters/:posterId`               | Cualquiera                                   | Consultar un cartel                         |
| POST   | `/posters`                         | Ayudante y sheriff                           | Crear un cartel                             |
| PATCH  | `/posters/:posterId`               | Creador o sheriff                            | Editar el cartel, incluido si acepta pistas |
| DELETE | `/posters/:posterId`               | Creador o sheriff                            | Borrar el cartel y sus pistas               |
| POST   | `/posters/:posterId/leads`         | Cualquiera, si el cartel acepta pistas       | Añadir una pista                            |
| DELETE | `/posters/:posterId/leads/:leadId` | Creador del cartel o sheriff                 | Eliminar una pista                          |
| DELETE | `/users/:userId`                   | Sheriff                                      | Dar de baja a un agente                     |