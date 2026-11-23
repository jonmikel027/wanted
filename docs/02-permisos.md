# Paso 02: Definir los permisos

| Acción                                       | Público |   Ayudante (user)    | Sheriff (admin) |
| :------------------------------------------- | :-----: | :------------------: | :-------------: |
| Ver carteles                                 |    ✓    |          ✓           |        ✓        |
| Crear un cartel                              |    ✗    |          ✓           |        ✓        |
| Editar un cartel                             |    ✗    |    solo los suyos    |  ✓ cualquiera   |
| Borrar un cartel                             |    ✗    |    solo los suyos    |  ✓ cualquiera   |
| Activar o desactivar las pistas de un cartel |    ✗    |  solo en los suyos   |  ✓ cualquiera   |
| Añadir una pista (si el cartel lo permite)   |    ✓    |          ✓           |        ✓        |
| Eliminar una pista                           |    ✗    | solo en sus carteles |  ✓ cualquiera   |
| Dar de baja a un agente                      |    ✗    |          ✗           |        ✓        |
