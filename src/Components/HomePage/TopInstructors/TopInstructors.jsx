"use client";

import { motion } from "framer-motion";
import { BiStar } from "react-icons/bi";

const instructors = [
  {
    id: 1,
    name: "Jhankar Mahbub",
    designation: "Full Stack Developer",
    rating: 4.9,
    image: "https://i.ibb.co/jvFKQFzs/1677507599579.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "UI/UX Designer",
    rating: 4.8,
    image: "https://i.ibb.co/3KBg128/images-1.jpg",
  },
  {
    id: 3,
    name: "Robert Brown",
    designation: "Digital Marketer",
    rating: 4.7,
    image: "https://i.ibb.co/qqyDHX9/Rob-Brown-Headshot-1.webp",
  },
  {
    id: 4,
    name: "Michael Lee",
    designation: "Data Scientist",
    rating: 4.8,
    image: "https://i.ibb.co/Zz6zGGcN/images-2.jpg",
  },
];

const TopInstructors = () => {
  return (
    <section className="py-16 px-4 container mx-auto text-white">
     

      <h2 className="text-3xl  md:text-4xl font-bold mb-10">
        Top <span className="text-purple-400">Instructors</span>
      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">

        {instructors.map((instructor, index) => (
          <motion.div
            key={instructor.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 text-center hover:shadow-2xl hover:shadow-purple-500/10 transition"
          >


            <div className="w-24 h-24 rounded-full overflow-hidden border border-white/10 relative shadow-lg group-hover:scale-110 transition duration-300">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-full object-cover"
              />
            </div>


            <div>
              <h3 className="text-white font-semibold text-lg group-hover:text-purple-400 transition">
                {instructor.name}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {instructor.designation}
              </p>
            </div>

            <div className="flex items-center gap-1.5 mt-auto">
              <BiStar size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="text-gray-300 font-semibold text-sm">
                {instructor.rating.toFixed(1)}
              </span>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default TopInstructors;