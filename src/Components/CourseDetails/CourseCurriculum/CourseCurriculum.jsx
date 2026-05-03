"use client";

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const curriculumData = [
  {
    title: "Introduction",
    lessons: [
      { name: "Welcome to the Course", duration: "10:45" },
      { name: "Course Overview", duration: "08:30" },
    ],
  },
  {
    title: "HTML & CSS",
    lessons: [
      { name: "HTML Basics", duration: "12:20" },
      { name: "Semantic HTML", duration: "15:10" },
      { name: "CSS Fundamentals", duration: "18:45" },
      { name: "Flexbox & Grid", duration: "22:30" },
    ],
  },
  {
    title: "JavaScript Basics",
    lessons: [
      { name: "Variables & Data Types", duration: "14:00" },
      { name: "Functions & Scope", duration: "16:25" },
      { name: "Arrays & Objects", duration: "19:40" },
      { name: "DOM Manipulation", duration: "21:10" },
    ],
  },
  {
    title: "React JS",
    lessons: [
      { name: "React Introduction", duration: "10:50" },
      { name: "Components & Props", duration: "18:15" },
      { name: "State & Hooks", duration: "22:00" },
      { name: "React Router Basics", duration: "20:30" },
    ],
  },
];

const CourseCurriculum = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-10 text-white">


      <h3 className="text-lg font-semibold mb-4">
        Course Curriculum
      </h3>

      <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">

        {curriculumData.map((section, index) => (
          <div key={index} className="border-b border-white/10 last:border-none">


            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-5 py-4 hover:bg-white/10 transition"
            >
              <span className="font-medium text-gray-200">
                {index + 1}. {section.title}
              </span>

              <BiChevronDown
                size={18}
                className={`text-gray-400 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>


            {openIndex === index && (
              <div className="px-6 py-4 space-y-3 bg-black/20">

                {section.lessons.map((lesson, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-sm text-gray-400 hover:text-white transition"
                  >

                    <span className="flex items-center gap-2">
                      <span className="text-indigo-400">
                        {index + 1}.{i + 1}
                      </span>
                      {lesson.name}
                    </span>

                    <span className="text-gray-500">
                      {lesson.duration}
                    </span>

                  </div>
                ))}

              </div>
            )}

          </div>
        ))}

      </div>
    </div>
  );
};

export default CourseCurriculum;