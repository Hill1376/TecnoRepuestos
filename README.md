# TecnoRepuestos S.A. - Backend API 

Este repositorio contiene la estructura base y el núcleo lógico (Capa de Negocio y Acceso a Datos) para el sistema web de **TecnoRepuestos S.A.** El objetivo de la plataforma es erradicar el descontrol operativo mediante la automatización de alertas de stock crítico y la validación transaccional de existencias en el punto de venta.

## Organización del Proyecto (Arquitectura de 3 Capas)

El código fuente se encuentra organizado dentro del directorio `src/` bajo un enfoque desacoplado:

* **`src/config/`**: Scripts de configuración global, incluyendo el pool de conexión segura a la base de datos relacional.
* **`src/routes/`**: Subcapa encargada de mapear los endpoints de la API RESTful (HTTP) y dirigir el tráfico.
* **`src/controllers/`**: Manejadores de la API que reciben las solicitudes del frontend, validan parámetros y estructuran las respuestas JSON.
* **`src/middlewares/`**: Filtros de seguridad e interceptores lógicos (aquí se aloja el control transaccional que impide ventas sin stock).
* **`src/models/`**: Capa de acceso a datos encargada de ejecutar las consultas SQL y mantener la persistencia inmutable.
* **`src/services/`**: Aloja la lógica de negocio pesada e integraciones con servicios externos (como el envío de notificaciones por correo).
* **`src/test/`**: Scripts dedicados exclusivamente al aseguramiento de la calidad (QA) y pruebas de software.

## Requisitos Previos

* Node.js (Versión v18 o superior)
* Motor de Base de Datos Relacional (MySQL / PostgreSQL)

## Instalación y Configuración Local

1. **Clonar este repositorio remoto:**
   ```bash
   git clone [https://github.com/tu-usuario/tecnorepuestos-backend.git](https://github.com/tu-usuario/tecnorepuestos-backend.git)
   cd tecnorepuestos-backend