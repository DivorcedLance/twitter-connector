# Twitter Data Connector

Este proyecto es un Web Data Connector (WDC) para Tableau que permite extraer y visualizar datos en tiempo real desde Twitter. La solución fue creada utilizando TypeScript y la librería `@tableau/taco-toolkit` para facilitar la integración de los datos obtenidos mediante una API personalizada basada en web scrapping. 

## Características

- Extracción de tweets a partir de un nombre de usuario y un límite de tweets proporcionados.
- Los datos obtenidos incluyen la fecha de creación del tweet, likes, retweets, texto del tweet, número de tweet, y el nombre de usuario.
- Conexión directa a Tableau para visualización y análisis en tiempo real.

## Requisitos

- Tableau Desktop 2024.2 o superior.
- Node.js (para la ejecución del entorno de desarrollo de `taco-toolkit`).
- Python (para la API que extrae los datos de Twitter). La API puede encontrarse en el siguiente repositorio: [twitter-connector-backend](https://github.com/DivorcedLance/twitter-connector-backend).

## Instalación y Uso

1. Clona este repositorio:

   ```bash
   git clone https://github.com/DivorcedLance/twitter-connector
   cd twitter-connector
   ```

2. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

3. Construye el conector con `taco`:

   ```bash
   taco build
   ```

4. Empaqueta el conector:

   ```bash
   taco pack
   ```

5. Ejecuta Tableau con el conector:

   ```bash
   taco run --app-path 'C:\Program Files\Tableau\Tableau 2024.2\bin\tableau.exe'
   ```

## API Backend

El conector utiliza una API desarrollada en Python para obtener los datos de Twitter mediante web scrapping. Puedes consultar el código y más detalles sobre la API en el siguiente repositorio: [twitter-connector-backend](https://github.com/DivorcedLance/twitter-connector-backend).

## Funcionamiento

- Al abrir Tableau y seleccionar el conector `Twitter Data Connector`, se abrirá una ventana para ingresar el nombre de usuario de Twitter y el número de tweets a extraer.
- Los datos obtenidos de Twitter serán accesibles en Tableau para su visualización y análisis.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna sugerencia o mejora, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.