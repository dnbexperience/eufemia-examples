/**
 * To showcase the usage of the dnb-ui-lib in React
 *
 */

import React, { useState, useEffect } from 'react'

import { P, H2 } from 'dnb-ui-lib/elements'

import styled, { StyleSheetManager, css } from 'styled-components'
import { withProperties } from './stylis'
// import stylisPlugin from './stylis.js'
// import stylisPlugin from 'dnb-ui-lib/style/stylis'
import { calcMeasures } from './calc'

// eslint-disable-next-line
export default function App({ title, howMenyToRehnder }) {
  const [prettyMeasures, showMeasures] = useState('...')
  performance.mark('StyledComponents Render evaluation-Start')

  const manyVars = {
    '--color-summer-green': 'limegreen'
  }
  for (let i = 0, l = howMenyToRehnder; i < l; i++) {
    manyVars['--color-' + i] = 'blue'
  }
  const stylisPlugin = withProperties(manyVars)

  // fill content
  const contentWithManyVars = []
  for (let i = 0, l = howMenyToRehnder; i < l; i++) {
    contentWithManyVars.push(`
      color: var(--random-${i});
    `)
  }

  // fill styles
  const styles = []
  for (let i = 0, l = howMenyToRehnder; i < l; i++) {
    styles.push(css`
      ${contentWithManyVars.join('\n')}
      color: var(--random-second-${i});
      color: var(--color-summer-green);
    `)
  }

  const Title = styled(H2)`
    .dnb-core-style & {
      color: blue;
      color: var(--color-summer-green);
    }
  `
  const Paragraph = styled(P)`
    .dnb-core-style & {
      color: blue;
      ${styles};
    }
  `

  useEffect(() => {
    showMeasures(calcMeasures('StyledComponents'))
  }, [])

  return (
    <StyleSheetManager stylisPlugins={[stylisPlugin]}>
      <>
        <Title top="3">
          {title} / {howMenyToRehnder}
        </Title>
        <Paragraph>
          Test the render time of using stylis as a polyfill for IE.
        </Paragraph>
        <pre className="dnb-code">{prettyMeasures}</pre>
      </>
    </StyleSheetManager>
  )
}
