import React from 'react'
import '../styles/globals.css'

// 1. Custom Eufemia import, instead of effecting the body reset with 'dnb-ui-lib/style'
import 'dnb-ui-lib/style/dnb-ui-basis.min.css'
import 'dnb-ui-lib/style/dnb-ui-components.min.css'
import 'dnb-ui-lib/style/themes/theme-ui/dnb-theme-ui.min.css'

// looks like next.js is not so happy to load the styles via node_modules
// import 'dnb-ui-lib/style/basis'
// import 'dnb-ui-lib/style/components'
// import 'dnb-ui-lib/style/themes/ui'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
