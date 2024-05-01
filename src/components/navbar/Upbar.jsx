import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


const Upbar = () => {
    const [searchActive,setSearchActive] = useState(true)
    const [largeScreen,setLargeScreen] = useState(true)

    window.onresize = resize;

    function resize()
    {
        console.log(window.screen.width)
        if(window.screen.width<=850){
            setLargeScreen(false)
            // setSearchActive(false)
            setSearchActive(false)
        }
        else{
            setLargeScreen(true)
            setSearchActive(true)
        }
    }
    const handeBlur=()=>{
        if(window.screen.width<=850 && searchActive){
            inputRef.current.blur()
            setSearchActive(false)
        }
    }
    
    const inputRef = useRef(null);
    const handleClick = () => {
        setSearchActive(prev=>!prev)
        // setTimeout(() => {
        // },1000);
        inputRef.current.focus()
    };
    // const handleFocus = () => {
    //     if(window.screen.width<=850){
    //         inputRef.current.focus();
    //     }
    // };


    useEffect(()=>{
        if(window.screen.width<=850){
            setLargeScreen(false)
            setSearchActive(false)
        }
        else{
            setLargeScreen(true)
            setSearchActive(true)
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
                <input class="search expandright" id="searchright" type="search" name="q" placeholder="Search" />
                <label class="button searchbutton" for="searchright"><span class="mglass"><FaSearch /></span></label>
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

// const inputRef = useRef(null);
// const handleClick = () => {
//     // requestAnimationFrame(() => {
//         //     inputRef.current.focus();
//         // });
//     setTimeout(() => {
//         inputRef.current.focus()
//     },200);
//     console.log(searchActive)
//     setSearchActive(true)
//     // inputRef.current.focus();
// };
// <input autoFocus ref={inputRef} onBlur={handeBlur} type="text" id='input-search' className={`input-search search${searchActive}`} placeholder="Type to Search..." />
// <button onMouseUp={handleClick}  className={`btn-search search${searchActive} lg-${largeScreen}` }>
//     <FaSearch />
// </button>