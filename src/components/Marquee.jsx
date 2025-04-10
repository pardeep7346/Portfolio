import React,{useRef, useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  const marquee1 = useRef();
  const marquee2 = useRef();


  useEffect(() => {
    gsap.to(marquee1.current, {
      x: '-100%', 
      scrollTrigger: {
        trigger: marquee1.current,
        start: 'top bottom', 
        end: 'bottom top', 
        scrub: true, 
      },
    });

    gsap.to(marquee2.current, {
      x: '100%', 
      scrollTrigger: {
        trigger: marquee2.current,
        start: 'top bottom', 
        end: 'bottom top', 
        scrub: true, 
      },
    });
  }, [])
  

  return (
    <div className="bg-zinc-950 text-white overflow-hidden">
      <h1 ref={marquee1} className="text-[70px] md:text-[150px] lg:text-[200px] whitespace-nowrap font-bold font-serif tracking-[-0.05em]">
        Design Develop Deploy Repeat Design Develop Deploy Repeat 
      </h1>
      <h1 ref={marquee2} className="text-[70px] flex justify-end md:text-[150px] lg:text-[200px] whitespace-nowrap font-bold font-serif tracking-[-0.05em] -mt-10 md:-mt-20 lg:-mt-30">
        Design Develop Deploy Repeat Design Develop Deploy Repeat 
      </h1>
    </div>
  );
};

export default Marquee;