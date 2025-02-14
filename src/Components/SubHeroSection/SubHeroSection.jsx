import React from 'react'
import HalfCard from '../HalfCard/HalfCard'
import TwoBtnHalfCard from '../HalfCard/TwoBtnHalfCard'
import TwoBtnHalfCardEnd from '../HalfCard/TwoBtnHalfCardEnd'
function SubHeroSection() {
  return (
    <>
        <div className='w-full flex justify-around' style={{marginBottom:'13px'}}>
            <HalfCard titleImg={true} caption='United by rythm. Discover the new Black Unity watch strap and face' bgImage='../../../assets/images/AppleSubHeroFirst.jpg' titleImgUrl='../../../assets/images/AppleSubHeroFirstTitle.png' btnText='Buy'/>
            <HalfCard title="Valentine's Day" caption='Last Chance to find something special for your special someone' textColor='black' bgImage='../../../assets/images/AppleSubHeroSecond.png' btnText='Shop' atEnd={true}/>
        </div>
        {/* <div className='w-full flex justify-around' style={{marginBottom:'13px'}}>
          <HalfCard titleImg={true} caption='United by rythm. Discover the new Black Unity watch strap and face' bgImage='../../../assets/images/AppleSubHeroFirst.jpg'/>
          <HalfCard title="Valentine's Day" caption='Last Chance to find something special for your special someone' textColor='black' bgImage='../../../assets/images/AppleSubHeroSecond.png' atEnd={true} btnBg='#2997FF'/>
        </div> */}
        <div className='w-full flex justify-around' style={{marginBottom:'13px'}}>
          <TwoBtnHalfCard textColor='black' title='MacBook Air' caption='Supercharged by M3' btnText='Learn More' hoverBtnText='Buy' bgImage='../../../assets/images/AppleSubHeroThird.jpg'/>
          <TwoBtnHalfCard textColor='white' title='iPad Pro' caption='Unbelievably thin. Incredibly Powerful' btnText='Learn More' hoverBtnText='Buy' bgImage='../../../assets/images/AppleSubHeroFourth.jpg'/>
        </div>
        <div className='w-full flex justify-around' style={{marginBottom:'13px'}}>
          <TwoBtnHalfCardEnd textColor='white' title='AirPods 4' caption='Iconic. Now Supersonic.' subCaption=' Available with active noise cancellation.' btnText='Learn More' hoverBtnText='Buy' bgImage='../../../assets/images/AppleSubHeroFifth.jpg'/>
          <HalfCard titleImg={true} caption="Upgrade and Save. It's that easy" bgImage='../../../assets/images/AppleSubHeroSixth.jpg' textColor='black' titleImgUrl='../../../assets/images/AppleSubHeroSixthTitle.png' btnText='Get Your Estimate' classNameAdd='text-[15px]'/>
        </div>
    </>
  )
}

export default SubHeroSection