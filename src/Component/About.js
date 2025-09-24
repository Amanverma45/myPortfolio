import React from 'react'
import './Style/About.css'

const About = () => {
  return (
    <div className='about'>
      <div className='dp1'>
        <img src='./Images/my.jpg' alt="verma" />
      </div>
      <div className='para'>
      <h2>About Me</h2>
        <p>
          Hello, My name is <b>Aman Verma</b>, currently living in Indore (India).
          I have completed my Bachelor's degree in B.Tech (Computer Science) at 
          <b> Mathura Devi Institute of Technology and Management, Indore </b>, 
          which is affiliated with RGPV University, Bhopal (Madhya Pradesh).  
          I have gained valuable skills in <b> HTML | CSS | JavaScript | MongoDB |  
          Express.js | React | Node.js </b>.
        </p>
      </div>
    </div>
  )
}

export default About
