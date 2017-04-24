# global-env-runtime

🌐 A runtime implementation for the [global-env proposal](https://github.com/global-env/proposal).

## Installing

Install the package with npm:

```
npm install global-env-runtime --save
```

Or if you use Yarn:

```
yarn add global-env-runtime --save
```

TODO: Provide a CDN alternative?

## Usage

If you're using the package, you can import the runtime into your code, and it will

```js
// If you use es6 modules:
import 'global-env-runtime';
// If you use commonjs:
require('global-env-runtime');
```

You can then use global.env as you would normally expect:

```js
if (env.is('test')) {
  // Handle special case...
}
```
