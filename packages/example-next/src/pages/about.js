/**
 * To showcase the usage of the dnb-ui-lib/src in Next.js
 *
 */

import React from 'react'

import Head from 'next/head'
import Page from '../layouts/Main'
import Nav from '../components/Nav'

import { Heading } from 'dnb-ui-lib/components'

const About = () => (
  <Page>
    <Head>
      <title>About</title>
    </Head>

    <Nav />

    <Heading reset={1} className="hero">
      About
    </Heading>

    <style jsx>{`
      /* More styles? */
    `}</style>
  </Page>
)

export default About
