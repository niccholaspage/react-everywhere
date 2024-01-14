## react-everywhere

A test bed with sample projects using React in different ways.

Examples will include:

- CSR (Client Side Rendering)
  - Think `create-react-app` or [Vite's `react-ts` template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts), which is what this example is based off of.
- Static SSR + SSG
  - This example includes static server side rendering and static site generation with renderToStaticMarkup. This is kind of like Astro with SSG, if it used React components instead of Astro components and had no concept of client hydration directives.
- SSR (Server Side Rendering with renderToString and Hydration)
  - This example includes server side rendering with renderToString and client side hydration with ReactDOM.hydrate. Think [create-vite-extra's `template-ssr-react` template](https://github.com/bluwy/create-vite-extra/tree/master/template-ssr-react), which is what this example is based off of.
- Streaming SSR (Server Side Rendering with renderToPipeableStream and Hydration) (TODO)
- RSC (React Server Components) with CSR (TODO)
- RSC (React Server Components) with SSR and Hydration (TODO)
