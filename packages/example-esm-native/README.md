# DNB UI Library - HTML Native ESM Bundle Example

To showcase this kind of usage, the dependencies are manually renamed (e.g. `react` to `./react.js`). So these packages do not exists in their shape, only with named alias dependency resolution.

But actually, we still use UMD to load both React and the icons bundle.

**More info:**

To make dependencies in ESM work (without `importmap`) we have to point all dependencies directly to a file.

## Start the live-server

To run the HTML page, You have to run a `live-server`.

1. Simply install the package dependencies
1. Run `yarn start` for a live reload server - or simply open the **index.html** file from the _static_ folder.
1. Open this location in Your browser: `http://localhost:8080`
