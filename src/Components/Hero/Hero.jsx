import React from 'react'
import './Hero.css';
import Bigcard from '../Bigcard/Bigcard.jsx';
function Hero() {
  return (
    <section className='h-[calc(100vh] w-full relative'>
        <div id='hero' className='flex-center flex-col'>
            <Bigcard bgImage='../../../assets/images/AppleHeroFirst.jpg' title='iPhone 16 Pro' caption='Built for Apple Intelligence' endcaption='Apple Intelligence now available now in US English' btnText='Learn More' hoverBtnText='Buy'/>
            <Bigcard bgImage='../../../assets/images/AppleHeroSecond.jpg' title='iPhone 16 Pro' caption='Built for Apple Intelligence' endcaption='Apple Intelligence now available now in US English' btnText='Learn More' hoverBtnText='Buy' captionColor='black'/> 
            <Bigcard bgImage='../../../assets/images/AppleHeroThird.jpg' title='WATCH' subCaption='series 10' caption='Thinstat Classic' textColor='black' endcaption='Apple Intelligence now available now in US English' captionColor='black' btnText='Learn More' hoverBtnText='Buy' nearEachOther={true}/> 
        </div>
    </section>
  )
}

export default Hero