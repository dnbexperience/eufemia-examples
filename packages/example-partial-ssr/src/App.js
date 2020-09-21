/**
 * To showcase the usage of the dnb-ui-lib/cjs in React SSR
 *
 */

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
// import dompurify from 'dompurify'

import { PrerenderedControler } from 'react-prerendered-component'

import Item from './Component'

export default class App extends PureComponent {
  render() {
    return (
      <div className="dnb-core-style">
        <GetPrerenderedComponent api="/api" Component={Item} />
      </div>
    )
  }
}

function GetPrerenderedComponent({ api, Component }) {
  const ref = React.useRef()
  const [result, setResult] = React.useState(null)

  React.useEffect(() => {
    // setTimeout(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => {
        setResult(
          <div
            ref={ref}
            dangerouslySetInnerHTML={{
              __html: data.markup
              // __html: dompurify.sanitize(data.markup, {
              //   ALLOWED_TAGS: ['script'] // is too restrictive
              // })
            }}
          />
        )
        if (ref.current) {
          ReactDOM.hydrate(
            <PrerenderedControler>
              <Component />
            </PrerenderedControler>,
            ref.current
          )
        }
      })
    // }, 3e3)
  }, [api])

  return result
}
