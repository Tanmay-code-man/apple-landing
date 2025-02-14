import React from 'react'

const Button = ({text, hoverEffect=true, classNameAdd}) => {
  return (
    <>
    {(hoverEffect)?
    <div className='bg-transparent w-[90px] h-[40px] text-[#2997FF] flex items-center justify-center rounded-full text-lg hover:bg-[#2997FF] border-2 border-[#2997FF] hover:text-white transition-all cursor-pointer tracking-tighter'>{text}</div>
    :
    <div className={`bg-[#2997FF] w-[140px] h-[40px] flex items-center justify-center rounded-full text-lg cursor-pointer tracking-tighter ${classNameAdd}`}>{text}</div>
    }
    </>
  )
}

export default Button




