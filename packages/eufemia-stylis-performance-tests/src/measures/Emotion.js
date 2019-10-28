/**
 * To showcase the usage of the dnb-ui-lib in React
 *
 */

import React, { useState, useEffect } from 'react'

import { P, H2 } from 'dnb-ui-lib/elements'

import styled from '@emotion/styled'
import { CacheProvider, css } from '@emotion/core'
import createEmotionCache from '@emotion/cache'
import { withProperties } from './stylis'
// import stylisPlugin from './stylis.js'
// import stylisPlugin from 'dnb-ui-lib/style/stylis'
import { calcMeasures } from './calc'

export default function App({
  title, // eslint-disable-line
  howMenyToRehnder, // eslint-disable-line
  withSpecificity = false // eslint-disable-line
}) {
  const [prettyMeasures, showMeasures] = useState('...')
  performance.mark(`${title} Render evaluation-Start`)

  const manyVars = {
    '--color-summer-green': 'hotpink'
  }
  for (let i = 0, l = howMenyToRehnder; i < l; i++) {
    manyVars['--color-' + i] = 'blue'
  }
  const stylisPlugin = withProperties(manyVars)

  const emotionCache = createEmotionCache({
    stylisPlugins: [stylisPlugin]
  })

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
  const Paragraph = withSpecificity
    ? styled(P)`
        .dnb-core-style & {
          color: blue;
          ${styles};
        }
      `
    : styled(P)`
        color: blue;
        ${styles};
      `

  useEffect(() => {
    showMeasures(calcMeasures(title))
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <Title top="3">
        {title} / {howMenyToRehnder}
      </Title>
      <Paragraph>
        Test the render time of using stylis as a polyfill for IE.
      </Paragraph>
      <pre className="dnb-code">{prettyMeasures}</pre>
    </CacheProvider>
  )
}
