import React from 'react'
import aboutImg from '../Images/wood.jpeg'
import '../Styles/About.css'

function About() {
  return (
    <div className='about' style={{backgroundImage: `url(${aboutImg})`}}>
        <div className='aboutBot'>
          <h1>About Me</h1>
          <p>
          “Hello, I am Alexandra Hill, and I will be completing my bachelor’s degree in finance from Western Michigan University in August. 
          I have worked on a wide variety of projects that have allowed me to put what I’ve learned in the classroom into use in a practical sense. 
          Last year, I was part of a new course where the students managed $500,000 for the Western Annual Fund and it was really exciting to see the portfolio grow.  
          I pride myself on being detail-oriented, analytical, and driven.  
          I understand that you are searching for a new investment advisor and I believe these qualities would benefit your company’s goal to increase your client base while continuing to provide sound investment advice.”
          </p>
        </div>
    </div>
  )
}

export default About