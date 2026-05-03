import { getCourses } from "@/lib/courses";
import CardDesign from "./CardDesign";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";


const CourseCard = async () => {
  const courses = await getCourses();

  return (
    <div className="my-8 container mx-auto px-4">
        <div>
          <div className="flex justify-between mb-8">
            <h3 className="text-2xl font-bold">Popular Courses</h3>
            <Link href='/courses'><p className="text-purple-800 cursor-pointer flex items-center">View All<BiRightArrowAlt></BiRightArrowAlt></p></Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses
            ?.sort((a, b) => b.rating - a.rating)
            .slice(0, 3)
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