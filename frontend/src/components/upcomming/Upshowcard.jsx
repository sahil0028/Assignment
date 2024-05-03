import React, { useEffect, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import moment from 'moment';

const Upshowcard = ({show,lastShowRef}) => {

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
    <div ref={lastShowRef} className='upcomCardContainer'>
      <div className="imgContainer">
        <LazyLoadImage className='lazyImg' src={imgLink.length>0?'https://drive.google.com/thumbnail?id='+imgLink:''}
          width={'100%'} height={'100%'}
          effect='blur'
          alt="Image Alt"
        />
        <div className="eventDate">{getDate(show.date)}</div>
      </div>
      <div className="details">
        <div className="eventName">{show.eventName}</div>
        <div className="eventLoc"><FaLocationDot />{show.cityName}</div>
        <div className="others">{show.weather}<span>|</span>{show.distanceKm[0]+show.distanceKm[1]+'km'}</div>
      </div>
    </div>
  )
}

export default Upshowcard