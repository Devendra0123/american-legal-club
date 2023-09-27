import React from 'react'
import { navLinks } from '../../data/navlinks'

const Navbar = () => {
  return (
    <div className='bg-primaryBlue flex items-center justify-center text-white p-[15px]'>
{
  navLinks?.length > 0 && (
    <ul className='flex items-center gap-[40px]'>
      {navLinks.map((item,index)=>(
        <li key={index}>
          {item.name}
        </li>
      ))}
    </ul>
  )
}
    </div>
  )
}

export default Navbar