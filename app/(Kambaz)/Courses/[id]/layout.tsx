"use client";
import { ReactNode, useState, useEffect } from "react";
import { FaAlignJustify } from "react-icons/fa";
import CourseNavigation from "./navigation";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "../../store";
import Breadcrumb from "./Breadcrumb";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);
  const [showNavigation, setShowNavigation] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  if (!isMounted) {
    return (
      <div id="wd-courses">
        <h2>
          <FaAlignJustify 
            className="me-4 fs-4 mb-1" 
            style={{ cursor: "pointer" }}
          />
          {/* Loading... */}
        </h2>
        <hr />
        <div className="d-flex">
          <div className="flex-fill">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div id="wd-courses">
      <h2>
        <FaAlignJustify 
          className="me-4 fs-4 mb-1" 
          onClick={toggleNavigation}
          style={{ cursor: "pointer" }}
        />
        {course?.name}
      </h2>
      <hr />
      <div className="d-flex">
        {showNavigation && (
          <div>
            <CourseNavigation />
          </div>
        )}
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}