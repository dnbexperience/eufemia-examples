/**
 * To showcase the usage of the dnb-ui-lib in React SSR
 *
 */

import 'core-js'

import React from 'react'
import ReactDOM from 'react-dom'

// Custom Eufemia import, instead of effecting the body reset with 'dnb-ui-lib/style'
// import 'dnb-ui-lib/style' // Import the global DNB stylesheet
import 'dnb-ui-lib/style/basis'
import 'dnb-ui-lib/style/components'
import 'dnb-ui-lib/style/themes/ui'

import App from './App.js'
import './App.css'

ReactDOM.render(<App />, document.getElementById('app'))
