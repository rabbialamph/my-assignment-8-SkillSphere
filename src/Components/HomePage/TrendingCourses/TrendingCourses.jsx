"use client";

import { motion } from "framer-motion";
import { BiRightArrowAlt, BiStar } from "react-icons/bi";

const trendingCourses = [
  { id: 1, title: "Python for Beginners", rating: 4.6, image: "https://i.ibb.co/mVnRvfMT/Python-for-beginners.png" },
  { id: 2, title: "Data Structures & Algorithms", rating: 4.8, image: "https://i.ibb.co/LDdhYvfw/Data-structures-and-algorithms-new.webp" },
  { id: 3, title: "MERN Stack", rating: 4.7, image: "https://i.ibb.co/b5hzdsc8/unnamed.png" },
  { id: 4, title: "React JS Crash Course", rating: 4.9, image: "https://i.ibb.co/kg9TJxV4/maxresdefault.jpg" },
  { id: 5, title: "Business Strategy", rating: 4.6, image: "https://i.ibb.co/cXR8s1Vt/Business-Strategy-copy.webp" },
];

const TrendingCourses = () => {
  return (
    <section className="py-8 px-4 container mx-auto text-white">

      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Trending <span className="text-indigo-400">Courses</span>
        </h2>
          <p className="text-purple-500 cursor-pointer flex items-center">View All<BiRightArrowAlt></BiRightArrowAlt></p>
      </div>


      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">

        {trendingCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -8 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-[#0f172a] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition cursor-pointer"
          >

            <div className="relative overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-32 object-cover group-hover:scale-110 transition duration-500"
              />


              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>


            <div className="p-4">

              <h2 className="text-white font-semibold text-sm leading-tight group-hover:text-indigo-400 transition">
                {course.title}
              </h2>


              <div className="flex items-center gap-1.5 mt-3">
                <BiStar size={14} className="text-yellow-400 fill-yellow-400" />
                <span className="text-gray-300 text-sm font-medium">
                  {course.rating.toFixed(1)}
                </span>
              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default TrendingCourses;