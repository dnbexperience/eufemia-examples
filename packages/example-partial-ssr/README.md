# DNB UI Library - React Partial SSR Example

## How to run this Example App

1. Make sure You have installed the dependencies `yarn install`.
1. If You run this app inside the mono repo Eufemia, then make sure You build the `dnb-ui-lib` first. To do so, go to the `dnb-ui-lib` directory and run `yarn build`. This is because we consume the package content directly like: import `dnb-ui-lib/style` and not from the `src` folder, like: `dnb-ui-lib/style`.
1. Start the server `yarn server`
1. Start the client `yarn server`
1. A fetch request is made from the client to get the pre-rendered HTML from the server. The server will change some props. The client will reuse the server props.

**Why class-properties?**
We only use the Babel Plugin `transform-class-properties` to run the `handleClick` event like a class property.
