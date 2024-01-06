import React from 'react'
import { Link } from 'react-scroll';


function NavItems() {
 
  return (
    <>
      <div className='hidden lg:block'>
      <ul className='flex'>
            <Link to='slider' spy={true} smooth={true} duration={500} offset={-70}>
              <li className='cursor-pointer hover:border-[1px] hover:border-white px-3 py-1 rounded-md'>Home</li>
            </Link>
            <Link to='best-seller' spy={true} smooth={true} duration={500} offset={-70}>
              <li className='cursor-pointer hover:border-[1px] hover:border-white px-3 py-1 rounded-md'>Best Sellers</li>
            </Link>
            <Link to='new-arrivals' spy={true} smooth={true} duration={500} offset={-70}>
              <li className='cursor-pointer hover:border-[1px] hover:border-white px-3 py-1 rounded-md'>New Arrivals</li>
            </Link>
            <Link to='categories' spy={true} smooth={true} duration={500} offset={-70}>
              <li className='cursor-pointer hover:border-[1px] hover:border-white px-3 py-1 rounded-md'>Categories</li>
            </Link>
            <Link to='about' spy={true} smooth={true} duration={500} offset={-70}>
              <li className='cursor-pointer hover:border-[1px] hover:border-white px-3 py-1 rounded-md'>About</li>
            </Link>
            <Link to='contact-us' spy={true} smooth={true} duration={500} offset={-70}>
              <li className='cursor-pointer hover:border-[1px] hover:border-white px-3 py-1 rounded-md'>Contact</li>
            </Link>
          </ul>
      </div>
      
    </>
  )
}

export default NavItems
