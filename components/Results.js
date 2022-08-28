import React from 'react'
import Thumbnail from './Thumbnail'
import  FlipMove  from "react-flip-move"
function Results({result}) {
  return (
    <FlipMove className='gap-3 px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
        {
            result.map((value , key)=>{
              return (
                <Thumbnail key={value.id} data={value}/>
            )})
        }
    </FlipMove>
  )
}

export default Results