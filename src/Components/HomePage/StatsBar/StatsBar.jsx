"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { value: 200, suffix: "K+", label: "Happy Students" },
  { value: 500, suffix: "+", label: "Online Courses" },
  { value: 200, suffix: "+", label: "Expert Instructors" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
];

const CountUpNumber = ({ end, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const StatsBar = () => {
  return (
    <div className="w-full px-4 py-8 ">
      <div className="container mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl 
          bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#020617]
          border border-white/10 shadow-2xl"
        >

          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>

          <div className="absolute w-[300px] h-[300px] bg-indigo-600/20 blur-[100px] rounded-full -top-20 -left-20"></div>
          <div className="absolute w-[300px] h-[300px] bg-purple-600/20 blur-[100px] rounded-full -bottom-20 -right-20"></div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 text-center">

            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-4"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  <CountUpNumber end={item.value} suffix={item.suffix} />
                </h3>

                <p className="text-sm md:text-base text-gray-400 mt-2">
                  {item.label}
                </p>
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default StatsBar;