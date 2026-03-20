## Semana 3

- Explicación de como publiqué la aplicación

La aplicación se publicó utilizando GitHub Pages. Para ello, primero generé la versión de producción mediante el comando npm run build, que crea los archivos optimizados dentro de la carpeta dist. Después, moví ese contenido a la carpeta docs, que es la que GitHub Pages utiliza como origen para servir la web. También añadí un archivo .nojekyll para evitar que GitHub intentara procesar el proyecto con Jekyll, lo cual impediría que React funcionara correctamente. Finalmente, configuré GitHub Pages para desplegar desde la rama main y la carpeta docs.


- Diferencia entre desarrollo y producción

En el entorno de desarrollo, la aplicación se ejecuta mediante npm run dev, que inicia un servidor local con recarga automática y herramientas pensadas para programar de forma rápida. En este modo, el código no está optimizado y está orientado a facilitar la edición continua. En cambio, la versión de producción se genera con npm run build, creando archivos minificados y optimizados para un mejor rendimiento. Esta versión es la que se publica en GitHub Pages y está pensada para ser utilizada por los usuarios finales.


-Estructura general del proyecto

El proyecto se organiza principalmente en la carpeta src, donde se encuentran los componentes, páginas y la lógica de la aplicación escrita en React. La carpeta public contiene recursos estáticos que se copian tal cual al build final. La carpeta docs almacena la versión optimizada generada para GitHub Pages, que es la que se publica en la web. Además, archivos como vite.config.js, package.json e index.html forman parte de la configuración del entorno y definen dependencias, scripts y el comportamiento del proyecto.