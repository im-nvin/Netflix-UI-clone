import React from 'react'
import './navbar.scss'
import Netflix from '../../images/netflix.png'
import Naveen from '../../images/naveen.png'
import { useState } from 'react'

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
    const [isScrolled,setIsScrolled]=useState(false)
    window.onscroll=()=>{
        setIsScrolled(window.scrollY===0 ?false :true)
        return ()=>window.onscroll=null
    }
    return (
        <div className={isScrolled ? 'navbar scrolled':'navbar'}>
            <div className="container">

                <div className='left'>
                    <img src={Netflix} alt="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>Popular</span>
                    <span>MyLists</span>
                </div>

                <div className="right">
                    <SearchIcon className='icon' />
                    <span>kids</span>
                    <NotificationsIcon className='icon' />
                    <img src={Naveen} alt="profileImg"/>

                    <div className="profile">
                        <SettingsIcon className='icon' />
                        <div className="option">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar