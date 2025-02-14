import React from 'react'
import Button from '../Button/Button.jsx'
const Bigcard = ({title, caption, bgImage, endcaption,btnText,hoverBtnText, nearEachOther, subCaption,textColor='white',captionColor='#86868b'}) => {
  return (
    <>
        <div className='w-full h-[calc(100vh-90px)] bg-cover bg-top' style={{ backgroundImage: `url('${bgImage}')`,marginBottom:'10px'}}>
            <div className='flex flex-col items-center gap-y-2' style={(nearEachOther)?{paddingTop:'36px',marginBottom:'15px'}:{paddingTop:'36px'}}>
                
                {(nearEachOther)?<img src='../../../assets/images/AppleHeroThirdTitle.png'></img>:<h1 className={`text-6xl font-[500] text-${textColor}`}>{title}</h1>}
                <h2 className={`text-2xl font-[500] text-${textColor}`}>{caption}</h2>
            </div>
            <div className={`w-full flex justify-center ${(!nearEachOther)?'items-end':''} h-[65%] gap-x-8`} style={{paddingBottom:'5px'}}>
                <Button text={btnText} hoverEffect={false} bgColor='#2997FF'/>
                <Button text={hoverBtnText} hoverEffect={true} bgColor='#2997FF'/>
            </div>
            {(!nearEachOther)?<div className='flex items-center justify-center' style={{paddingTop:'10px'}}>
                <p className={`text-${captionColor} text-md `}>{endcaption}</p>
            </div>:<div></div>}
        </div>
    </>
  )
}
export default Bigcard