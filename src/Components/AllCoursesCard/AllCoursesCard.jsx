import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import { BiStar, BiUser } from "react-icons/bi";
import { BsClock } from "react-icons/bs";

const AllCourseCard = ({ course }) => {
  console.log(course.image)
  return (
    <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/20 transition">

   
      <div className="relative h-48 w-full overflow-hidden">

        <img
          src={course.image}
          alt={course.title}
          height={300}
          width={300}
          className="object-cover w-full h-full group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

  
        <div className="absolute top-3 left-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full shadow">
          {course.category}
        </div>

      </div>

      <div className="p-5">

        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-indigo-400 transition">
          {course.title}
        </h3>

        <div className="flex items-center gap-2 mb-4">
          <BiUser size={14} className="text-gray-400" />
          <p className="text-sm text-gray-400">
            {course.instructor}
          </p>
        </div>

 
        <div className="flex justify-between mb-5">

          <div className="flex items-center gap-1">
            <BiStar size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="text-gray-300 text-sm font-medium">
              {course.rating}
            </span>
          </div>

          <span className="text-xs text-gray-400 flex items-center gap-1">
            <BsClock size={14} /> {course.duration}
          </span>

        </div>


        <Link href={`/courses/${course.id}`}>
          <button className="relative w-full px-4 py-2 rounded-xl overflow-hidden group/btn">

            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600"></span>

            <span className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 bg-white/10 transition"></span>

            <span className="relative z-10 flex items-center justify-center gap-2 text-white cursor-pointer">
              View Details <RiArrowRightLine />
            </span>

          </button>
        </Link>

      </div>
    </div>
  );
};

export default AllCourseCard;