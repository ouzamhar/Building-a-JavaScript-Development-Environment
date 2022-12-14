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

### Linting

(why)

- Enforce Consistancy
- Avoid Mistakes

- JSLint
- JSHint
- ESLint

#### ESLint

- Config Format(.js, .yaml, .eslinrc.json, .eslinrc, package.json[tied to npm])
- Rules https://eslint.org/docs/latest/rules/
- Warning vs Erros
- Plugins https://github.com/dustinspecker/awesome-eslint
- Presets(ESLint Recommended, airbnb, XO..)
- ESLint doesn't watch files : use eslint-loader(Re-lint all files upon save), npm package eslint-watch
- Babel-eslint to also lint experimental JS features not just current ones (when running ESLint directly)

### Testing

- Unit testing: Single function or module
- Integration testing: interactions between modules
- UI: Automate interactions with UI

#### Unit Testing

- Framework?
- Assertion library?
- Helper libraries?
- When to run tests?
- Where to place tests
- when to run tests

#### Frameworks

- Mocha
- Jasmine (Assertion built in)
- Tape
- QUnit
- AVA
- Jest (Assertion built in)

#### Assertion library

- Asserion is a way to declare what you expect

#### Helper library

- JSDOM simulate the browser-s DOM to runn DOM-related tests without a browser
- Cheerio Query virtual DOM using jQuery selectors

#### Where to test

- Browser: Karma, Testem
- Headless Browser: Headless Chrome
- In-memory DOM : JSDOM

#### Where to place tests

- Centralized
- Alongside

#### Unit tests should run evrytime you hit save
