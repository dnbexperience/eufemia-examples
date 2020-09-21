/**
 * To showcase the usage of the dnb-ui-lib/cjs in React SSR
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { PrerenderedComponent } from 'react-prerendered-component'

import { Button, Input, Icon, Section } from 'dnb-ui-lib/cjs/components'
import { H1, H2, P } from 'dnb-ui-lib/cjs/elements'
import { bell_medium as Bell } from 'dnb-ui-lib/cjs/icons'

export default class Component extends PureComponent {
  static propTypes = {
    count: PropTypes.number
  }
  static defaultProps = {
    count: 1
  }
  state = { inputValue: null, count: 0, restored: false }
  constructor(props) {
    super(props)
    this.state.count = props.count
  }
  handleClick = e => {
    console.log('handleClick', e)
  }
  handleValueChange = e => {
    const inputValue = e.value || (e.detail && e.detail.value) || ''
    console.log('handleValueChange', inputValue)
    this.setState({ inputValue })
  }
  restore = (element, state) => {
    this.setState({ ...state, restored: true })
  }
  render() {
    const { inputValue } = this.state
    return (
      <PrerenderedComponent
        store={this.props}
        restore={this.restore}
        live={this.state.restored}
      >
        <div>
          <Section className="dnb-spacing" spacing="true">
            <H1>React Components {this.state.count}</H1>
            <P>
              This is not for real world usage. But only to show the
              functionality of the dnb-ui-lib/cjs
            </P>
            <Input
              label="Input:"
              placeholder="Type someting ..."
              value={inputValue}
              on_change={this.handleValueChange}
              right
            />
            <Button
              text="Custom Element with icon"
              icon="chevron_right"
              on_click={this.handleClick}
            />
          </Section>
          <Section className="dnb-spacing" spacing="true">
            <H2>H2</H2>
            <P>
              Show me an Icon <Icon icon={Bell} size="medium" />
            </P>
          </Section>
        </div>
      </PrerenderedComponent>
    )
  }
}
