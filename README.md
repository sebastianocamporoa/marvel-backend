# Marvel API Backend

Este es un proyecto de backend desarrollado con NestJS y TypeORM para interactuar con la API de Marvel. Permite a los usuarios registrarse, iniciar sesión, ver cómics y gestionar una lista de cómics favoritos.

## Características

- Registro de usuarios
- Inicio de sesión con generación de JWT
- Visualización de cómics desde la API de Marvel
- Gestión de cómics favoritos por usuario (agregar y eliminar favoritos)

## Tecnologías

- NestJS
- TypeORM
- MySQL
- JWT (JSON Web Token)

## Requisitos

- Node.js
- MySQL
- Marvel API Key

## Configuración del proyecto

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd marvel-backend

2. Instala las dependencias:
    ```bash
    npm install

3. Inicia el servidor de desarrollo:
    ```bash
    npm run start:dev

## Configuración

### Variables de Entorno

En esta prueba tecnica omití el uso de un archivo `.env` con el objetivo de facilitar su revisión

## Endpoints de la API

### Registro de usuarios

- **URL:** `/users/register`
- **Método:** `POST`
- **Cuerpo de la solicitud:**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "yourpassword",
    "identification": "123456789"
  }

- **Respuesta:**
  ```json
  {
    "user": {
      "id": "uuid-del-usuario",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "identification": "123456789",
      "password": "$2b$10$..."
    },
    "accessToken": "your.jwt.token",
    "userId": "uuid-del-usuario"
  }
  
  
 ## Patrón de Diseño: Domain-Driven Design (DDD)

Este proyecto sigue los principios de Domain-Driven Design (DDD) para estructurar y organizar el código. DDD es un enfoque para desarrollar software complejo al conectar la implementación a un modelo en evolución, que refleja una comprensión profunda del dominio del problema.

### Principios Clave de DDD

1. **Modelar el Dominio:**
   - El núcleo del enfoque DDD es construir un modelo que represente de manera precisa y completa el dominio del problema.
   - Este modelo se implementa utilizando objetos de dominio que encapsulan el estado y el comportamiento.

2. **Lenguaje Ubicuo:**
   - El lenguaje ubicuo es un lenguaje común compartido por el equipo de desarrollo y los expertos en dominio. Este lenguaje se refleja en el código, asegurando que todos los involucrados tengan una comprensión clara y coherente del sistema.

3. **Contextos Limitados:**
   - Los contextos limitados son subdominios o áreas del dominio más grande. Cada contexto limitado tiene su propio modelo y es responsable de una parte específica del dominio.

### Componentes del Proyecto

El proyecto se organiza en módulos que corresponden a contextos limitados del dominio. Cada módulo contiene varios componentes clave:

1. **Entidades (Entities):**
   - Las entidades son objetos del dominio que tienen identidad propia y una vida definida. Representan conceptos principales del dominio, como `User` y `Favorite`.

2. **Repositorios (Repositories):**
   - Los repositorios son responsables de la persistencia y recuperación de entidades. Abstraen el acceso a la base de datos y proporcionan una interfaz para interactuar con las entidades.

3. **Servicios de Dominio (Domain Services):**
   - Los servicios de dominio encapsulan la lógica de negocio que no pertenece a ninguna entidad en particular. Coordinan operaciones entre múltiples entidades y aseguran que las reglas de negocio se apliquen correctamente.

4. **Controladores (Controllers):**
   - Los controladores manejan las solicitudes HTTP, transformándolas en acciones de la aplicación al invocar los servicios de dominio. También se encargan de formatear las respuestas adecuadas.

