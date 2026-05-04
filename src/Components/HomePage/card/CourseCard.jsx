import { getCourses } from "@/lib/courses";
import CardDesign from "./CardDesign";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";


const CourseCard = async () => {
  const courses = await getCourses();

  return (
    <div className="my-8 container mx-auto px-4">
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl  md:text-4xl font-bold">
             Popular <span className="text-purple-400">Courses</span>
           </h2>
            <Link href='/courses'><p className="text-purple-500 cursor-pointer flex items-center">View All<BiRightArrowAlt></BiRightArrowAlt></p></Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses
            ?.sort((a, b) => b.rating - a.rating)
            .slice(0, 4)
            .map((course) => (
              <CardDesign
                key={course.id}
                course={course}
              />
            ))}
          </div>
        </div>

      </div>
  );
};

export default CourseCard;