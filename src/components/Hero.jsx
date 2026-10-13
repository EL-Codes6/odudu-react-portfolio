import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { styles } from '../style'
import Typer from 'react-text-typist'
import { ComputersCanvas } from './canvas'

const Hero = () => {

  const [cursorActive, setCursorActive] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setCursorActive(false)
    }, 4000);
  }, [])

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'><Typer sentences={["Odudu "]} loop={false} cursorSmooth showCursor={true} cursorColor={cursorActive ? "#915eff" : "transparent" } /></span></h1>
          
          <p className={`${styles.heroSubText} mt-2 text-white`}>I develop web <br className="sm:block hidden" /> applications and user interfaces</p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute bottom-20 xs:bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "repeat"
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
      <p className=' text-secondary absolute bottom-20 left-[25%] xs:bottom-12 xs:left-[33%] md:left-[39%] text-center lg:hidden animate-pulse'>Tap to <br /> scroll</p>
    </section>
  )
}

export default Hero