import React from 'react'
import IGicon from "@material-ui/icons/Instagram"
import FBicon from "@material-ui/icons/Facebook"
import GithubIcon from "@material-ui/icons/GitHub";
import LKicon from "@material-ui/icons/LinkedIn"
import '../Styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialmedia'>
            <a href='https://www.facebook.com/profile.php?id=100000392690267'>
            <span className='fb'><FBicon /></span>
            </a>
            <a href='https://www.instagram.com/podojeyi47/'>
              <span className='ig'><IGicon/></span>
            </a>
            <a href='https://github.com/podo47'>
              <span className='git'><GithubIcon /></span>
            </a>
            <a href='https://www.linkedin.com/in/jamie-li-8b4024297'>
              <span className='lk'><LKicon /></span>
            </a>
        </div>
        <div className='copyright'> &copy; 2023 Jamie Li. All rights reserved.</div>
    </div>
  )
}

export default Footer