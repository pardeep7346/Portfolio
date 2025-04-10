import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const about = useRef();
  const me = useRef();
  const para = useRef();
  const b = useRef();
  const b2 = useRef();
  const b3 = useRef();
  const container = useRef();

  useEffect(() => {
    ScrollTrigger.create({
      trigger: container.current,
      start: "top bottom",
      onEnter: () => {
        gsap.fromTo(
          about.current.querySelectorAll("span"),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.2, delay: 0.4 }
        );
  
       
       
        gsap.to(b2.current, {
          rotationY: 180,     
          duration: 2,         
          repeat: 1,          
          yoyo: true,          
          ease: "power1.inOut" 
        });
        gsap.to(b3.current, {
          rotationY: 180,     
          duration: 2,         
          repeat: 1,          
          yoyo: true,          
          ease: "power1.inOut" 
        });
  
        gsap.fromTo(
          me.current.querySelectorAll("span"),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.4, delay: 0.7 }
        );
        gsap.fromTo(
          para.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: 0.5 }
        );
      },
    });
  }, []);

  return (
    <div
      ref={container}
      className="h-[80vh] md:h-screen sm:h-[70vh] w-full bg-zinc-950 text-white text-center p-5 md:p-10 flex flex-col justify-around"
    >
      <div className="aboutHr text-4xl md:text-6xl font-bold h-fit">
        <span ref={about}>
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>U</span>
          <span>t</span>
        </span>
        <span ref={me}>
          <span>-</span>
          <span>M</span>
          <span className="absolute" ref={b}>e</span>
        </span>
      </div>
      <p
        ref={para}
        className="m-5 md:m-10 font-bold text-lg md:text-2xl lg:text-3xl"
      >
        "I'm a self-taught web developer who is passionate about building fast,
        functional, and user-friendly websites. With skills in front-end, I
        turn ideas into reality through clean code and creative
        problem-solving. Ready to bring your vision to life!"
      </p>
      <div className="flex justify-center">
        <button
        ref={b2}
          title="Check out my GitHub profile"
          className="border w-fit border-white rounded-full px-5 py-3 text-sm md:text-lg font-bold uppercase m-3 md:m-5"
        >
          <a href="https://github.com/pardeep7346">GitHub</a>
        </button>

        <button
        ref={b3}
          title="Download my resume"
          className="border w-fit border-white rounded-full px-5 py-3 text-sm md:text-lg font-bold uppercase m-3 md:m-5"
        >
          <a 
          download={"Pardeep_Resume.pdf"}
          href="./resume.pdf">Resume</a>
        </button>
      </div>
    </div>
  );
};

export default About;