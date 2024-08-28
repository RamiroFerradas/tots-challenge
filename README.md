# Aplicación de Mapa Interactivo de Países

Este proyecto es una prueba técnica que implementa una aplicación web para visualizar información de países utilizando **Next.js**. La aplicación obtiene datos de una API GraphQL y los muestra en un mapa interactivo con funcionalidades adicionales para mejorar la experiencia de usuario.

## Descripción General

La aplicación permite:

- Visualizar un mapa con pines que representan cada país.
- Buscar países por nombre, región o código ISO.
- Filtrar y actualizar dinámicamente los pines mostrados en el mapa en función de la búsqueda.

## Requerimientos Técnicos

- **Framework Principal**: Next.js.
- **Lenguaje**: TypeScript.
- **Visualización del Mapa**: Utiliza la biblioteca Leaflet para la visualización del mapa y la colocación de pines.
- **API GraphQL**: Los datos de los países son obtenidos desde [https://countries.trevorblades.com/](https://countries.trevorblades.com/).
- **Estilos**: TailwindCSS para agilizar el desarrollo de la interfaz.

### Funcionalidades Implementadas

- **Mapa Interactivo**: Se utiliza Leaflet para mostrar pines en un mapa según las coordenadas geográficas de cada país.
- **Búsqueda Dinámica**: Filtra países en función del nombre, región o código ISO introducido por el usuario.
- **Manejo de Errores**: Implementación de manejo de errores para asegurar la estabilidad de la aplicación.
- **Interfaz Intuitiva y Responsiva**: La interfaz se adapta a diferentes tamaños de pantalla y ofrece una experiencia de usuario fluida.

## Instrucciones de Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/RamiroFerradas/tots-challenge.git
```

2. Instalar dependencias:

```bash
npm install
```

3. Configura la variables de entorno
   En un archivo **.env.local** en la raíz del proyecto configura la variable de entorno

```bash
NEXT_PUBLIC_GRAPHQL_API_URL
```

4. Iniciar la aplicación:

```bash
   npm run dev
```

## Pruebas

Ejecuta las pruebas: Para correr todas las pruebas, utiliza el siguiente comando:

```bash
   npm test
```

## Despliegue

La aplicación está desplegada en Vercel y puede ser accedida a través de la siguiente URL: <a href="https://tots-countries-challenge.vercel.app" target="_blank">tots-countries-challenge.vercel.app</a>.

## Autor

Desarrollado por Ramiro Ferradas
