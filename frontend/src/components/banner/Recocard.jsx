import moment from 'moment';
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
            setImgLink(match[1])
        } else {
        //   return null;
        }
      }
    useEffect(()=>{
        extractImageId()
    },[])
    const getDate=(date)=>{
     return moment(date).format("MMMM DD, YYYY")
    }

  return (
    <div ref={props.lastShowRef} className='recoCardContainer'>
        <LazyLoadImage className='lazyImg' src={imgLink.length>0?'https://drive.google.com/thumbnail?id='+imgLink:''}
          width={'100%'} height={'100%'}
          style={{transform:'scale(1.2)'}}
          effect='blur'
          alt="Image Alt"
          referrerPolicy='no-referrer"'
        />
        <div className="cardDetails">
            <div className="eventName">{show.eventName}</div>
            <div className="eventDate">{getDate(show.date)}</div>
            <div className="eventLoc"><FaLocationDot /> {show.cityName}</div>
            <div className="others">{show.weather}<span>|</span>{show.distanceKm[0]+show.distanceKm[1]}Km</div>

        </div>
    </div>
  )
}

export default Recocard