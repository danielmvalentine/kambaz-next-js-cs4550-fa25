import Link from "next/link";
export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation">
      <Link href="/Courses/700/Home" id="wd-course-home-link">Home</Link><br/>
      <Link href="/Courses/700/Modules" id="wd-course-modules-link">Modules
        </Link><br/>
      <Link href="/Courses/700/Piazza" id="wd-course-piazza-link">Piazza</Link><br/>
      <Link href="/Courses/700/Zoom" id="wd-course-zoom-link">Zoom</Link><br/>
      <Link href="/Courses/700/Assignments" id="wd-course-quizzes-link">
          Assignments</Link><br/>
      <Link href="/Courses/700/Quizzes" id="wd-course-assignments-link">Quizzes
        </Link><br/>
      <Link href="/Courses/700/Grades" id="wd-course-grades-link">Grades</Link><br/>
      <Link href="/Courses/700/People/Table" id="wd-course-people-link">People</Link><br/>
    </div>
  );}
