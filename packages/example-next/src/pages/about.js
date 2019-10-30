/**
 * To showcase the usage of the dnb-ui-lib/src in Next.js
 *
 */

import React from 'react'

import Head from 'next/head'
import Page from '../layouts/Main'
import Nav from '../components/Nav'

const About = () => (
  <Page>
    <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">About</div>

    <style jsx>{`
      /* More styles? */
    `}</style>
  </Page>
)

export default About
