import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Recocard = (props) => {
    const {show,isLast} = props

    const [imgLink,setImgLink]= useState('')
    
    function extractImageId() {
        const pattern = /\/d\/(.*?)\/view/;
        const match = show.imgUrl.match(pattern);
        if (match) {
            // console.log(match[1])
            setImgLink(match[1])
        //   return match[1];
        } else {
        //   return null;
        }
      }
      setTimeout(()=>{
        // console.log('https://drive.google.com/uc? export=view&id='+imgLink)
      },[200])
    useEffect(()=>{
        extractImageId()
    },[])
    // console.log(show)
  return (
    <div ref={props.lastShowRef} className='recoCardContainer'>
        {/* <div className="cardImage"><img src={show.imgUrl} alt="" /></div> */}
        <LazyLoadImage className='lazyImg' src={imgLink.length>0?'https://drive.google.com/thumbnail?id='+imgLink:''}
          width={'100%'} height={'100%'}
          // transform={'scale(1.2)'}
          style={{transform:'scale(1.2)'}}
          effect='blur'
          alt="Image Alt"
        />
        {/* <img loading="lazy" src={imgLink.length>0?'https://drive.google.com/thumbnail?id='+imgLink:''} alt="" /> */}
        <div className="cardDetails">
            {/* <div className="eventName">a</div>
            <div className="eventDate">b</div>
            <div className="eventLoc">c</div>
            <div className="others">s</div> */}
            <div className="eventName">{show.eventName}</div>
            <div className="eventDate">{show.date}</div>
            <div className="eventLoc"><FaLocationDot /> {show.cityName}</div>
            <div className="others">{show.weather} I {show.distanceKm[0]+show.distanceKm[1]}Km</div>

        </div>
    </div>
  )
}

export default Recocard