import axios from 'axios'
import {useEffect, useState} from 'react'

export default function useUpcomming(pageNo) {
    const [upShows,setUpShows] = useState([])
    const [loading,setLoading] = useState(true)
    const [hasMore,setHasMore] = useState(true)
    const [error ,setError] = useState(false)

    useEffect(()=>{
        setLoading(true)
        setError(false)
        axios.get(
            `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${pageNo}&type=upcoming`
        ).then((response) => {
            if(pageNo==response.data.totalPages){
                setHasMore(false)
            }
            setUpShows(prevShows=>{
                return [...prevShows,...response.data.events]
            });
            setLoading(false)
        }).catch((error) => {
            setError(true)
            console.error("Error occured in recommended shows", error);
        });
    },[pageNo])
  return {loading,error,upShows,hasMore}
}
