import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    whittleburypark,
    photoshop,
    tdlogo,
    visualiser,
    portfolio,
    konvert,
    uop,
    konvertimg,
    cubedodger,
    mack,
    waitrose,
    dubmantra,
    indra,
    datametrics,
    datametricsvid,
    eligibility,
    indravisualiser,
    harisu,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "AV Developer",
      icon: mobile,
    },
    {
      title: "Creative Coder",
      icon: backend,
    },
    {
      title: "Graphic Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Adobe Photoshop",
      icon: photoshop,
    },
    {
      name: "tdlogo",
      icon: tdlogo,
    },
  ];
  
  const experiences = [
    {
      title: "Digital Marketing Assistant",
      company_name: "Whittlebury Park",
      icon: whittleburypark,
      iconBg: "black",
      date: "June 2019 - July 2019",
      points: [
        "I spent the summer of 2019 working as a Digital Marketing Assistant. It was an exciting and insightful experience as during this time I was heavily involved in the preparation for the Silverstone F1 Grand Prix. ",
        "Working within a small team, I developed branding material for the event and led on providing social media content.",
        "Throughout this busy and challenging period, I learnt plenty of skills that gave me great insight into digital marketing world.",
      ],
    },
    {
      title: "Retail Assistant",
      company_name: "Waitrose & Partners",
      icon: waitrose,
      iconBg: "#235347",
      date: "July 2019 - Sep 2020",
      points: [
        "Whilst studying for my A Levels, I worked part-time on the shopfloor at my local Waitrose",
        "I had to fully embrace Waitrose's high valued customer service ethos.",
        "Honed my inter-personal skills and develop new skills such as time management and teamwork in a professional setting.",
        
      ],
    },
    {
      title: "BA(Hons) Digital Media Design",
      company_name: "University of Plymouth",
      icon: uop,
      iconBg: "#ffffff",
      date: "Sep 2020 - Sep 2024",
      points: [
        "During my time at university, I completed individual and group projects that explored all corners of the design world.",
        "I specialised in creative coding projects and the deployment of interactive, immersive experiences within virtual spaces.",
        "Worked with local organisations such as Devon & Cornwall Police and Pollenize.",
        "Social media manager for the Mens Football Society.",
      ],
    },
    
    {
      title: "Digital Content Creator",
      company_name: "Dub Mantra",
      icon: dubmantra,
      iconBg: "#000000",
      date: "Nov 2023 - Present",
      points: [
        "Dub Mantra is a music group/label that offers a platform for creatives and audiences to collaborate and connect both online and at live events.",
        "I collaborate with the team to design and create digital content for the brand's social media.",
        "I play a role in organising and marketing our own live events across the UK",
        "A resident DJ with experience playing live across the world, from the UK to Europe and Asia.",
      ],
    },

    {
      title: "Co-Founder",
      company_name: "Konvert",
      icon: konvertimg,
      iconBg: "#000000",
      date: "May 2024 - Present",
      points: [
        "Konvert is a startup web design agency that acts as an asset for businesses using proven conversion systems, automated client onboarding, SEO & lead magnets.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Conduct comprehensive full business audits and analysis",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
      "Alfie and I have been working side by side for over a year now on various projects. We collaborate well together and he is always eager to learn new skills.",
      name: "Mack Gorman",
      designation: "Founder",
      company: "Konvert",
      image: mack,
    },
    {
      testimonial: "Alfie turned our vague ideas into a clean, conversion-first site in under three weeks. Brilliant communication and zero headaches.",
      name: "Charlie Harris",
      designation: "CEO",
      company: "Green Pillar",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      testimonial: "Alfie created an amazing logo pack for our Instagram, His creativity and attention to detail truly exceeded expectations.",
      name: "George Peaurt",
      designation: "Founder",
      company: "Dub Mantra",
      image: dubmantra,
    },
  ];
  
  const projects = [
        {
      name: "Clinic Waitlist Site",
      description:
        "Custom designed and coded website for Indra Clinic, a luxury wellness clinic based in London. The website features bespoke graphics and smooth animations.",
      tags: [
        {
          name: "webdesign",
          color: "blue-text-gradient",
        },
        {
          name: "branding",
          color: "green-text-gradient",
        },
        {
          name: "customcode",
          color: "pink-text-gradient",
        },
      ],
      image: indra,
      source_code_link: "https://indra.clinic/",
    },
     {
      name: "Eligibility Questionnaire",
      description:
        "I built a fully custom, brand-aligned eligibility for that guides visitors through a 90-second interactive test to check whether they qualify for treatment at Indra Clinic.",
      tags: [
        {
          name: "webdesign",
          color: "blue-text-gradient",
        },
        {
          name: "customapps",
          color: "green-text-gradient",
        },
        {
          name: "frontend",
          color: "pink-text-gradient",
        },
      ],
      image: eligibility,
      source_code_link: "https://eligibility.indra.clinic/",
    },
     
    {
      name: "Meditation Visualiser",
      description:
        "I developed a purpose-built, brand-aligned meditation landing page at that delivers a calm, accessible experience for users seeking mindful support.",
      tags: [
        {
          name: "customapps",
          color: "blue-text-gradient",
        },
        {
          name: "AV",
          color: "green-text-gradient",
        },
        {
          name: "visualiser",
          color: "pink-text-gradient",
        },
      ],
      image: indravisualiser,
      source_code_link: "https://meditations.indra.clinic/",
    },

      {
      name: "Datametrics",
      description:
        "Designed and devleoped branding and website for Datametrics, a growing enterprise in the network cabling industry.",
      tags: [
        {
          name: "three",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "game",
          color: "pink-text-gradient",
        },
      ],
      image: datametrics,
      source_code_link: "https://datametrics-hosting.framer.website/",
    },

    {
      name: "HARISU Portfolio",
      description:
       "This interactive 3D web portfolio was coded from scratch using the React.js framework in combination with Tailwind.css, Three.js and various other libraries.",
      tags: [
        {
          name: "webdesign",
          color: "blue-text-gradient",
        },
        {
          name: "portfolio",
          color: "green-text-gradient",
        },
        {
          name: "creative",
          color: "pink-text-gradient",
        },
      ],
      image: harisu,
      source_code_link: "https://harisu.framer.website/",
    },

  
    {
      name: "3D Audio Visualiser with shaders",
      description:
        "An online audio visualiser that brings your music to life using 3D elements and shaders. ",
      tags: [
        {
          name: "three",
          color: "blue-text-gradient",
        },
        {
          name: "HTML5",
          color: "green-text-gradient",
        },
        {
          name: "shaders",
          color: "pink-text-gradient",
        },
      ],
      image: visualiser,
      source_code_link: "https://alfieharris10.github.io/3D-Audio-Visualiser-Final/",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };
