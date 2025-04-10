import React, { useRef, useEffect } from "react";
import Navbar from "../fixedComponents/Navbar";
import gsap from "gsap";

const HeroSection = () => {
  const heroRef = useRef();
  const headingRef = useRef();
  const subHeadingRef = useRef();
  const action = useRef();

  useEffect(() => {
    gsap.fromTo(heroRef.current, { scale: 1.2 }, { scale: 1, duration: 1 });
    gsap.fromTo(
      headingRef.current.querySelectorAll("span"),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.4 }
    );
    gsap.fromTo(
      subHeadingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2 }
    );
    gsap.fromTo(  
      action.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2 }
    );
  }, []);

  return (
    <div className="h-[80vh] md:h-screen sm:h-[70vh] w-full bg-cover bg-center">
      <div className="h-[80vh] md:h-screen sm:h-[70vh]  w-full absolute overflow-hidden">
        <img
          ref={heroRef}
          src="hero.jpg"
          className="h-screen w-full absolute -z-10 object-cover"
          alt=""
        />
      </div>
      <div className="p-5 md:p-10 flex flex-col justify-center items-center h-[80vh] md:h-screen sm:h-[70vh] w-full ">
        <h1 className="font-bold text-lg md:text-3xl text-white upercase">
          Hi, I'm <span className="text-amber-600">Pardeep Sharma</span>
        </h1>
        <h1
          ref={headingRef}
          className="text-[10vw] md:text-[10vw] text-white font-bold uppercase flex flex-wrap gap-[2vw] justify-center"
        >
          <span className="inline-block">Vision</span>
          <span className="inline-block">in</span>
          <span className="inline-block">action</span>
        </h1>
        <div className="h-fit overflow-hidden ">
        <h2 ref={subHeadingRef} className="text-sm md:text-xl text-white font-bold uppercase text-center">
        "Crafting Dynamic, User-Focused Websites with Precision and Creativity"
        </h2>
        </div>
        <div className="h-fit overflow-hidden mt-5">
          <p
            ref={action}
            className="text-lg md:text-xl text-white uppercase text-center mt-8 flex gap-2"
          >
            Scroll down to see what fuels my craft <img src="downward.svg" alt="" className="border-2 rounded-full " />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
