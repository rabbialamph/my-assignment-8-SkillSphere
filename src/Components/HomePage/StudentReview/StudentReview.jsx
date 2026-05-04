"use client";

import { motion } from "framer-motion";
import { BiStar } from "react-icons/bi";

const reviews = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "Web Developer",
    rating: 5,
    comment:
      "SkillSphere completely changed my career. Very well-structured course!",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Jannat Islam",
    role: "UI Designer",
    rating: 4,
    comment:
      "Amazing instructors and very easy-to-understand lessons",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    role: "Student",
    rating: 5,
    comment:
      "Best learning platform ever! Highly recommended",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

const StudentReview = () => {
  return (
    <section className="py-8 px-4 text-white">

      <div className="container mx-auto mx-auto">


        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Student <span className="text-indigo-400">Reviews</span>
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#0f172a] border border-white/10 rounded-xl p-6 transition"
            >

              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />

                <div>
                  <h3 className="font-semibold">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {review.role}
                  </p>
                </div>
              </div>


              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <BiStar
                    key={i}
                    size={16}
                    className="text-yellow-400"
                  />
                ))}
              </div>


              <p className="text-gray-300 text-sm leading-relaxed">
                {review.comment}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StudentReview;