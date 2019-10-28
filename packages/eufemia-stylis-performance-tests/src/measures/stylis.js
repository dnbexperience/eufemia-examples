/**
 * Stylis plugin, more info https://github.com/thysultan/stylis.js
 * To be used to polyfill CSS Custom Properties
 * where e.g. Styled Components and Emotion are used
 */

import { matchAll } from 'dnb-ui-lib/shared/component-helper'
import properties from 'dnb-ui-lib/style/properties'
import { isIE11 } from 'dnb-ui-lib/shared/helpers'

const findRegExp = /var\(([^)]*)\)/g

const stylisPlugin = (context, content, props = null) => {
  // Only use the property context
  if (context !== 1 || (props === null && !isIE11)) {
    return false
  }
  performance.mark('matchAll evaluation-Start')

  // Collect the vars to replace
  // NB: in future we can use content.matchAll
  const matches = matchAll(content, findRegExp)

  // performance.mark('matchAll evaluation-End')
  performance.measure('measure matchAll', 'matchAll evaluation-Start')

  performance.mark('fillVars evaluation-Start')

  // Prepare the vars to make them ready to be replaced
  // eslint-disable-next-line
  const varsToFill = Array.from(matches).reduce((acc, [k, v]) => {
    if (props && props[v]) {
      acc[v] = props[v]
    } else if (properties[v]) {
      acc[v] = properties[v]
    }
    return acc
  }, {})

  performance.measure('measure fillVars', 'fillVars evaluation-Start')

  performance.mark('replaceVars evaluation-Start')

  // Replace vars
  const ret = Object.entries(varsToFill).reduce(
    (acc, [k, v]) => acc.replace(new RegExp(`var\\(${k}\\)`, 'g'), v),
    content
  )

  performance.measure(
    'measure replaceVars',
    'replaceVars evaluation-Start'
  )

  return ret
}

export default stylisPlugin

export const withProperties = properties => (context, content) => {
  performance.mark('withProperties evaluation-Start')

  const ret = stylisPlugin(context, content, properties)

  performance.measure(
    'measure withProperties',
    'withProperties evaluation-Start'
  )

  return ret
}
