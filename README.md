#  Sistema de Control de Inventario

Una aplicación web ligera diseñada para gestionar el registro y la búsqueda de productos en un inventario. Este proyecto destaca por el uso de **JavaScript Vanilla**, implementando el objeto `Map()` para un almacenamiento en memoria eficiente y Programación Orientada a Objetos (POO) para la estructura de datos.

##  Características Principales

* **Gestión en Memoria (Map):** Utiliza la estructura de datos `Map` de ES6 para almacenar los productos, permitiendo búsquedas de alta eficiencia ($O(1)$) mediante el código del producto.
* **Registro de Productos:** Permite agregar nuevos artículos solicitando Código, Nombre, Precio, Cantidad y Fecha de Caducidad.
* **Validaciones Integradas:** Evita el registro de productos sin código y valida que los valores de precio y cantidad sean mayores a cero.
* **Búsqueda Rápida:** Funcionalidad para buscar artículos por su código, autocompletando los campos del formulario si el producto existe.
* **Notificaciones Dinámicas (UI):** Implementación de alertas visuales tipo "Toast" (éxito/error) personalizadas que desaparecen automáticamente después de 3 segundos, mejorando la experiencia del usuario.

##  Tecnologías y Conceptos

* **Frontend:** HTML5, CSS3
* **Lógica de Negocio:** JavaScript (ES6)
* **Conceptos Aplicados:** * Programación Orientada a Objetos (Clases en JS).
    * Estructuras de Datos (`Map`).
    * Manipulación del DOM y Event Listeners.

##  Arquitectura del Proyecto

El proyecto sigue el principio de separación de responsabilidades, dividiendo la lógica de la siguiente manera:

```
control-inventario/
├── index.html       # Interfaz de usuario (formulario y notificaciones)
├── styles.css       # Diseño visual y estilos de las alertas
├── producto.js      # Definición de la clase Producto (Modelo)
└── inventario.js    # Lógica de almacenamiento y métodos del Map
```

##  Instalación y Uso Local
Este proyecto no requiere de dependencias, base de datos ni servidores en tiempo de ejecución. Para utilizarlo:

Clona el repositorio:

```
git clone https://github.com/JuanEnC/inventarioMap.git
```
Navega al directorio del proyecto:

```
cd inventarioMap/control-inventario
```
Abre el archivo index.html en tu navegador web de preferencia.

Ingresa un producto y presiona Agregar. Luego, limpia el formulario, ingresa el mismo código y presiona Buscar para ver cómo se recuperan los datos.

##  Autor
JuanEnC - Desarrollo de Software - GitHub Profile

Contacto: jlopezdecardenas@ucol.mx
