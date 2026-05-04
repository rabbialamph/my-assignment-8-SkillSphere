"use client";

import Image from "next/image";
import { BiHeart, BiRightArrowAlt, BiStar } from "react-icons/bi";
import { motion } from "framer-motion";
import heroImg from "../../../../public/hero-img.png";
import { MdVideoLibrary } from "react-icons/md";



const lines = [
  {
    text: (
      <>
        Upgrade Your <span className="text-indigo-400">Skills</span>
      </>
    ),
  },
  {
    text: (
      <>
        Unlock Your <span className="text-purple-400">Future</span>
      </>
    ),
  },
];


const HeroBanner = () => {
  return (
    <section className="py-8 flex items-center bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white px-6 overflow-hidden relative">
      

      <div className="absolute w-[500px] h-[500px] bg-indigo-600/30 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 w-full">


        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-md">
            <BiHeart /> New Way Of Learning
          </span>


          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight mt-6"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.25 } },
            }}
          >
            {lines.map((line, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                {line.text}
              </motion.div>
            ))}
          </motion.h1>

          <p className="mt-5 text-gray-400 max-w-md">
            Learn from industry experts with practical projects and real-world experience.
          </p>


          <div className="flex gap-4 mt-8">
            
   
            <button className="relative px-4 py-2 rounded-full overflow-hidden group cursor-pointer">
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 transition"></span>
              <span className="relative z-10 flex items-center gap-1">Explore Courses <BiRightArrowAlt></BiRightArrowAlt></span>
            </button>

    
            <button className="px-4 py-2 rounded-full cursor-pointer border border-white/20 hover:bg-white/10 hover:scale-105 transition duration-300 flex items-center gap-2">
             <MdVideoLibrary></MdVideoLibrary> Watch Demo
            </button>
          </div>
        </div>

      
        <div className="relative flex justify-center">

          <Image
            src={heroImg}
            alt="hero"
            width={420}
            height={420}
            className="relative z-10 rounded-2xl drop-shadow-[0_0_40px_rgba(99,102,241,0.4)]"
          />

          <div className="absolute z-10 -top-5 right-0 bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-4 w-44 shadow-lg">
            <p className="text-xs text-gray-300">JavaScript</p>
            <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
              <div className="w-[75%] h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            </div>
            <p className="text-xs mt-1 text-gray-400">Progress 75%</p>
          </div>


          <div className="absolute z-10 -bottom-5 left-0 bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-4 w-44 shadow-lg">
            <p className="text-xl font-bold flex items-center gap-1">4.8 <BiStar size={16} className="text-yellow-400 fill-yellow-400" /></p>
            <p className="text-xs text-gray-300">12K Reviews</p>
          </div>

  
          <div className="absolute right-0 bottom-20 bg-white/10 p-4 rounded-full backdrop-blur-md border border-white/10 hover:scale-110 transition cursor-pointer">
            <MdVideoLibrary ></MdVideoLibrary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;