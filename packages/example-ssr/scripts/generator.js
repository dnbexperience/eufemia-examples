/**
 * To showcase the usage of the dnb-ui-lib in React SSR
 *
 */

import React from 'react'

import path from 'path'
import fs from 'fs'

import App from '../src/App.js'
import {
  PrerenderedControler,
  thisIsServer
} from 'react-prerendered-component'
import { renderToString } from 'react-dom/server'

GenerateHtmlFile(App, '../index.html')

function GenerateHtmlFile(Component, file) {
  // optional mock
  global.document = { getElementById: () => {} }

  // setting config
  thisIsServer(false)

  const html = /* @jsx */ `
<!DOCTYPE html>
<html>
  <head>
    <title>React Example</title>
    <link rel="stylesheet" href="./bundle.css" />
  </head>
  <body>
    <div id="app">${renderToString(
      <PrerenderedControler isServer>
        <Component count={Math.random()} />
      </PrerenderedControler>
    )}</div>
    <script src="./main.js"></script>
  </body>
</html>
  `.trim()

  const exportedFilePath = path.resolve(__dirname, file)
  fs.writeFileSync(exportedFilePath, html)

  // console.log(html)
}
