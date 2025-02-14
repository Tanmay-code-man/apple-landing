import React from 'react'
import {appleImg, searchImg ,bagImg} from '../../utils';
import { navLists } from '../../Constants';
import './Navbar.css'
function Navbar() {
  return (
    <header id='header' className='w-full sm:px-10 px-5 flex justify-between items-center bg-black top-0'>
        <nav className='flex w-full screen-max-width'>
            <img src={appleImg} alt="appleImg" width={14} height={18} className='cursor-pointer'></img>
            <div className="flex flex-1 justify-center max-sm:hidden items-center">
                {navLists.map((nav) => (
                <div key={nav} className="text-sm cursor-pointer text-[#86868b] hover:text-white transition-all navItems">
                    {nav}
                </div>
                ))}
        </div>
            <div className='flex items-baseline max-sm:justify-end max-sm:flex-1 gap-7'>
                <img src={searchImg} alt="searchImg" width={18} height={18}></img>
                <img src={bagImg} alt="bagImg" width={18} height={18}></img>
            </div>
        </nav>
    </header>
  )
}

export default Navbar