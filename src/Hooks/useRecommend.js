import axios from 'axios'
import {useEffect, useState} from 'react'

export default function useRecommend(pageNo) {
    console.log('use reco')
    const [recoShows,setRecoShows] = useState([])
    const [loading,setLoading] = useState(true)
    const [error ,setError] = useState(false)

    useEffect(()=>{
        setLoading(true)
        setError(false)
        axios.get(
            "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco&page=5"
        ).then((response) => {
            setRecoShows(prevShows=>{
                return [...prevShows,...response.data.events]
            });
            setLoading(false)
            console.log(response.data);
        }).catch((error) => {
            setError(true)
            console.error("Error occured in recommended shows", error);
        });
    },[pageNo])
  return {loading,error,recoShows}
}
