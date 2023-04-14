import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import Loading from "./Loading";
import {FaStarHalfAlt,FaStar} from 'react-icons/fa'

const MovieInfo = () => {
const [halfStar,setHalfStar] = useState(false)
  const inputRef = useRef();
  const nav = useNavigate();
  const params = useParams();
  const [item, setItem] = useState({});
const [loading,setLoading] = useState(true);
const [stars,setStars] = useState([])
  useEffect(() => {
    Api();
  }, []);

  const onSearchClick = () => {
    let input_val = inputRef.current.value;
    nav(`/?s=${input_val}`);
  };


const onEnter = (e) => {
  if(e.Key == "Enter"){
    onSearchClick();
  }
}

  const Api = async () => {
    const {data} = await axios.get(
      `https://www.omdbapi.com/?i=${params.id}&apikey=6ff60cd9`
    );
    console.log(data);
    setItem(data);
    setLoading(false)
    setStars(data.imdbRating)
    halfS()
  };
  let res = Number.parseFloat(stars).toFixed(0);
  //  let arr  = [...Array(Number(res))];
  console.log(item.imdbRating)
const halfS = () => {
  if((item.imdbRating)%1 >= 0.5 ){
    setHalfStar(true)
      console.log("half-star")
      }
}
   
    
  return (
    
    <div>
      {loading ? <Loading/>:
       <div className="bg-slate-700 h-[900px]   text-gray-100 max-xl:h-[890px] max-md:h-[890px] max-sm:h-[850px] max-2xl:h-[900px]   sm:block w-[100%] mx-auto ">
   
      <div className="  ">
        <div className="flex justify-between p-5  ">
          <div>
            {" "}
            <img
              className="w-16 md:w-32 lg:w-48"
              src="https://assets.stickpng.com/thumbs/6297647c7ec76b82fb21fce3.png"
              alt=""
            />
          </div>
          <div className="text-black flex w-[50%] relative left-[20
          %] md:left-[20%] xl:left-[30%] mt-1">
            {" "}
            <input
            onKeyDown={onEnter}
              ref={inputRef}
              className=" input-group-lg max-sm:w-[45%]  rounded-l-lg h-[40px] "
              type="text"
              placeholder="search. . ."
            />
            <button
              onClick={onSearchClick}
              className=" h-[40px] p-2 text-xl w-[40px]  right-10  bg-blue-500 rounded-r-lg"
            >
              <GoSearch />
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="xl:w-[40%] max-sm:w-[70%] md:w-[50%]   w-[40%] flex mx-auto">
          <img
            className="group-hover:w-full drop-shadow-2xl mb-10  h-[100%] rounded-lg mx-auto"
            src={item.Poster}
            alt=""
          />
        </div>
        <div className="p-7 xl:text-left md:text-left text-center text-xl align-text-top mx-auto m-7 xl:w-[50%] sm:w-[80%] bg-slate-700 ">
          <h2 className="text-4xl">{item.Title}</h2>
          <p className="text-1xl ">
            {" "}
            <span className="font-light">{item.Plot}</span>
          </p>
          <p className="text-1xl ">
            Runtime: <span className="font-light">{item.Runtime}</span>
          </p>

          <p className="text-1xl ">
            Genre:<span className="font-light"> {item.Genre}</span>{" "}
          </p>
          <p className="text-2xl ">
            year:<span className="font-light"> {item.Year}</span>
          </p>
    <div className="my-2 flex text-center max-sm:justify-center mx-auto">
    {[...Array(Number(res))].map((_,i)=>{
  return(
<div key={i}>
<FaStar color="yellow"/>
</div>
  )
 })}
 {halfStar ? <div>
 <FaStarHalfAlt color="yellow"/>
 </div> : ""}

 
      </div> 
          <button
            onClick={() => {
              nav(-1);
            }}
            className="m-3 mx-auto btn-primary p-2 rounded-lg w-[60px] text-xl  "
          >
            back
          </button>
        </div>
      </div>
    </div>
}
    </div>
   
  )
};

export default MovieInfo;
