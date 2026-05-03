import CourseSearch from "@/Components/AllCoursesCard/CourseSearch/CourseSearch";
import { getCourses } from "@/lib/courses";

const AllCourses = async () => {
  const courses = await getCourses();

  return (
    <div className="container mx-auto px-4 my-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">
          All Courses
        </h1>
        <p className="text-gray-200 text-lg">
          Explore our wide range of courses and enhance your skills
        </p>
      </div>

      <div>
       
        <CourseSearch courses={courses} />
      </div>
    </div>
  );
};

export default AllCourses;