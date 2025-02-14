import React from 'react'
import Button from '../Button/Button'
function HalfCard({title, caption, bgImage, titleImg=false, atEnd=false,textColor='white',btnBg ,titleImgUrl,btnText, classNameAdd}) {
  return (
    <>
        <div className={`w-[47%] h-[100vh] flex justify-center bg-cover text-xl text-${textColor}font-semibold text-center cursor-pointer`} style={{backgroundImage : `url('${bgImage}')`}}>
            <div className={(!atEnd)?'w-[50%] flex flex-col items-center text-center':'w-[50%] flex flex-col items-center justify-end text-center'}>
                {(titleImg)?<img src={`${titleImgUrl}`} style={(!atEnd)?{width:'50%',paddingTop:'50px',paddingBottom:'15px'}:{width:'50%',paddingBottom:'15px'}}alt="AppleSubHeroFirstTitle"></img>:<h1 className={`text-xl font-bold text-${textColor}`}>{title}</h1>}
                <div style={{paddingBottom:'25px'}}>
                    <p className={`text-${textColor}`}>{caption}</p>
                </div>
                <Button classNameAdd={classNameAdd} hoverEffect={false} bgColor={btnBg} text={btnText}/>
            </div>
        </div>
        
        
    </>
  )
}

export default HalfCard

//,padding:'60px 120px 0px 120px'}}