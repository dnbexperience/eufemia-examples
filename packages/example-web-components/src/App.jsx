/**
 * To showcase the usage of the dnb-ui-lib with Web Components
 *
 */

import React, { PureComponent } from 'react'

// different mothodes of importing the dnb-ui-lib
// import dnb from 'dnb-ui-lib/components/web-components'
import dnb, {
  Button,
  Input,
  Icon
} from 'dnb-ui-lib/components/web-components'
// import Button from 'dnb-ui-lib/components/button/web-component'
// import Input from 'dnb-ui-lib/components/input/web-component'
// import Icon from 'dnb-ui-lib/components/icon/web-component'
// import Button from 'dnb-ui-lib/components/Button'
// import Input from 'dnb-ui-lib/components/Input'
// import Icon from 'dnb-ui-lib/components/Icon'
// import { H1, H2, P } from 'dnb-ui-lib/elements'
import H1 from 'dnb-ui-lib/elements/H1'
import H2 from 'dnb-ui-lib/elements/H2'
import P from 'dnb-ui-lib/elements/P'
// import { bell_medium as Bell } from 'dnb-ui-lib/icons'
import Bell from 'dnb-ui-lib/icons/bell_medium'

// to enable Web Components, cause we use both react and Web Components in here

export default class App extends PureComponent {
  state = { showWebComponents: false, inputValue: null }
  constructor(props) {
    super(props)
    this._buttonRef = React.createRef()
    this._inputRef = React.createRef()
  }
  handleClick = e => {
    console.log('handleClick', e)
  }
  handleValueChange = e => {
    const inputValue = e.value || (e.detail && e.detail.value) || ''
    console.log('handleValueChange', inputValue)
    this.setState({ inputValue })
  }
  handleWebComponentsVisibility() {
    this.setState({ showWebComponents: true })
    dnb.enableWebComponents()

    // there are different ways to enable usage of WebComponents
    // Button.enableWebComponents()
    // Icon.enableWebComponents()

    // bind the imperative (not declarative) event handlers
    this._inputRef.current.addEvent('on_change', this.handleValueChange)
    this._buttonRef.current.addEvent('on_click', this.handleClick)
  }
  componentDidMount() {
    setTimeout(this.handleWebComponentsVisibility.bind(this), 1e3)
  }
  render() {
    const { inputValue, showWebComponents } = this.state
    return (
      <>
        <div className="dnb-core-style dnb-spacing dnb-section dnb-section--spacing">
          <H1>React Components</H1>
          <Input
            placeholder="Type someting ..."
            value={inputValue}
            on_change={this.handleValueChange}
          />
          <Button
            text="Custom Element with icon"
            icon="chevron_right"
            on_click={this.handleClick}
          />
          <Icon icon={Bell} size="medium" />
        </div>
        {showWebComponents && (
          <div className="dnb-core-style dnb-spacing dnb-section dnb-section--spacing">
            <H2>Web Component in React</H2>
            <P>
              This is not for real world usage. But only to show the
              functionality of the dnb-ui-lib
            </P>
            <dnb-input
              ref={this._inputRef}
              placeholder="Type someting ..."
              value={inputValue}
              on_change={() => {
                /* don't works, we can not send in a function to a Web Component */
              }}
            />
            <dnb-button
              ref={this._buttonRef}
              text="Custom Element with icon"
              icon="chevron_right"
              on_click={() => {
                /* don't works, we can not send in a function to a Web Component */
              }}
            />
            <dnb-icon-primary icon="bell" size="medium" />
          </div>
        )}
      </>
    )
  }
}
