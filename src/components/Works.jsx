import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import React, { useMemo } from "react";

import { styles } from "../styles";
import { playbutton } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index, 
  name, 
  description, 
  tags, 
  image,
  source_code_link
}) => {
  const isMobile = useMemo(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(max-width: 640px)').matches;
  }, []);

  const isVideo = typeof image === "string" && image.endsWith(".mp4");

  return(
   <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    {/* Disable tilt on small screens for stability/perf; keep on desktop */}
    {isMobile ? (
      <div className='bg-gray-50 p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className="relative w-full h-[230px]">
  {isVideo ? (
    <video
      src={image}
      autoPlay={false}
      muted
      loop={false}
      playsInline
      controls
      preload="metadata"
      className="w-full h-full object-cover rounded-2xl"
    />
  ) : (
    <img
      src={image}
      alt={name}
      loading="lazy"
      className="w-full h-full object-cover rounded-2xl"
    />
  )}
     <div className="absolute inset-0 flex justify-end 
     m-3 card-img_hover">
      <div
      onClick={() => window.open
      (source_code_link, "_blank")}
      className="black-gradient w-10 h-10 rounded-full flex
      justify-center items-center cursor-pointer"
      >
       <img
       src={playbutton}
       alt="playbutton"
       className="w-full h-full object-contain"
       />
      </div>
      
     </div>
   </div>

   <div className="mt-5">
    <h3 className="text-white font-bold text-[24px]">{name}</h3>
    <p className="mt-2 text-secondary text-[14px]">{description}</p>
   </div>
   <div className="mt-4 flex flex-wrap gap-2">
     {tags.map((tag)=> (
      <p key={tag.name} className={`text-[14px] ${tag.color}`}>
       #{tag.name}
      </p>
     ))}
   </div>
  </div>
    ) : (
      <Tilt
       options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-gray-50 p-5 rounded-2xl sm:w-[360px] w-full'
      >
    <div className="relative w-full h-[230px]">
  {isVideo ? (
    <video
      src={image}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover rounded-2xl"
    />
  ) : (
    <img
      src={image}
      alt={name}
      loading="lazy"
      className="w-full h-full object-cover rounded-2xl"
    />
  )}
     <div className="absolute inset-0 flex justify-end 
     m-3 card-img_hover">
      <div
      onClick={() => window.open
      (source_code_link, "_blank")}
      className="black-gradient w-10 h-10 rounded-full flex
      justify-center items-center cursor-pointer"
      >
       <img
       src={playbutton}
       alt="playbutton"
       className="w-full h-full object-contain"
       />
      </div>
      
     </div>
   </div>

   <div className="mt-5">
    <h3 className="text-white font-bold text-[24px]">{name}</h3>
    <p className="mt-2 text-secondary text-[14px]">{description}</p>
   </div>
   <div className="mt-4 flex flex-wrap gap-2">
     {tags.map((tag)=> (
      <p key={tag.name} className={`text-[14px] ${tag.color}`}>
       #{tag.name}
      </p>
     ))}
   </div>
  </Tilt>
    )}
  </motion.div>
  );
 };

const Works =() => {
  return(
    <>
     <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          My Previous Work
        </p>
        <h2 className={`${styles.sectionHeadText} `}>
          Projects
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] 
        max-w-3xl leading-[30px]"
        >Below is a collection of projects that demonstrate my ability to design and develop purposeful digital experiences.
         Each piece highlights a different aspect of my skill set — from clean, responsive interfaces to functional, user-centred builds. 
         You can view the live demos and explore the source code for each, or browse all my repositories on GitHub.
        </motion.p> 
      </div>
      <div className=" mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
         <ProjectCard 
          key={`project-${index}`}
          index={index}
          {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects");
