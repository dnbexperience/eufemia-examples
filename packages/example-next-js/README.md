# DNB UI Library - React Next.js Example

**NB:** This setup is meant to run on Node.js v14

## ESM and Tree Shaking

You may consider to use [next-transpile-modules](https://www.npmjs.com/package/next-transpile-modules) in order to actually use ESM and get with that Tree Shaking:

```js
// Inside next.config.js

const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['dnb-ui-lib'])

module.exports = withPlugins([withTM], {
  // ...
})
```

This way you can import components still directly `import { Button } from 'dnb-ui-lib'` instead from `/cjs`.

## How to run this Example App

1. Make sure You have installed the dependencies `yarn install`.
1. If You run this app inside the mono repo Eufemia, then make sure You build the `dnb-ui-lib` first. To do so, go to the `dnb-ui-lib` directory and run `yarn build`. This is because we consume the package content directly like: import `dnb-ui-lib/style` and not from the `src` folder, like: `dnb-ui-lib/style`.
1. Now You can run `yarn dev` inside this Example App.
