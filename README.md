# Building-a-JavaScript-Development-Environment An online course by Instructor

Cory House course that provides a playbook outlining the key decisions to make for
building a robust development environment that handles bundling, linting,
transpiling, testing, and much more.

### Developement Web servers

Webpack Dev Server

- built in to Webpack
- Serves from memory
- includes hot realoading

Browsersync

- Dedicated IP for sharing work on LAN
- All interactions remain in sync!
- Great for cross-device testing
- integrates with Webpack, Browserify, Gulp, Express..

Sharing Work-in-progress (free and low friction setup)

- localtunnel
- ngrok
- vercel
- Surge (only static files)

### Automation

- Grunt (configuration over code)
- Gulp (in-memory streams, fast, code over configuration)
- npm Scripts (no need for seperate plugins)

### Transpiling

- Babel: transpiles the latest version of JS down to code that runs in all browsers, Write standardizes JS and levrage full JS Ecosystem. No type defs, annotations required.

- Babel Configuration Styles:

  - .babelrc (not npm specific)
  - package.json (one less file)

- TypeScript: Superset of JavaScript with additional non-standard features (type annotaions, interfaces..), enhanced autocompletion, enhanced readibility, safer refactoring, clearer intent

Build script JS style

- Plain JS(no waiting for transpile, no transpile dependancy)
- Transpiled(enjoy latest features, consistent coding style, same linting rules everywhere, can eventually remove transpiler)

Sourcemaps

- Maps code back to original source
- Part of our build
- Downloaded if you open developer tools
