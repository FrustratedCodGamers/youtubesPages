import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo_icon from '../image/logo.jpg'
import search_icon_dark from '../image/search-b.png'
import search_icon_light from '../image/search-w.png'
import toogle_light from '../image/night.png'
import toogle_dark from '../image/day.png'
import './index.css'

const NavBar = ({theme, setTheme, setSearchQuery}) => {

    const toogle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light')
    }

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    }
   
        return (
            //Navbar container//
            <div className='navbar'>
              <a href='#Songs'> <img src={logo_icon} alt='logo' className='logo'/></a>
                <ul>
                    <li><a href='#Shorts'>Shorts</a></li>
                    <li><a href='#Gaming'>Gaming</a></li>
                    <li><a href='#Playlist'>PlayList</a></li>
                    <li><a href='#About'>About</a></li>
                </ul>

                
                <div className='search-box'>
                    <input type='search' placeholder='Search' onChange={handleSearchChange}/>
                    <img src={search_icon_light} alt='search' className='img'/>
                </div>
                <img onClick={()=>{toogle_mode()}} src={theme == 'light' ? toogle_light : toogle_dark} alt='theme' className='toggle-icon'/>
            
            <div id='mobile'>
                
            </div>

            </div>
        )
    }

export default NavBar