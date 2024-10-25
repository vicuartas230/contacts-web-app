# Aplicación Web de Contactos

Con esta aplicación es posible consumir la API REST de Oracle, ejecutando tareas de consulta usando los campos nombre, apellido, correo, teléfono y ciudad del contacto que se requiere, además de la ejecución de tareas de creación, actualización y eliminación de valores existentes en la base de datos.

La aplicación está construida usando la bilbioteca de JavaScript React, la cual es apliamente usada en la construcción de interfaces de usuario.

## Características

- **Operaciones CRUD:** Permite crear, leer, actualizar, o eliminar contactos usando la API REST de Oracle Service Cloud.

- **Respaldo fuera de línea:** Almacena automáticamente las consultas de contactos que se realizan a la API REST de Oracle Service Cloud en caso de que se desconecte el web service.

## Instalación

1. Clone el repositorio en su máquina local:

    ```
    git clone https://github.com/vicuartas230/contacts-web-app.git
    ```

2. Cambie el directorio a la carpeta `contacts-web-app`:

    ```
    cd contacts-web-app
    ```

3. Instale las dependencias necesarias para el proyecto:

    ```
    npm install
    ```

4. Ejecute el servidor de la aplicación:

    ```
    npm start
    ```
## Despliegue

La aplicación está configurada para ser desplegada usando la herramienta de Amazon AWS Amplify.

## Tecnologías

- React y Axios para las consultas a la API.

- Proxy Middleware para la manipulación de los CORS.

- AWS Amplify para el despliegue del proyecto.

## Estructura del Proyecto

            ├── public/
            ├── src/
            │   ├── api/
            │   │   ├── create.api.js
            │   │   ├── delete.api.js
            │   │   ├── expandData.api.js
            │   │   ├── get.api.js
            │   │   └── update.api.js
            │   ├── components/
            │   │   ├── confirmationModal.jsx
            │   │   ├── form.jsx
            │   │   ├── pagination.jsx
            │   │   └── table.jsx
            │   ├── pages/
            │   │   ├── createContact.jsx
            │   │   ├── getContacts.jsx
            │   │   ├── showContacts.jsx
            │   │   ├── updateContact.jsx
            │   │   └── updated.jsx
            │   ├── styles/
            │   ├── App.jsx
            ├── package.json
            └── README.md
