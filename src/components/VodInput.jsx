import React, {useRef}from 'react'
import {useNavigate} from 'react-router-dom'


const VodInput = () => {
  const inputRef = useRef();
const nav = useNavigate();

const onEnter = (e) => {
  if(e.Key == "Enter"){
    onSearchClick();
  }
}

const onSearchClick = () => {
let input_val = inputRef.current.value;
nav(`/?s=${input_val}`);
}

  return (
    <div className=' h-[90px] bg-slate-700 flex justify-between'>
        <div className=' flex'>
        <img className='w-[90px] rounded-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReyrJW2AftmvobdI5NPGc3Q9f463ZNow5_ZA&usqp=CAU" alt="" />
        </div>
       <div className='flex'>
        <input onKeyDown={onEnter} placeholder='search...' ref={inputRef} type="text" className='input' />
        <button onClick={onSearchClick} className='bg-orange-400 btn'>search</button>
       </div>
    </div>
  )
}

export default VodInput