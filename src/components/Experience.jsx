import React, { useEffect, useRef, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#F7F7FB",
        color: "#000000",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #e5e7eb" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[70%] h-[70%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-black text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-black text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-black text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewTop = window.scrollY;
      const viewBottom = viewTop + window.innerHeight;
      const top = rect.top + window.scrollY;
      const height = el.offsetHeight || 1;
      // how far the viewport bottom has progressed into the section
      const entered = Math.max(0, Math.min(viewBottom - top, height));
      const p = Math.max(0, Math.min(1, entered / height));
      setProgress(p);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div ref={containerRef} className='mt-20 flex flex-col relative'>
        {/* Animated timeline fill (desktop and up) */}
        <div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-[3px] bg-gray-400"
          style={{ height: `${Math.round(progress * 100)}%`, borderRadius: 2, zIndex: 0, pointerEvents: 'none' }}
        />
        <div className="relative z-10">
        <VerticalTimeline lineColor="#e5e7eb">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
