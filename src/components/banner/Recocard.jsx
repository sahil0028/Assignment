import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";

const Recocard = ({show}) => {
    console.log('in reco card')

    const [imgLink,setImgLink]= useState('')
    
    function extractImageId() {
        const pattern = /\/d\/(.*?)\/view/;
        const match = show.imgUrl.match(pattern);
        if (match) {
            console.log(match[1])
            setImgLink(match[1])
        //   return match[1];
        } else {
        //   return null;
        }
      }
      setTimeout(()=>{
        console.log('https://drive.google.com/uc? export=view&id='+imgLink)
      },[200])
    useEffect(()=>{
        extractImageId()
    },[])
    // console.log(show)
  return (
    <div className='recoCardContainer'>
        {/* <div className="cardImage"><img src={show.imgUrl} alt="" /></div> */}
        <img src={imgLink.length>0?'https://drive.google.com/thumbnail?id='+imgLink:''} alt="" />{console.log(show.imgUrl)}
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