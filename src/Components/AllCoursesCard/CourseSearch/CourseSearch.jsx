"use client";

import { useState } from "react";
import AllCourseCard from "@/Components/AllCoursesCard/AllCoursesCard";
import { BiFilter, BiSearch } from "react-icons/bi";
import { SlClose } from "react-icons/sl";

const CourseSearch = ({ courses }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const matchSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || course.category === category;

    return matchSearch && matchCategory;
  });

  const categories = [
    "All",
    "Development",
    "Data Science",
    "IT & Software",
    "Marketing",
    "Design",
  ];

  return (
    <div className="text-white">


      <div className="flex flex-col md:flex-row gap-4 mt-10 items-center">

        <div className="relative w-full">

          <BiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses by title..."
            className="w-full bg-white/5 backdrop-blur-xl border border-white/10 text-gray-100 rounded-2xl py-3 pl-12 pr-4 outline-none focus:border-indigo-500 transition"
          />

        </div>


        <div className="dropdown dropdown-end">

          <button tabIndex={0} className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-indigo-500 transition cursor-pointer">
            <BiFilter size={20} />
            Fillter
          </button>

          <div tabIndex="-1" className="dropdown-content menu right-0 mt-2 w-52 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl z-50">

            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setCategory(cat)}
                className="w-full text-left px-4 py-2 text-sm cursor-pointer text-gray-300 hover:bg-white/10 transition"
              >
                {cat}
              </button>
            ))}

          </div>

        </div>

      </div>


      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12">

        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <AllCourseCard key={course.id} course={course} />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">

            <div className="bg-red-500/10 text-red-400 p-4 rounded-full mb-4 border border-red-500/20">
              <SlClose size={24} />
            </div>

            <h2 className="text-2xl font-semibold text-white mb-2">
              No Courses Found
            </h2>

            <p className="text-gray-400 max-w-md mb-6">
              No courses match your search or filter. Try different keywords or categories.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="px-6 py-2 cursor-pointer rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition"
            >
              Reset Filters
            </button>

          </div>
        )}

      </div>
    </div>
  );
};

export default CourseSearch;