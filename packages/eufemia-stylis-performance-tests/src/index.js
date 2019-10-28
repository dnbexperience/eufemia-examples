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
import Emotion from './measures/Emotion'
import StyledComponents from './measures/StyledComponents'

const howMenyToRehnder = 10

const stack = [
  {
    name: 'info',
    component: (
      <p className="dnb-p">
        There are a coupple of measurements in stylis.js witch slows down
        the total possible vars drasticly. Commenting out theese will make
        it possible to measure up to 400x400 items.
      </p>
    )
  },
  {
    name: 'styled-components',
    component: (
      <StyledComponents
        howMenyToRehnder={howMenyToRehnder}
        title="Styled Components"
      />
    )
  },
  {
    name: 'emotion',
    component: (
      <Emotion howMenyToRehnder={howMenyToRehnder} title="Emotion" />
    )
  }
  // {
  //   name: 'emotion-specificity',
  //   component: (
  //     <Emotion
  //       howMenyToRehnder={600}
  //       withSpecificity
  //       title="Emotion with pecificity"
  //     />
  //   )
  // }
]

// start the action
next()

function next() {
  const current = stack.shift()

  if (!current) {
    return
  }

  // clean up the entries.
  performance.clearMarks()
  performance.clearMeasures()

  // create elements to fill
  const elem = document.createElement('div')
  elem.setAttribute('id', current.name)
  document.body.appendChild(elem)

  render(
    <App
      onComplete={() => {
        setTimeout(next, 10)
      }}
    >
      {current.component}
    </App>,
    document.getElementById(current.name)
  )
}

// eslint-disable-next-line
function App({ children, onComplete }) {
  if (typeof onComplete === 'function') {
    React.useEffect(onComplete)
  }

  return <div className="dnb-core-style">{children}</div>
}
