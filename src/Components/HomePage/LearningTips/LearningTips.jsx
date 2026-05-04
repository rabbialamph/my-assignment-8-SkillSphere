"use client";

import { motion } from "framer-motion";
import { BsClock } from "react-icons/bs";
import { FiEdit3, FiTarget } from "react-icons/fi";

const LearningTips = () => {
  const tips = [
    {
      id: 1,
      title: "Time Management",
      description: "Plan your study time and stick to it.",
      icon: <BsClock className="text-indigo-400 w-6 h-6" />,
    },
    {
      id: 2,
      title: "Practice Daily",
      description: "Practice makes perfect. Keep coding daily.",
      icon: <FiEdit3 className="text-purple-400 w-6 h-6" />,
    },
    {
      id: 3,
      title: "Stay Consistent",
      description: "Consistency today, success tomorrow.",
      icon: <FiTarget className="text-pink-400 w-6 h-6" />,
    },
  ];

  return (
    <section className="py-8 px-4 container mx-auto text-white">

     


      <h2 className="text-3xl  md:text-4xl font-bold mb-10">
        Learning <span className="text-indigo-400">Tips</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

        {tips.map((tip, index) => (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-[#0f172a] backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:shadow-2xl hover:shadow-indigo-500/10 transition"
          >
            

            <div className="bg-white/10 p-3 rounded-xl border border-white/10">
              {tip.icon}
            </div>


            <div>
              <h3 className="text-white font-semibold text-lg">
                {tip.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {tip.description}
              </p>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default LearningTips;