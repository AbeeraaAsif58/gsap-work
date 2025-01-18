import React, { useEffect, useRef, } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./component/Card";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const scrollContainerRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    gsap.to(".box1", {
      yPercent: -40,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: scrollContainer,
        start: "top center", 
        end: "bottom top", 
        scrub: true, 
      },
    });

    gsap.to(".box2", {
      yPercent: -20,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: scrollContainer,
        start: "top center", 
        end: "bottom center", 
        scrub: true, 
        
      },
    });

    gsap.to(".box3", {
      y: -110,
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainer,
        start: "top 30%", 
        end: "top -10% ",
        scrub: true,
        pin: true ,
        // markers: true, 
      },
    });
  }, 
  []);

  return (
    <div >

    <div className="bg-black w-full h-[100vh]" > </div>
    <div className="bg-black w-full h-[140vh] flex relative" >

     <img className="absolute left-[60%] top-[20%] w-[40%] h-[120vh] object-cover" src="public/images/dev.greenpic.png" alt="pic" />
   <div className="h-[100vh] w-[43%]  ">
   <div className="h-[60vh] w-full mt-[40%] pl-[60px]">
    <p className="text-[#0ebab1] text-1xl tracking-wider">FEATURED INSIGHTS </p>
    <h1 
  className="text-5xl font-semibold mt-[1%] bg-gradient-to-r from-white to-[#0ebab1] text-transparent bg-clip-text"
>
  Stories of our transformations across Services and Industries
</h1>
    <h2 className="text-white text-4xl mt-[3%] " >From Concept to completion</h2>
    
    <div className="flex items-center mt-[40px]">
  <button className="text-white font-extrabold  flex items-center gap-4 relative group">
    <span className="relative">
      Explore More
      <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
    </span>
    <span className="relative flex items-center justify-center w-8 h-8">
      <span className="absolute inset-0 bg-[#0ebab1]  opacity-0 group-hover:opacity-100 group-hover:visible invisible"></span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="white"
        className="relative z-10"
      >
        <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
      </svg>
    </span>
  </button>
</div>
   </div>
   </div>
   <div className="h-[100vh] w-[57%]">
  <div className="flex justify-center items-center mt-[10%] gap-5">
   <div 
    ref={box1Ref}
   className=" box1 w-[25%] h-[95vh] flex flex-col justify-center items-center gap-[2%]">
   <Card img="public/images/pic4.jpg" />
   <Card img="public/images/pic1.webp" data="Blog"/>
   </div>
   <div 
   ref={box2Ref}
   className="box2 w-[25%] h-[95vh]  flex flex-col justify-center items-center gap-[2%] ">
   <Card img="public/images/pic2.jpg" data="Blog" />
   <Card img="public/images/pic3.jpg" data="Blog"  />
   <Card img="public/images/pic5.jpg" data="Blog"  />
   </div>
   <div
 ref={box3Ref}
  className="box3 w-[25%] h-[95vh] flex flex-col justify-center items-center gap-[2%] ">
  <Card img="public/images/pic8.jpg" data="Case Stydy" />
  <Card img="public/images/pic6.jpg" data="Case Stydy" />
  <Card img="public/images/pic7.jpg" data="Case Stydy" />
   </div>
  </div>
   </div>
   </div>
   <div className="h-[100vh] w-full bg-black relative">
   <div className="w-full h-[35vh] top-[-20%] absolute bg-[#0d706b]">
  <div className="overflow-hidden  w-full h-[50%] flex items-center">
    <div className="flex animate-left-to-right items-center gap-[40px]">
      <img src="public/images/dev1.png" alt="pic" className="w-40 h-[10vh]" />
      <img src="public/images/dev2.png" alt="pic" className="w-40 h-[10vh]" />
      <img src="public/images/dev3.png" alt="pic" className="w-[20vw] h-[5vh]" />
      <img src="public/images/dev4.webp" alt="pic" className="w-40 h-[10vh]" />
      <img src="public/images/dev5.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev6.png" alt="pic" className="w-[20vw] h-[5vh]" />
      <img src="public/images/dev8.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev9.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev10.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev11.webp" alt="pic" className="w-[20vw] h-[5vh]" />
      <img src="public/images/dev12.svg" alt="pic" className="w-40 h-[20vh]" />
      {/* Duplicate Images */}
      <img src="public/images/dev1.png" alt="pic" className="w-40 h-[10vh]" />
      <img src="public/images/dev2.png" alt="pic" className="w-40 h-[10vh]" />
      <img src="public/images/dev3.png" alt="pic" className="w-[20vw] h-[5vh]" />
      <img src="public/images/dev4.webp" alt="pic" className="w-40 h-[10vh]" />
      <img src="public/images/dev5.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev6.png" alt="pic" className="w-[20vw] h-[5vh]" />
      <img src="public/images/dev8.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev9.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev10.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev11.webp" alt="pic" className="w-[20vw] h-[5vh]" />
      <img src="public/images/dev12.svg" alt="pic" className="w-40 h-[20vh]" />
      {/* {3rd} */}
      <img src="public/images/dev1.png" alt="pic" className="w-40 h-[10vh]" />
      <img src="public/images/dev2.png" alt="pic" className="w-40 h-[10vh]" />
      <img src="public/images/dev3.png" alt="pic" className="w-[20vw] h-[5vh]" />
      <img src="public/images/dev4.webp" alt="pic" className="w-40 h-[10vh]" />
      <img src="public/images/dev5.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev6.png" alt="pic" className="w-[20vw] h-[5vh]" />
      <img src="public/images/dev8.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev9.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev10.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev11.webp" alt="pic" className="w-[20vw] h-[5vh]" />
      <img src="public/images/dev12.svg" alt="pic" className="w-40 h-[20vh]" />
    </div>
  </div>
  <div className="overflow-hidden w-full h-[50%]">
    <div className="flex animate-right-to-left items-center gap-[40px]">
      <img src="public/images/dev1.png" alt="pic" className="w-40 h-[10vh]" />
      <img src="public/images/dev2.png" alt="pic" className="w-40 h-[10vh]" />
      <img src="public/images/dev3.png" alt="pic" className="w-[20vw] h-[5vh]" />
      <img src="public/images/dev4.webp" alt="pic" className="w-40 h-[10vh]" />
      <img src="public/images/dev5.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev6.png" alt="pic" className="w-[20vw] h-[5vh]" />
      <img src="public/images/dev8.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev9.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev10.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev11.webp" alt="pic" className="w-[20vw] h-[5vh]" />
      <img src="public/images/dev12.svg" alt="pic" className="w-40 h-[20vh]" />
      {/* Duplicate Images */}
      <img src="public/images/dev1.png" alt="pic" className="w-40 h-[10vh]" />
      <img src="public/images/dev2.png" alt="pic" className="w-40 h-[10vh]" />
      <img src="public/images/dev3.png" alt="pic" className="w-[20vw] h-[5vh]" />
      <img src="public/images/dev4.webp" alt="pic" className="w-40 h-[10vh]" />
      <img src="public/images/dev5.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev6.png" alt="pic" className="w-[20vw] h-[5vh]" />
      <img src="public/images/dev8.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev9.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev10.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev11.webp" alt="pic" className="w-[20vw] h-[5vh]" />
      <img src="public/images/dev12.svg" alt="pic" className="w-40 h-[20vh]" />
      {/*fwuiefho*/}
      <img src="public/images/dev1.png" alt="pic" className="w-40 h-[10vh]" />
      <img src="public/images/dev2.png" alt="pic" className="w-40 h-[10vh]" />
      <img src="public/images/dev3.png" alt="pic" className="w-[20vw] h-[5vh]" />
      <img src="public/images/dev4.webp" alt="pic" className="w-40 h-[10vh]" />
      <img src="public/images/dev5.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev6.png" alt="pic" className="w-[20vw] h-[5vh]" />
      <img src="public/images/dev8.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev9.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev10.svg" alt="pic" className="w-40 h-auto" />
      <img src="public/images/dev11.webp" alt="pic" className="w-[20vw] h-[5vh]" />
      <img src="public/images/dev12.svg" alt="pic" className="w-40 h-[20vh]" />
    </div>
  </div>

  <style jsx>{`
    @keyframes left-to-right {
      from {
        transform: translateX(-150%);
      }
      to {
        transform: translateX(0);
      }
    }

    @keyframes right-to-left {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-150%);
      }
    }

    .animate-left-to-right {
      animation: left-to-right 30s linear infinite;
    }

    .animate-right-to-left {
      animation: right-to-left 30s linear infinite;
    }
  `}</style>

     </div>
    </div>
   </div>
  );
};

export default App;
