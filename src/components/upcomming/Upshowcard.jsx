import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Upshowcard = ({show,lastShowRef}) => {

    const [imgLink,setImgLink]= useState('')
    // console.log('in up card-',show)
    
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
    useEffect(()=>{
        extractImageId()
    },[])
  return (
    <div ref={lastShowRef} className='upcomCardContainer'>
      <div className="imgContainer">
        <LazyLoadImage className='lazyImg' src={imgLink.length>0?'https://drive.google.com/thumbnail?id='+imgLink:''}
          width={'100%'} height={'100%'}
          effect='blur'
          alt="Image Alt"
        />
        <div className="eventDate">{show.date}</div>
      </div>
      <div className="details">
        <div className="eventName">{show.eventName}</div>
        <div className="eventLoc">{show.cityName}</div>
        <div className="others">{show.weather}I{show.distanceKm[0]+show.distanceKm[1]+'km'}</div>
      </div>
    </div>
  )
}

export default Upshowcard