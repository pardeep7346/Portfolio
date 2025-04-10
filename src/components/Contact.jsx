import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const form = useRef();
  const heading = useRef();
  const container = useRef();
  const left = useRef();
  const right = useRef();
  
  useEffect(() => {
    ScrollTrigger.create({
      trigger: container.current,
      start: "top bottom",
      onEnter: () => {
        gsap.fromTo(
          heading.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.4, delay: 0.4 }
        );
        gsap.fromTo(
          left.current,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.9, stagger: 0.4, delay: 0.4 }
        );
        gsap.fromTo(
          right.current,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.9, stagger: 0.4, delay: 0.4 }
        );
       
      },
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cgexafs", // Your Service ID
        "template_9fv824a", // Your Template ID
        form.current,
        "s-jCCiMMTKmTie6pY" // Your Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your message has been sent!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send your message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div
      ref={container}
      className="overflow-hidden relative h-screen w-full bg-zinc-950 text-white text-center p-5 md:p-10 flex flex-col justify-around"
    >
      <div className="h-30 w-30 bg-amber-500 blur-2xl rounded-full absolute top-10 left-80 "></div>
      <div className="h-fit overflow-hidden">
        <h1
          ref={heading}
          className="relative text-4xl md:text-7xl font-black font-sans uppercase z-10 "
        >
          Get in Touch
        </h1>
      </div>
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div
          ref={left}
          className="w-full md:w-1/2 flex flex-col justify-around items-center p-5"
        >
          <h1 className="text-2xl md:text-5xl font-bold text-center">
            “Code, coffee, and connections—let’s link up.”
          </h1>
          <span className="text-sm md:text-base mt-5 flex gap-5">
           <a href="https://www.instagram.com/pardeep_maghanian/"><img className="h-13 w-13" src="./instagram1.gif" alt="" /></a>

            <img className="h-13 w-13" src="./linkedin1.gif" alt="" />
            <a href="https://github.com/pardeep7346">
            <img className="h-13 w-13" src="./github.gif" alt="" />
            </a>
          </span>
        </div>

        {/* Right Section */}
        <div
          ref={right}
          className="w-full md:w-1/2 h-auto md:h-[300px] p-5 md:p-10"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col justify-around items-center gap-4"
          >
            {/* Name and Email */}
            <span className="flex flex-col md:flex-row justify-between items-center w-full gap-3">
              <input
                type="text"
                name="name"
                placeholder="pardeep sharma..."
                required
                className="bg-zinc-800 rounded-xl px-3 py-2 w-full md:w-1/2"
              />
              <input
                type="email"
                name="user_email"
                placeholder="pardeep@123.com.."
                required
                className="bg-zinc-800 rounded-xl px-3 py-2 w-full md:w-1/2"
              />
            </span>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message..."
              required
              className="bg-zinc-800 rounded-3xl px-3 py-3 w-full h-[100px] md:h-[150px]"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="py-2 px-3 text-center bg-amber-500 w-full rounded-full hover:bg-amber-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
