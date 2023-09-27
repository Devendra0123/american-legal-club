import React from 'react'

const TitleText = ({text1, text2, lineStyle}) => {
  return (
    <div className='w-max'>
         <h1 className="text-primaryBlue text-3xl font-[800]">
          <span className="text-primaryRed">{text1}</span> {text2}
        </h1>
        <div className={`${lineStyle} h-[2px] rounded-[25px] bg-primaryRed`} />
    </div>
  )
}

export default TitleText