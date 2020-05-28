/**
 * To showcase the usage of the dnb-ui-lib/src in Next.js
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import Head from 'next/head'

// 1. Custom Eufemia import, instead of effecting the body reset with 'dnb-ui-lib/style'
import 'dnb-ui-lib/style/dnb-ui-basis.min.css'
import 'dnb-ui-lib/style/dnb-ui-components.min.css'
import 'dnb-ui-lib/style/themes/theme-ui/dnb-theme-ui.min.css'

// looks like next.js is not so happy to load the styles via node_modules
// import 'dnb-ui-lib/style/basis'
// import 'dnb-ui-lib/style/components'
// import 'dnb-ui-lib/style/themes/ui'

const MainLayoyt = ({ children }) => (
  <div className="dnb-core-style">
    <Head>
      <title>Home</title>
    </Head>

    {children}

    <style jsx>{`
      /* More styles? */
    `}</style>
  </div>
)
MainLayoyt.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainLayoyt
