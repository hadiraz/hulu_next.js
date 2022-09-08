import Image from 'next/image'
import React, { forwardRef } from 'react'
import { ThumbUpIcon } from "@heroicons/react/outline"

const Thumbnail = forwardRef(({ data } , ref) => {
    const image_base_url = "https://image.tmdb.org/t/p/original" ;
return (
    <div ref={ref} className="group transition duration-200 transform sm:hover:scale-105 hover:z-50">
        <Image
        layout='responsive'
        width={1920}
        height={1080}
        src={`${image_base_url}${data.backdrop_path||data.poster_path}`||`${image_base_url}${data.poster_path}`}
        alt={data.title || data.original_name}
        />
      <div className=' p-2'>
        <h1 className='text-2xl text-white mt-2 transition-all duration-100 ease-in-out group-hover:font-bold'>{data.title || data.original_name}</h1>
        <h1 className='truncate max-w-md'>{data.overview}</h1>
        <p className='flex items-center truncate max-w-md opacity-0 group-hover:opacity-100'>
          {data.media_type && `${data.media_type}`}{" "}
          {data.release_date || data.first_air_date}{" "}
          <ThumbUpIcon className='h-5 mx-2'/>{data.vote_count}
        </p>
      </div>
    </div>
  )
})
Thumbnail.displayName = "Thumbnail";
export default Thumbnail