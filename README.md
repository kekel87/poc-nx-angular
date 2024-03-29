# Poc Nx Angular 🅰️

**See if NX solves my questions/problems in Monorepo Angular:**

- [ ] applications and libraries version management
- [x] tree shakable libraries (multiple entry points)
- [x] management of dependencies between libs (+tree shakable)
- [x] e2e testing
  - [ ] shared e2e testing
  - [ ] component e2e testing
- [x] Storybook
- [x] management of syntax rules and code formatter 👮
  - [x] global rules
  - [x] per framework rules
  - [x] custom rules (rxjs, ngrx, import, unused-import)
- [ ] style libraries (SCSS variables, mixings only, theming), publishable
- [ ] asset libraries
- [x] CI with Github Actions (or Gitlab CI/CD)
- [x] NX and Angular update
- [x] test with another language (React...)
- [ ] distributed NX caching 🤔
- [ ] management of libs publication on npm

Idea of library splitting:

```
📦ng-name
 ┣ 📂apps
 ┃ ┣ 📂ng-app1
 ┃ ┣ 📂ng-app1-e2e
 ┃ ┣ 📂ng-app2
 ┃ ┣ 📂ng-app2-e2e
 ┃ ┣ 📂react-app
 ┃ ┗ 📂...
 ┗ 📂libs
   ┣ 📂components        // Pure UI shared components (tree shakable, look for Storybook and design system)
   ┣ 📂pipes             // Shared pipes (tree shakable)
   ┣ 📂directives        // Shared directives (tree shakable)
   ┣ 📂styles            // Shared SCSS variables, mixings, theming 🤷
   ┣ 📂assets            // Shared assets favicon, images, fonts
   ┣ 📂...
   ┣ 📂feature1          // A standalone feature lib with own business logic
   ┣ 📂testing           // Testing helper, like Jest assertion matchers and helpers
   ┣ 📂rxjs              // RXJS lib, like custom operators
   ┣ 📂ngrx              // NGRX lib, like serializer, effects, actions
   ┣ 📂typeguards        // Typescript shared typeguards
   ┣ 📂validators        // Angular shared validators
   ┣ 📂api               // API shared lib (models and services)
   ┗ 📂...
```

## Links

- [Nx Angular Monorepo](https://nx.dev/angular-tutorial/01-create-application)
- [Angular Plugin](https://nx.dev/packages/angular)
- https://kevinkreuzer.medium.com/ng-samurai-schematics-to-improve-tree-shaking-of-angular-libraries-83656ca22d9e
- https://medium.com/angular-in-depth/improve-spa-performance-by-splitting-your-angular-libraries-in-multiple-chunks-8c68103692d0
- https://dev.to/kauppfbi_96/why-and-how-to-use-secondary-entrypoints-in-your-angular-libraries-in-nx-3bb2
- https://dev.to/this-is-angular/emulating-tree-shakable-components-using-single-component-angular-modules-13do
- https://www.cypress.io/blog/2022/04/13/share-cypress-commands-in-an-nx-workspace/
- https://github.com/nrwl/nx/issues/3748

## Notes

### Tree shakable libraries

[@nrwl/angular:library-secondary-entry-point](https://nx.dev/angular/library-secondary-entry-point)

Nx distinct three type of libraries: `workspace`, `publishable` and `buildable`.
https://nx.dev/structure/buildable-and-publishable-libraries

> A normal Nx library - let’s call it "workspace library" - is not made for building or publishing.

Tree shakable libraries , is only compatible with `publishable` or `buildable` libraries, generator need `package.json`.

```bash
nx g @nrwl/angular:lib <lib-name> --buildable
nx g @nrwl/angular:library-secondary-entry-point --library<lib-name> --name=<entry-point-name>
```

### Toolings

**NX running**

```bash
nx [CMD] # Global install  npm install -g nx
npx nx [CMD]
npm run nx [CMD]
npm run ng [CMD]
```

**Runnning**

```bash
npm start # app1 default
npm start [app-name]
```

**Code formating**

```bash
# nx config format
nx format

# apps format
nx mint [app-lib-name]
nx affected:lint --fix
nx run-many --target=lint --fix
```

**Code linting**

```bash
# nx config check
nx format:check

# apps lint
nx lint [app-lib-name]
nx affected:lint
nx run-many --target=lint
```

**Unit testing**

```bash
nx test [app-lib-name]
nx affected:test
nx run-many --target=test
```

**End to end testing**

```bash
nx e2e [app-name-e2e]

nx affected:e2e
nx run-many --target=e2e
```

**Storybook**

```bash
nx storybook [libs-name]
nx storybook components

nx build-storybook components
```

**NX command**

```bash
nx graph
nx affected:graph 😍
nx print-affected --type=app --select=projects
nx workspace-lint
```

---

<details>
  <summary><h2>NX Autogenerated DOC</h2></summary>

<a href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Development server

Run `nx serve app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

</details>
