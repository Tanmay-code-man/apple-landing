import React from 'react'
import Button from '../Button/Button';
const TwoBtnHalfCard = ({bgImage, title, caption,textColor, btnText, hoverBtnText,atEnd}) => {
  return (
    <>
        <div className='w-[47%] h-[100vh] bg-cover bg-top' style={{ backgroundImage: `url('${bgImage}')              `,marginBottom:'10px'}}>
            <div className='flex flex-col items-center gap-y-2' style={{paddingTop:'36px',marginBottom:'15px'}}>
                <h1 className={`text-5xl font-[500] text-${textColor} tracking-tighter`}>{title}</h1>
                <h2 className={`text-xl font-[500] text-${textColor} tracking-tighter`}>{caption}</h2>
            </div>
            <div className={`w-full flex justify-center h-[65%] gap-x-8`} style={{paddingBottom:'5px'}}>
                <Button text={btnText} hoverEffect={false} />
                <Button text={hoverBtnText} hoverEffect={true} />
            </div>   
        </div>
    </>
  )
}

export default TwoBtnHalfCard