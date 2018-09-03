import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h1> Hello my name is Martin Vargas-Vega.</h1>
    <h3>Bio</h3>
    <p> I was born and raised in Watsonville,CA and my goal is to be a fulltime software engineer.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
