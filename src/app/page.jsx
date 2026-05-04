
import CourseCard from "@/Components/HomePage/card/CourseCard";
import HeroBanner from "@/Components/HomePage/HeroBanner";
import LearningTips from "@/Components/HomePage/LearningTips/LearningTips";
import StatsBar from "@/Components/HomePage/StatsBar/StatsBar";
import StudentReview from "@/Components/HomePage/StudentReview/StudentReview";
import TopInstructors from "@/Components/HomePage/TopInstructors/TopInstructors";
import TrendingCourses from "@/Components/HomePage/TrendingCourses/TrendingCourses";


export default function Home() {
  return (
   <div>
     <HeroBanner></HeroBanner>
     <StatsBar></StatsBar>
     <CourseCard></CourseCard>
     <LearningTips></LearningTips>
     <TopInstructors></TopInstructors>
     <TrendingCourses></TrendingCourses>
     <StudentReview></StudentReview>
   </div>
  );
}
