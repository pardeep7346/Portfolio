import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const container = useRef();
  const skill = useRef();
  const skills = [
    { id: 1, heading: "React.js", desc: "Javascript library", percent: "90%" },
    { id: 2, heading: "Tailwind CSS", desc: "Styling Framework", percent: "95%" },
    { id: 3, heading: "Javascript", desc: "Language", percent: "90%" },
    { id: 4, heading: "HTML/CSS", desc: "Base", percent: "95%" },
    { id: 5, heading: "Git/Github", desc: "Version Control", percent: "85%" },
    { id: 6, heading: "Vite", desc: "Build tool", percent: "90%" },
    { id: 6, heading: "Node.js", desc: "Backend Environment", percent: "65%" },
    { id: 6, heading: "MongoDb", desc: "Database", percent: "70%" },
  ];

  useEffect(() => {
    ScrollTrigger.create({
      trigger: container.current,
      start: "top bottom",
      onEnter: () => {
        const skillsspan = gsap.utils.toArray(".skillsspan");
        gsap.fromTo(
          skillsspan,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.4, delay: 0.4 }
        );
        const boxes = gsap.utils.toArray(".box");
        boxes.forEach((box, index) => {
          const isLeftColumn = index % 2 === 0;
          gsap.fromTo(
            box,
            { x: isLeftColumn ? -100 : 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, delay: 0.3 * index, ease: "power2.out" }
          );
        });
      },
    });
  }, []);

  return (
    <div
      ref={container}
      className="h-screen md:h-fit w-full bg-zinc-950 text-white"
    >
      <h1
        ref={skill}
        className="relative text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold uppercase text-center p-5"
      >
        <span className="skillsspan">S</span>
        <span className="skillsspan">k</span>
        <span className="skillsspan">i</span>
        <span className="skillsspan">l</span>
        <span className="skillsspan">l</span>
        <span className="skillsspan">s</span>
      </h1>
      <div className="flex flex-wrap justify-center md:justify-between gap-2 items-center p-5">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="box w-full md:w-1/2 lg:w-1/3 flex flex-col md:flex-row justify-between items-center mx-auto my-2 p-4 bg-zinc-800 rounded-lg"
          >
            <span className="text-center md:text-left">
              <h1 className="text-lg md:text-xl font-bold">{skill.heading}</h1>
              <p className="text-sm md:text-base text-zinc-400">{skill.desc}</p>
            </span>
            <span className="w-full md:w-1/4 flex justify-center border-t-2 md:border-t-0 md:border-l-2 text-zinc-400 text-sm md:text-base mt-3 md:mt-0">
              {skill.percent}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;