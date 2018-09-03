import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>

    <h1> Hello my name is Martin Vargas-Vega.</h1>
    <h3>Bio</h3>
    <p> I was born and raised in Watsonville,CA and my goal is to be a fulltime software engineer.
    I am excited to be part of this event and code with other developers.
    </p>

    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
