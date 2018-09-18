## Valentin-Overflow Server

# Configuracion de base de datos:

Loggerse en mongo utilizando admin y luego:

´´´
use valentinoverflow
db.createUser({user: 'desarrollador', pwd: '123456', roles: ['readWrite']})
´´´