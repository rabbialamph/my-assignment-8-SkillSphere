"use client";

import { useState } from "react";
import AllCourseCard from "@/Components/AllCoursesCard/AllCoursesCard";
import { BiFilter, BiSearch } from "react-icons/bi";
import { SlClose } from "react-icons/sl";
import { Label, SearchField } from "@heroui/react";

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


      <div className="flex flex-col md:flex-row gap-3 mt-10 items-center">

        <SearchField >
          <Label>Search</Label>
          <SearchField.Group className='p-6'>
            
            <SearchField.SearchIcon className="text-gray-400" />
        
            <SearchField.Input
              name="search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses by title..."
            />
        
          </SearchField.Group>
        </SearchField>


        <div className="dropdown dropdown-end">

          <button tabIndex={0} className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-indigo-500 transition cursor-pointer">
            <BiFilter size={20} />
            Fillter by category
          </button>

          <div tabIndex="-1" className="dropdown-content menu mt-2 w-52 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl z-50">

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