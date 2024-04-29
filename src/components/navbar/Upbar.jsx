import React, { useEffect, useState } from 'react'
import './navbar.css'
import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { SiTrueup } from 'react-icons/si';


const Upbar = () => {
    const [searchActive,setSearchActive] = useState(true)
    const [largeScreen,setLargeScreen] = useState(true)

    // useEffect(()=>{
    //     console.log(window.screen.width)
    // },[window.screen.innerwidth])
    // window.onresize = resize;

    function resize()
    {
        console.log(window.screen.width)
        if(window.screen.width<=850){
            setLargeScreen(false)
            // setSearchActive(false)
        }
        else{
            setLargeScreen(true)
        }

    }
  return (
    <div className='upBarContainer'>
        <div className="left">BookUsNow</div>
        <div className="middle">
            <div className="categories">
                <FaBars />
                <span>Categories</span>
            </div>
            <div className="search-box">
                <input type="text" className={`input-search search${searchActive}`} placeholder="Type to Search..." />
                <button onClick={()=>{
                    setSearchActive(!searchActive)}} className={`btn-search search${searchActive} lg-${largeScreen}` }>
                    {/* <CiSearch /> */}
                    <FaSearch />
                </button>
            </div>
        </div>
        <div className="right">
            <div className="favorites"> <FaHeart /><span>Favorites</span></div>
            <div className="signin"><button>Sign In</button></div>
        </div>
    </div>
  )
}

export default Upbar