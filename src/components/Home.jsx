import React, { useEffect, useState } from 'react'
import {useParams, useSearchParams} from 'react-router-dom'
import VodList from './VodList'
import axios from 'axios'
import Header from './Header'

const Home = () => {
    const [querys] = useSearchParams();
    const [ar,setAr] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        let searchQ = querys.get("s") || "bank";
        doApi(searchQ);
     
            },[querys]);
          
    const doApi = async(_searchQ) => {
        const url = `https://www.omdbapi.com/?s=${_searchQ}&apikey=6ff60cd9`;
    const {data} = await axios.get(url);
    setAr(data.Search)
    setLoading(false)
    }
    
  return (
    <div>
      <Header/>
        <VodList vod_ar={ar} loading={loading}/>
    </div>
  )
}
export default Home
