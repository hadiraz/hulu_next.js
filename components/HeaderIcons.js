import React from 'react'


function HeaderIcons({title , Icon}) {
  return (
        <span className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">

            <Icon className="h-7 mb-1 group-hover:animate-bounce"/>
            
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </span>
  )
}

export default HeaderIcons