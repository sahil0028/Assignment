import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Upshowcard from './Upshowcard';
import './upshows.css';
import useUpcomming from "../../Hooks/useUpcomming";
import ClipLoader from "react-spinners/ClipLoader";

const Upcomshows = () => {
    // const [upShows,setUpshows] = useState([])
    const [pageNo,setPageNo] = useState(1)
    const {loading,error,upShows,hasMore} = useUpcomming(pageNo)

    const observer = useRef();

  const lastShowRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((enteries) => {
        if (enteries[0].isIntersecting && hasMore) {
            setPageNo(prev=>prev+1)
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <div className='upcomShows'>
        <div className="heading">
          <span className="title">Upcomming Shows ➡ </span><span className='allLink'>See all</span>
        </div>
        <div className="shows">
            {
                upShows?.map((show,id)=>{
                    if(upShows.length==id+1){
                        return(
                            <Upshowcard lastShowRef={lastShowRef} key={id} show={show} />
                        )
                    }
                    else{
                        return(
                            <Upshowcard key={id} show={show} />
                        )
                    }
                })
            }
        </div>
        <div className="loading">{loading && <ClipLoader loading={loading} color="black" />}</div>
        <div className="loading">{error && 'Error Occured'}</div>
    </div>
  )
}

export default Upcomshows