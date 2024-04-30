import React, { useCallback, useEffect, useRef, useState } from "react";
import "./banner.css";
import axios from "axios";
import Recocard from "./Recocard";
import useRecommend from "../../Hooks/useRecommend";

const Banner = () => {
  // const [recoShows, setRecoShows] = useState({});
  // const [loading, setLoading] = useState(false);

  const [pageNo,setPageNo] = useState(1)
  const {recoShows,loading,error} = useRecommend(pageNo)

  const observer = useRef();

  const lastShowRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((enteries) => {
        if (enteries[0].isIntersecting) {
            setPageNo(prev=>prev+1)
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );
  useEffect(()=>{
    console.log('in reco shows')
    console.log(recoShows)

  },[recoShows])

  // const fetchData=()=>{
  //   console.log(recoShows)
  //   console.log(recoShows.events)
  //   }
  return (
    <div className="bannerContainer">
      <div className="backgroundImg">
        <div className="heading">
          Discover Exciting Events Happening Near You - Stay Tuned for Updates
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsa
          aperiam aut porro id dolore! Maxime, magni quam! Necessitatibus veniam
          impedit accusantium magnam molestias perferendis.
        </div>
      </div>
      <div className="recommendation">
        <div className="heading">Recommended Shows ➡</div>
        <div className="shows">
          {recoShows?.map((show, id) => {
            if (recoShows.length === id + 1) {
              return (
                <Recocard
                  lastShowRef={lastShowRef}
                  isLast={true}
                  key={id}
                  show={show}
                />
              );
            } else {
              return <Recocard isLast={false} key={id} show={show} />;
            }
          })
        }
        </div>
        {loading?'loading':''}
      </div>
    </div>
  );
};

export default Banner;
