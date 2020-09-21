import React from 'react'
import ReactDOM from 'react-dom/server'
import { PrerenderedControler } from 'react-prerendered-component'
import express from 'express'

import Component from '../Component'

const app = express()

let counter = 10

app.get('/*', (req, res) => {
  counter++

  const markup = ReactDOM.renderToString(
    <PrerenderedControler>
      <Component count={counter} />
    </PrerenderedControler>
  )

  res.send(JSON.stringify({ markup }))
})

const port = process.env.PORT || 1111
app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
