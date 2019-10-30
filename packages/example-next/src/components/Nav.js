/**
 * To showcase the usage of the dnb-ui-lib/src in Next.js
 *
 */

import React from 'react'
import Link from 'next/link'
import { Anchor } from 'dnb-ui-lib/elements'

const links = [
  { href: 'https://eufemia.dnb.no/uilib/', label: 'Docs' },
  { href: 'https://github.com/dnbexperience/eufemia/', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <Anchor href="/">Home</Anchor>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <Anchor href="/about">About</Anchor>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Anchor href={href}>{label}</Anchor>
        </li>
      ))}
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
      }
      ul {
        display: flex;
      }
      ul li {
        margin-right: 2rem;
      }
    `}</style>
  </nav>
)

export default Nav
