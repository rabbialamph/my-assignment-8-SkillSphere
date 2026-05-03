"use client";

import Image from "next/image";
import { BiHeart, BiStar } from "react-icons/bi";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImg from "../../../public/hero-image.png";
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

const stats = [
  { value: 20, label: "Active Students", suffix: "K+" },
  { value: 500, label: "Expert Instructors", suffix: "+" },
  { value: 120, label: "Courses", suffix: "+" },
  { value: 95, label: "Satisfaction", suffix: "%" },
];

const useCountUp = (end, duration = 1500) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
};

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
            
   
            <button className="relative px-6 py-3 rounded-xl overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 transition"></span>
              <span className="relative z-10">Explore Courses →</span>
            </button>

    
            <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 hover:scale-105 transition duration-300 flex items-center gap-2">
             <MdVideoLibrary></MdVideoLibrary> Watch Demo
            </button>
          </div>

   
          <div className="flex gap-4 mt-12 text-sm text-gray-400 flex-wrap">
            {stats.map((stat, i) => {
              const count = useCountUp(stat.value);

              return (
                <div key={i}>
                  <p className="text-white font-bold text-xl">
                    {count}
                    {stat.suffix}
                  </p>
                  {stat.label}
                </div>
              );
            })}
          </div>
        </div>

      
        <div className="relative flex justify-center">

          <Image
            src={heroImg}
            alt="hero"
            width={420}
            height={420}
            className="relative z-10 drop-shadow-[0_0_40px_rgba(99,102,241,0.4)]"
          />

          <div className="absolute top-5 right-0 bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-4 w-44 shadow-lg">
            <p className="text-xs text-gray-300">JavaScript</p>
            <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
              <div className="w-[75%] h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            </div>
            <p className="text-xs mt-1 text-gray-400">Progress 75%</p>
          </div>


          <div className="absolute bottom-0 left-0 bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-4 w-44 shadow-lg">
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