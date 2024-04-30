import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from 'axios'
import Recocard from './Recocard'

const Banner = () => {
    const [recoShows,setRecoShows] = useState({})
    useEffect(()=>{
        axios.get('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco&page=5').then((response)=>{
            setRecoShows(response.data)
            console.log(response.data)
        }).catch((error)=>{
            console.error('Error occured in recommended shows',error)
        })
    },[])
  return (
    <div className='bannerContainer'>
        <div className="backgroundImg">
            <div className="heading">Discover Exciting Events Happening Near You - Stay Tuned for Updates</div>
            <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsa aperiam aut porro id dolore! Maxime, magni quam! Necessitatibus veniam impedit accusantium magnam molestias perferendis.</div>
        </div>
        <div className="recommendation">
            <div className="heading">Recommended Shows ➡</div>
            <div className="shows">
                {
                    recoShows?.events?.map((show,id)=>{
                        return(
                            <Recocard key={id} show={show} />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Banner