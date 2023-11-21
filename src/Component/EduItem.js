import React from 'react'

function EduItem({year, img, school, title} ) {
  return (
    <div className='eduItem'>
        <div style={{backgroundImage: `url(${img})`}}></div>
        <h1>{year}</h1>
        <hr/>
        <h3>{school}</h3>
        <p>{title}</p>
    </div>
  )
}

export default EduItem