/**
 * To showcase the usage of the dnb-ui-lib in Next.js
 *
 */

import React from 'react'
import styled from '@emotion/styled'

import Head from 'next/head'
import Page from '../layouts/Main'
import Nav from '../components/Nav'

import {
  Heading,
  Button,
  Input,
  Icon,
  Section
} from 'dnb-ui-lib/cjs/components/index.cjs'
import { P } from 'dnb-ui-lib/cjs/elements/index.cjs'
import { bell_medium as Bell } from 'dnb-ui-lib/cjs/icons/index.cjs'

const Home = () => {
  const [value, setValue] = React.useState(null)
  const handleClick = (e) => {
    console.log('handleClick', e)
  }
  const handleValueChange = (e) => {
    const value = e.value || (e.detail && e.detail.value) || ''
    console.log('handleValueChange', value)
    setValue(value)
  }

  return (
    <Page>
      <Head>
        <title>Home</title>
      </Head>

      <Nav />

      <Section className="dnb-spacing" spacing="true">
        <Heading reset={1}>React Components</Heading>
        <P>
          This is not for real world usage. But only to show the
          functionality of the dnb-ui-lib
        </P>
        <Input
          id="unique-input-id"
          label="Input:"
          placeholder="Type someting ..."
          value={value}
          on_change={handleValueChange}
          right
        />
        <Button
          text="Custom Element with icon"
          icon="chevron_right"
          on_click={handleClick}
        />
      </Section>
      <Section className="dnb-spacing" spacing="true">
        <Heading>Colored H2 (by using --color-mint-green)</Heading>
        <Title>Colored H2 (by using --color-summer-green)</Title>
        <P>
          Show me an Icon <Icon icon={Bell} size="medium" />
        </P>
      </Section>

      <style jsx>{`
        /* More styles? */
      `}</style>
    </Page>
  )
}

export default Home

// NB: Will be polyfilled
const Title = styled(Heading)`
  .dnb-core-style & {
    color: blue;
    color: var(--color-summer-green);
  }
`
