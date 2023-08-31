import React from 'react'
import styles from '../style';

import { screen_app } from '../assets';
 

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        /* Title */
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className={` flex-1 font-poppins font-semibold ss:text-[58px] text-[52px] text-white z-[2] ss:leading-[100px] leading-[75px]`}>
            La plateforme de <br className='sm:block hidden'/> {" "}
            <span className='text-gradient'> Conversation Avancée </span>
          </h1>
        </div>

        /* Paragraph */
        <div className='flex flex-row justify-between items-center w-full'>
          <p className={`${styles.paragraph} max-w-[450px] mt-5`}>
            Chat ChuisPT est une plateforme de conversation avancée qui permet de créer des chatbots et des assistants virtuels intelligents et performants.
          </p>
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={screen_app} alt="billing" className="h-[600px] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

  
    </section>
  
  )


export default Hero