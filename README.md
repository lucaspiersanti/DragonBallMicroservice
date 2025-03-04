Este proyecto es un microservicio para gestionar información relacionada con Dragon Ball. Utiliza Node.js, Express y MongoDB.

## Requisitos

- Node.js (versión 18 o superior)
- Docker (opcional, para ejecutar el proyecto en un contenedor)

## Despliegue

El microservicio se encuentra deployado en:

[https://dragonballmicroservice.onrender.com/](https://dragonballmicroservice.onrender.com/)
Con todas las rutas funcionales con el objetivo de que se pueda probar fácilmente sin necesidad de clonar el repositorio.

Se borraron los datos de la base de datos MongoAtlas el 04/03/2025 a las 18:00hs para que se puedan iniciar pruebas desde 0.

## Instalación

### Clonar el repositorio

```sh
git clone https://github.com/tu-usuario/DragonBallMicroservice.git
cd DragonBallMicroservice
```

### Configurar variables de entorno

Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables de entorno:

```
MONGO_URI=tu_uri_de_mongodb
PORT=5000
EXTERNAL_API_URL=https://dragonball-api.com/api
NODE_ENV=development
```

### Instalar dependencias

```sh
npm install || pnpm install
```

## Ejecución

### Ejecutar en modo desarrollo

```sh
npm run dev || pnpm run dev
```

### Ejecutar con Docker

Asegúrate de tener Docker instalado y ejecutando. Luego, sigue estos pasos:

1. Construir la imagen de Docker:

   ```sh
   docker build -t dragonballmicroservice .
   ```

2. Ejecutar el contenedor:

   ```sh
   docker run -p 5000:5000 --env-file .env dragonballmicroservice
   ```

## Endpoints

- `GET /api/characters`: Obtener personajes
- `GET /api/planets`: Obtener planetas
- `GET /api/logs`: Obtener logs

## Estructura del proyecto

- src
  - app.js: Configuración principal de la aplicación
  - `config/`: Configuración de la base de datos y variables de entorno
  - `controllers/`: Controladores de las rutas
  - `middlewares/`: Middlewares personalizados
  - `models/`: Modelos de Mongoose
  - `repositories/`: Repositorios para interactuar con la base de datos
  - `routes/`: Definición de rutas
  - `services/`: Servicios de negocio
