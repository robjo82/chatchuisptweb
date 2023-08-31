import {useState} from 'react';

import {text_logo, close, menu} from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex pt-6 justify-between items-center navbar'>

        <img src= {text_logo} alt='Chat ChuisPT' className='z-[5] w-[256px} h-[128px] mr-10'/>

        <ul className=' z-[5] list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[26px] text-white ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'}`}>
              <a href={`#${nav.id}`}> {nav.title} </a>
            </li>
          ))}
        </ul>



        <div className='z-[5] sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ? close : menu}
              alt='menu'
              className='w-[32px] h-[32px] cursor-pointer object-contain'
              onClick={() => setToggle((prev) => !prev)}
            />
            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar` }>
              <ul className='list-none flex flex-col justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                  <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[20px] text-white ${index === navLinks.length-1 ? 'mb-0' : 'mb-4'}`}>
                    <a href={`#${nav.id}`}> {nav.title} </a>
                  </li>
                ))}
              </ul>
            </div>
        </div>
    </nav>

    
  )
}

export default Navbar