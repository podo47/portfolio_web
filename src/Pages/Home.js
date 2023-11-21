import React from 'react'
import { Link } from 'react-router-dom'
import Banner from "../Images/banner.jpg"
import Photo from '../Images/photo.jpg'
import "../Styles/Home.css"
import ContactPageIcon from '@mui/icons-material/ContactPage';

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${Banner})`}}>
        <img src={Photo}/>
        <div className='header'>
          <h1>Hi !</h1>
          <p>My Name Is Jamie</p>
          <hr/>
          <Link to="/contact">
            <button> 
              <div className='contact'>
                <ContactPageIcon className='contactIcon'/>
                <div className='contactWord'>Contact Me</div>
              </div>
            </button>
          </Link>
        </div>
        
    </div>
  )
}

export default Home