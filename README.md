[![Build Status](https://travis-ci.com/electrode-io/generator-electrode-component.svg?token=9dyHRhqfyW5wqcpfkeLr&branch=master)](https://travis-ci.com/electrode-io/generator-electrode-component)

# generator-electrode-component

A [Yeoman](http://yeoman.io) generator for Electrode
[React](http://facebook.github.io/react/) components.

Builds a React component project with useful gulp tasks for development,
building, and publishing.

See [electrode-archetype-react-component-component-gulp-tasks] for complete
documentation of the gulp tasks.


## Contents

* [Getting Started](#getting-started)
* [Developing Your Component](#developing-your-component)
    * [Source](#source)
    * [Example and Preview](#example-and-preview)
    * [Linting and Unit Testing](#linting-and-unit-testing)
    * [Building and Publishing](#building-and-publishing)
* [License](#license)

## Getting Started

Install the generator:

```bash
npm install -g generator-electrode-component
```

Then run the generator:

```bash
yo electrode-component
```

...and follow the prompts.


## Developing Your Component

### Source

Your component source code is in `src`. You can use JSX and ES6 syntax freely in
your component source; it will be transpiled to `lib` with Babel before being
published to npm so that your users will simply be able to include it.

It's a great idea to add a description, documentation and other information to
your `README.md` file, to help people who are interested in using your
component.

### Example and Preview

Preview your component with LiveReload:

```bash
gulp demo ; gulp open-demo
```

A webserver will be started on [localhost:4000](http://127.0.0.1:4000) running
the examples in `demo/examples/*`

You can use this code-playground to test your component, then publish it to let
potential users try out your component and see what it can do.

### Linting and Unit Testing

```bash
gulp check
```

Your code will be linted with ESLint, using the Babel parser and the React
plugin. You can customise the settings by editing the `.eslintrc` file.

### Building and Publishing

```bash
gulp build
```

This will build your `lib`, `dist` and `example/dist` folders for release.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
