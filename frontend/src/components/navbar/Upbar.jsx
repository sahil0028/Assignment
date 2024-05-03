import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


const Upbar = () => {
    const [login,setlogin] = useState(false)
    const handleLogout=()=>{
        sessionStorage.clear()
        setlogin(false)
    }
    useEffect(()=>{
        if(sessionStorage.getItem('token')){
            setlogin(true)
        }
        else{
            setlogin(false)
        }
    },[])
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
            <div className="signin"> {login?<button className='lg' onClick={handleLogout}>Log Out</button>:<button className='lg'>Sign In</button>}<button className='smll'><FaUser /></button> </div>
        </div>
    </div>
  )
}

export default Upbar