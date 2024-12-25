import CourseComp from "../component/CoursesComp";
import CoursesHero from "../component/CoursesHero";
import InfoTop from "../component/InfoTop";

export default function Courses() {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* <CoursesHero/>
      <CourseComp /> */}

      <div className=" flex flex-col justify-center items-center h-[100vh] ">
        <h2 className="text-white text-3xl ">Your sever is down</h2>
        <p className="">contact vercel webmaster for support</p>
      </div>
    </div>
  );
}
