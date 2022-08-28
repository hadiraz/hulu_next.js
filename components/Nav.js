import { useRouter } from 'next/router'
import React from 'react'
import request from 'utils/request'

function Nav() {
    const router = useRouter() ;
  return (
    <nav className='flex pt-3 relative'>
        <div className="flex height-auto px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                { 
                    Object.entries(request).map(([key , value])=>(
                        <h1 key={key} className="cursor-pointer ml-2 transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 last:pr-24" onClick={()=>router.push(`/?genre=${key}`)}>
                            {
                                value.title
                            }
                        </h1>
                    ))
                }
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12"></div>
    </nav>
  )
}

export default Nav