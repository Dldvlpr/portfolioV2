# pfv2

A minimal Vue 3 + Vite starter configured with TypeScript, Pinia, Vue Router,
TailwindCSS and SCSS. All example components and views have been removed so you
can start building your application from a clean slate.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we
replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need
[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make
the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
