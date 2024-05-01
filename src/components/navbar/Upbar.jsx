import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


const Upbar = () => {
    // useEffect(()=>{
    //     if(window.screen.width<=850){
    //         setLargeScreen(false)
    //         setSearchActive(false)
    //     }
    //     else{
    //         setLargeScreen(true)
    //         setSearchActive(true)
    //     }
    // },[])
  return (
    <div className='upBarContainer'>
        <div className={`left`}>BookUsNow</div>
        <div className="middle">
            <div className="categories">
                <FaBars />
                <span>Categories</span>
            </div>
            <div className="search-box">
                <input className="search expandright" id="searchright" type="search" name="q" placeholder="Search" />
                <label className="button searchbutton" htmlFor="searchright"><span className="mglass"><FaSearch /></span></label>
            </div>
        </div>
        <div className="right">
            <div className="favorites"> <FaHeart /><span>Favorites</span></div>
            <div className="signin"><button className='lg'>Sign In</button> <button className='smll'><FaUser /></button> </div>
        </div>
    </div>
  )
}

export default Upbar