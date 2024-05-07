import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div id="aboutPage">About <hr />
    <div> Marcos es la persona mas atractiva del mundo </div>
    <br />
    <div> Asier es un genio del mal muy perspicaz</div>
    <br />
    <div>Alfonso es un mono pirata pata palo</div>
    <Link to={"/"}><button>Home</button></Link>
    </div>
  )
}

export default About