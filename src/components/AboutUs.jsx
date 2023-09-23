import React from 'react'
import styles from '../style';

import { izaak, robin } from '../assets'

const AboutUs = () => (

  <section id="AboutUs" className={`flex flex-col justify-center items-center ${styles.paddingY}`}>
    {/* Title */}
    <h1 className={`flex-1 font-poppins font-semibold ss:text-[58px] text-[52px] text-white z-[2] py-10 text-center`}>
      About us
    </h1>
    <div className={`flex md:flex-row flex-col w-full ${styles.paddingY}`}>

      {/* Robin */}
      <div className={`flex flex-col justify-center items-center w-full`}>
        <img src={robin} alt='robin' className='w-[300px] h-[300px] rounded-full object-contain' />
        <h1 className={`flex-1 font-poppins font-semibold ss:text-[58px] text-[52px] text-white z-[2] py-10 text-center`}>
          Robin <br/><span className='text-gradient'> Backend </span>
        </h1>
      </div>

      {/* Izaak */}
      <div className={`flex flex-col justify-center items-center w-full`}>
        <img src={izaak} alt='izaak' className='w-[300px] h-[300px] rounded-full ' />
        <h1 className={`flex-1 font-poppins font-semibold ss:text-[58px] text-[52px] text-white z-[2] py-10 text-center`}>
          Izaak <br/> <span className='text-gradient'> Frontend </span>
        </h1>
      </div>
    </div>

    {/*description*/}

    <div className={`flex flex-row w-full pb-10`}>
      <p className={`flex-1 font-poppins text-[20px] md:text-[28px] text-white z-[2] text-center`}>
        We are two students from the <span className='text-gradient'> University of Applied Sciences of Amsterdam
        </span> who are passionate about programming and creating new things. We are currently in our third year of the
        <span className='text-gradient'> Software Engineering </span> course. We are always looking for new challenges and
        opportunities to learn new things. We are currently working on a project for the <span className='text-gradient'>
        Hogeschool van Amsterdam </span> to create a <span className='text-gradient'> chatbot </span> for the
        <span className='text-gradient'> ChuisPT </span> company.
      </p>  
    </div>

    
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Contact Us
    </button>

  </section>
)

export default AboutUs