"use client";

import { motion } from "framer-motion";
import { BiRightArrowAlt } from "react-icons/bi";

const features = [
  {
    id: 1,
    title: "Professional Programming Training",
    desc: "Project-based learning from beginner to advanced level",
    icon: "💼",
  },
  {
    id: 2,
    title: "Video Lessons & Practical Guides",
    desc: "High quality recorded classes with real-world examples",
    icon: "📄",
  },
  {
    id: 3,
    title: "Live Expert Support",
    desc: "Instant help from professional mentors anytime",
    icon: "🧑‍🏫",
  },
  {
    id: 4,
    title: "Certified Courses",
    desc: "Get verified certificates for career growth",
    icon: "🏅",
  },
  {
    id: 5,
    title: "Job Preparation System",
    desc: "Interview practice and real job test preparation",
    icon: "🖥️",
  },
  {
    id: 6,
    title: "Fast Track Learning",
    desc: "Crash courses for quick skill development",
    icon: "🚀",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-8 px-4 container mx-auto text-white">

      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          What You <span className="text-indigo-400">Will Get</span>
        </h2>

          <p className="text-purple-500 cursor-pointer flex items-center">Explore More <BiRightArrowAlt></BiRightArrowAlt></p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {features.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="
              bg-[#0f172a]
              backdrop-blur-xl 
              border border-white/10 
              rounded-2xl 
              p-6 
              text-center 
              shadow-lg 
              hover:shadow-purple-500/10 
              transition
            "
          >

            <div className="text-4xl mb-4">
              {item.icon}
            </div>

            <h3 className="text-white font-semibold text-lg mb-2">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default FeaturesSection;