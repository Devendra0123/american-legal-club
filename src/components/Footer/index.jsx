import React from 'react'
import TopSection from './TopSection'
import LowerSection from './LowerSection'

const Footer = () => {
  return (
    <div className='w-full flex flex-col items-center gap-[30px] bg-primaryBlue pt-[120px] pb-[50px] mt-[-40px]'>
        <TopSection />
        <div className='w-[90%] h-[2px] rounded-[25px] bg-white ' />
        <LowerSection />
    </div>
  )
}

export default Footer