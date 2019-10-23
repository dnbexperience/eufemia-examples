/**
 * To showcase the usage of the dnb-ui-lib/src in React
 *
 */

import React from 'react'
import { render } from 'react-dom'

// 1. Custom Eufemia import, instead of effecting the body reset with 'dnb-ui-lib/style'
import 'dnb-ui-lib/style/basis'
import 'dnb-ui-lib/style/components'
import 'dnb-ui-lib/style/themes/ui'

// 2. App + custom styles
import './App.css'
import App from './App.jsx'

// 3. Use the stylis Plugin for IE 11 polyfill
import { StyleSheetManager } from 'styled-components'
import stylisPlugin from 'dnb-ui-lib/style/stylis'

render(
  <StyleSheetManager stylisPlugins={[stylisPlugin]}>
    <App />
  </StyleSheetManager>,
  document.getElementById('app')
)
