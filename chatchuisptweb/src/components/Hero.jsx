import React from 'react'
import styles from '../style';

import { screen_app } from '../assets';
 

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className={` flex-1 ml-10 font-poppins font-semibold ss:text-[58px] text-[52px] text-white z-[2] ss:leading-[100px] leading-[75px]`}>
          La plateforme de <br className='sm:block hidden'/> {" "}
          <span className='text-gradient'> Conversation Avancée </span>
        </h1>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}> 
        <img src={screen_app} alt='screen_app' className='h-[600px] relative z-[5] '/>
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'></div>
        <div className='absolute z-[0] w-[50%] h-[55%] right-20 bottom-20 top-0 blue__gradient'></div>
      </div>
  
    </section>
  
  )


export default Hero