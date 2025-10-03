"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function CourseNavigation() {
  const params = useParams();
  const id = params.id as string;

  console.log("Navigation - id from useParams:", id); // Debug log

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link href={`/Courses/${id}/Home`} id="wd-course-home-link"
        className="list-group-item active border border-0">
        Home
      </Link>
      <Link href={`/Courses/${id}/Modules`} id="wd-course-modules-link"
        className="list-group-item text-danger border border-0">
        Modules
      </Link>
      <Link href={`/Courses/${id}/Piazza`} id="wd-course-piazza-link"
        className="list-group-item text-danger border border-0">
        Piazza
      </Link>
      <Link href={`/Courses/${id}/Zoom`} id="wd-course-zoom-link"
        className="list-group-item text-danger border border-0">
        Zoom
      </Link>
      <Link href={`/Courses/${id}/Assignments`} id="wd-course-assignments-link"
        className="list-group-item text-danger border border-0">
        Assignments
      </Link>
      <Link href={`/Courses/${id}/Quizzes`} id="wd-course-quizzes-link"
        className="list-group-item text-danger border border-0">
        Quizzes
      </Link>
      <Link href={`/Courses/${id}/People/Table`} id="wd-course-people-link"
        className="list-group-item text-danger border border-0">
        People
      </Link>
    </div>
  );
}