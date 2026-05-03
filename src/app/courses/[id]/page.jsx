
import { getCourses } from "@/lib/courses";
import CourseDetails from '../../../Components/CourseDetails/CourseDetails'

export async function generateMetadata({ params }) {
  const { id } = await params;
  const courses = await getCourses();
  const course = courses.find((course) => String(course.id) === id);

  if (!course) {
    return {
      title: `Not found - Profile Details`,
    };
  }

  return {
    title: `${course.title} -  Profile Details`,
    description: `${course.title}`,
  };
}

const CourseDetailsPage = async({ params }) => {
    
    const {id} = await params;
    const courses = await getCourses();
    const course = courses.find(course => course.id === parseInt(id));

  return (
    <div>
        
       <CourseDetails key={course.id} course={course}></CourseDetails>
        
    </div>
  );
};

export default CourseDetailsPage;