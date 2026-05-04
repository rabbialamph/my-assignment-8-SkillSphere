import CourseCurriculum from "./CourseCurriculum/CourseCurriculum";
import { GiStabbedNote } from "react-icons/gi";
import { MdPlayLesson, MdVideoLibrary } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import FeaturesBar from "./FeaturesBar/FeaturesBar";
import { FaCircleChevronRight, FaHeart } from "react-icons/fa6";
import { BiStar } from "react-icons/bi";
import { BsClock } from "react-icons/bs";

const CourseDetails = ({ course }) => {
  const { title, description, image, instructor, level, duration, rating } = course;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 text-white">

      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600/80 to-purple-600/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between shadow-xl">

        <div className="absolute w-[300px] h-[300px] bg-white/10 blur-3xl rounded-full top-0 left-0"></div>

        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold">
            {title}
          </h1>
        </div>

        <img
          src={image}
          alt={title}
          className="w-40 mt-4 md:mt-0 rounded-2xl shadow-lg relative z-10"
        />

      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="md:col-span-2 space-y-8">

          <div>
            <h2 className="text-2xl font-semibold text-white">
              {title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mt-3">

              <span>{instructor}</span>

              <span className="flex items-center gap-1">
                <BiStar size={16} className="text-yellow-400 fill-yellow-400" />
                {rating}
              </span>

              <span className="flex items-center gap-1">
                <BsClock size={14} /> {duration}
              </span>

              <span className="px-2 py-1 rounded-full bg-white/10 border border-white/10 text-green-400 text-xs">
                {level}
              </span>

            </div>

            <p className="mt-4 text-gray-400 leading-relaxed">
              {description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              What you will learn
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="flex items-center gap-2">
                <FaCircleChevronRight className="text-indigo-400" />
                Build real-world applications
              </li>

              <li className="flex items-center gap-2">
                <FaCircleChevronRight className="text-indigo-400" />
                Understand full-stack development
              </li>

              <li className="flex items-center gap-2">
                <FaCircleChevronRight className="text-indigo-400" />
                Work with APIs & databases
              </li>

              <li className="flex items-center gap-2">
                <FaCircleChevronRight className="text-indigo-400" />
                Deploy your projects
              </li>

            </ul>
          </div>

          <CourseCurriculum />

        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-fit shadow-xl">

          <h3 className="font-semibold mb-4 text-white">
            This course includes
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">

            <li className="flex items-center gap-2">
              <MdPlayLesson className="text-indigo-400" />
              42 Lessons
            </li>

            <li className="flex items-center gap-2">
              <MdVideoLibrary className="text-indigo-400" />
              20 Hours Video
            </li>

            <li className="flex items-center gap-2">
              <GiStabbedNote className="text-indigo-400" />
              Assignments
            </li>

            <li className="flex items-center gap-2">
              <GrCertificate className="text-indigo-400" />
              Certificate
            </li>

          </ul>

          <button className="mt-6 w-full px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition cursor-pointer">
            Enroll Now
          </button>

          <button className="mt-4 w-full px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center gap-2 cursor-pointer">
            <FaHeart className="text-red-400" />
            Add to Wishlist
          </button>

        </div>

      </div>

      <FeaturesBar />

    </div>
  );
};

export default CourseDetails;