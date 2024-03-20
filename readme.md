# Backend de Rincón de Placeres Gastronómicos: Blog de recetas de cocina

Este proyecto es el backend de la aplicación web sobre blog de recetas de cocina "Rincón de Placeres Gastronómicos".

## Descripción

Este backend se encarga de manejar la lógica del servidor y la comunicación con la base de datos para la aplicación de blog de recetas de cocina.

## Enunciado - Requerimientos

Crear un proyecto de backend con los endpoints necesarios para poder
administrar recetas de cocina, crear usuarios y realizar el login de los mismos.
Pueden modelar las propiedades de las recetas con los valores deseados, los
usuarios deben contener como mínimo un mail y password.
Modelar la base de datos necesaria con MongoDB para almacenar estos datos y
validar los datos recibidos en los request antes de almacenar en la base de datos.

## Integración con proyecto de Frontend

Este proyecto de Backend se integró a su proyecto Frotend correspondiente.

### Repositorio Frontend: [frontendBlogDeRecetas](https://github.com/brunomry/frontendBlogDeRecetas.git)

## Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript

## Funcionalidades Principales

- Endpoint para listar todas las recetas disponibles.
- Endpoint para obtener el detalle de una receta específica.
- Endpoint para agregar una nueva receta.
- Endpoint para modificar los detalles de una receta existente.
- Endpoint para eliminar una receta.

### Autenticación de Usuarios:

- Inicio de sesión mediante sessionStorage.

## Requisitos Previos

- Node.js instalado en el sistema.
- MongoDB instalado (o extension de VS) y en ejecución en el sistema o conexión a una instancia de MongoDB en la nube.

## Instalación y Ejecución

1. Clonar este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/brunomry/backendBlogDeRecetas.git

## Autor

Bruno Madozzo Romay