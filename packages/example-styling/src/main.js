/**
 * To showcase legacy styling with the dnb-ui-lib
 *
 */

import React from 'react'
import { render } from 'react-dom'
import App from './App.jsx'

// 1. My App styles
import './App.css'

// 2. Custom Eufemia import
import 'dnb-ui-lib/style/basis'
import 'dnb-ui-lib/style/components'
// import 'dnb-ui-lib/style/elements'
import 'dnb-ui-lib/style/themes/ui'

// 3. Use the stylis Plugin for IE 11 polyfill
import { CacheProvider } from '@emotion/core'
import createEmotionCache from '@emotion/cache'
import stylisPlugin from 'dnb-ui-lib/style/stylis'

const emotionCache = createEmotionCache({
  stylisPlugins: [stylisPlugin]
})

render(
  <CacheProvider value={emotionCache}>
    <App />
  </CacheProvider>,
  document.getElementById('app')
)
