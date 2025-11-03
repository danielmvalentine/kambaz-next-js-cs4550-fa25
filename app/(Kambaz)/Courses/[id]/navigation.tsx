"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function CourseNavigation() {
  const params = useParams();
  const pathname = usePathname();
  const id = params.id as string;
  
  console.log("Navigation - id from useParams:", id);
  console.log("Current pathname:", pathname);
  
  const links = [
    { label: "Home", path: "Home" },
    { label: "Modules", path: "Modules" },
    { label: "Piazza", path: "Piazza" },
    { label: "Zoom", path: "Zoom" },
    { label: "Assignments", path: "Assignments" },
    { label: "Quizzes", path: "Quizzes" },
    { label: "People", path: "People/Table" },
  ];
  
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const href = `/Courses/${id}/${link.path}`;
        const isActive = pathname.includes(link.path.split('/')[0]);
        
        return (
          <Link 
            key={link.label}
            href={href}
            id={`wd-course-${link.label.toLowerCase()}-link`}
            className={`list-group-item border border-0 ${
              isActive ? "active text-black" : "text-danger"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}