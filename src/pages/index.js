import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>

    <h1> Hello my name is Martin Vargas-Vega.</h1>
    <h3>Bio</h3>
    <p> I was born and raised in Watsonville,CA and my goal is to be a fulltime software engineer.
    I am excited to be part of this event and code with other developers.
    </p>

    <h3> Coding Experience</h3>
    <ul>
      <li>React</li>
      <li>MEN Stack</li>
      <li>Ruby on Rails</li>
    </ul>

    <h3> UX/UI Tools</h3>
    <ul>
      <li>Adobe XD</li>
      <li>Sketch</li>
    </ul>

    <h3> Prior Hackathons</h3>
    <ul>
      <li>Oakland Startup Weekend August 2018</li>
      <li>#Stayhacking @ Netflix August 2018</li>
      <li>DREAMer Hack April 2018</li>
      <li>ScriptEd Developer Mentor</li>
    </ul>

    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
