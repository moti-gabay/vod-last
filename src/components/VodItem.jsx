import React from 'react'
import { useNavigate } from 'react-router-dom';
 const VodItem = (props) => {
  const nav = useNavigate()
    let item = props.item;

    const onInfoClick = () => {
nav(`/info/${item.imdbID}`);
    }
    
  return (
    <div className='hover:scale-95 transition duration-300 ease-in  w-[40%] sm:w-[40%] xl:w-[30%] md:w-[40%] text-center mx-auto  2xl:w-[25%] flex justify-evenly  '>
        <img onClick={()=>onInfoClick()}  className='m-3   rounded-lg' src={item.Poster} alt="" />
    </div>
  )
}
 
export default VodItem