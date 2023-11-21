//輸入rfce可以自動生成跟檔名一樣的快捷函式
import React, {useState} from 'react'
import Logo from '../Images/design_name.png'
import {Link} from 'react-router-dom';
import '../Styles/Navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)
    const toggleNavbar = () =>{
        setOpenLinks(!openLinks) //轉換狀態
    }

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src={Logo}/>
            <div className='hiddenLinks'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/edu'>Education</Link>
            <Link to='/skill'>Skill</Link>
            <Link to='/contact'>Contact</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/edu'>Education</Link>
            <Link to='/skill'>Skill</Link>
            <Link to='/contact'>Contact</Link>
            <button onClick={toggleNavbar}><ReorderIcon/></button>
            
        </div>
    </div>
  )
}

export default Navbar