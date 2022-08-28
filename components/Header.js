import Image from 'next/image'
import React from 'react'
import huluIcon from "public/icons/hulu-Green-digital.png" ;
import HeaderIcons from './HeaderIcons';
import {
    BadgeCheckIcon,
    CollectionIcon ,
    HomeIcon ,
    LightningBoltIcon ,
    SearchIcon ,
    UserIcon
} from "@heroicons/react/outline"
import Nav from './Nav';

function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly px-2 pt-4 max-w-2xl">
            <HeaderIcons title="HOME" Icon={HomeIcon}/>
            <HeaderIcons title="COLLECTION" Icon={CollectionIcon}/>
            <HeaderIcons title="BADGE" Icon={BadgeCheckIcon}/>
            <HeaderIcons title="LIGHT" Icon={LightningBoltIcon}/>
            <HeaderIcons title="SEARCH" Icon={SearchIcon}/>
            <HeaderIcons title="USER" Icon={UserIcon}/>
        </div>
        <Image className='object-contain' src={huluIcon} width={100} height={28} alt="hulu-icon" />
    </header>
  )
}

export default Header