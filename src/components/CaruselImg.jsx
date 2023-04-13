import React from 'react'
import { Carousel } from 'flowbite-react';
const CaruselImg = () => {
  return (
    <div className=" bg-cover bg-no-repeat h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel slideInterval={5000}>
      <img className=' bg-cover bg-no-repeat object-contain '
        src="https://media.istockphoto.com/id/1078740886/photo/television-streaming-video-media-tv-on-demand.jpg?s=612x612&w=is&k=20&c=eCKYr-kc7w7Fv7cqAWQZZvFOFmXs8X-LJgVQpMMK4Q4="
        alt="..."
      />
      <img  className=' bg-cover bg-no-repeat object-contain '
        src="https://cdn.pixabay.com/photo/2016/09/16/01/18/film-1673109__340.jpg"
        alt="..."
      />
      <img  className=' bg-cover bg-no-repeat object-contain '
        src="https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1600"
        alt="..."
      />
    </Carousel>
  </div>
  )
}

export default CaruselImg