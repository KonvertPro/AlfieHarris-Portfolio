import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false); // < 1200px

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(max-width: 640px)');
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq1200 = window.matchMedia('(max-width: 1200px)');
    const onChangeNarrow = (e) => setIsNarrow(e.matches);
    setIsNarrow(mq1200.matches);
    mq1200.addEventListener('change', onChangeNarrow);
    return () => mq1200.removeEventListener('change', onChangeNarrow);
  }, []);

  return (
    <section className={`relative w-full h-[80svh] sm:h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] z-10 max-w-7xl mx-auto 
          ${styles.paddingX} flex flex-row items-start gap-5 pointer-events-none`}
      >
        {/* Left margin wave now global; no local accent */}

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Creative
            <br className='hidden sm:block' />
            <span className='text-black'> {' '}Digital Designer</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
           All things design and development.
            
          </p>
          {isNarrow && (
            <div className="mt-6 flex flex-wrap items-center gap-3 relative z-20 pointer-events-auto">
              <a
                href="#projects"
                className="inline-block px-5 py-3 rounded-lg bg-black text-[#ffffff] font-semibold hover:bg-black/90 transition-colors"
                aria-label="View Projects"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="inline-block px-5 py-3 rounded-lg border border-black/20 bg-white text-black font-semibold hover:bg-black/5 transition-colors"
                aria-label="Get in touch"
              >
                Get in touch
              </a>
            </div>
          )}
        </div>
      </div>

      {!isMobile && <ComputersCanvas />}
      
      {!isMobile && (
        <div className="absolute xs:bottom-10 bottom-32 w-full 
        flex justify-center items-center">
          <a href= "#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4
            border-secondary flex justify-center items-start p-2">
              <motion.div
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      )}

    </section>
  );
};

export default Hero;
