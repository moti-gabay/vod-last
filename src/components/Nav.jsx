import React,{ useRef } from 'react';
import { GoSearch } from "react-icons/go";
import {useNavigate} from 'react-router-dom'

const Nav = () => {

    const inputRef = useRef();
  const nav = useNavigate();

  const onEnter = (e) => {
    if(e.key == "Enter"){
      let input_val = inputRef.current.value;
  nav(`/?s=${input_val}`);
    }
  }
  const onSearchClick = () => {
  let input_val = inputRef.current.value;
  nav(`/?s=${input_val}`);
  }
  return (
    <div>
    <div className="flex  items-center absolute   z-10 ">
      
      <div className='ml-[10%]'>
        {" "}
        <img
          className="  w-16 md:w-32 lg:w-48"
          src="https://assets.stickpng.com/thumbs/6297647c7ec76b82fb21fce3.png"
          alt=""
        />
      </div>
      <div  className="flex relative left-[50%] ">
        {" "}
        <input
        onKeyDown={onEnter}
         ref={inputRef}
          className=" input-group-lg  rounded-l-lg h-[40px]"
          type="text"
          placeholder="search. . ."
        />
        <button onClick={onSearchClick}  className=" h-[40px] p-2 text-xl w-[40px] h bg-blue-500 rounded-r-lg">
          <GoSearch />
        </button>
      </div>
    </div>
    
  </div>
  );
};

export default Nav;
