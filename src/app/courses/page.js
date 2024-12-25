import CourseComp from "../component/CoursesComp";
import CoursesHero from "../component/CoursesHero";
import InfoTop from "../component/InfoTop";

export default function Courses() {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      <CoursesHero/>
      <CourseComp />      
    </div>
  );
}
