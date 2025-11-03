import { ReactNode } from "react";
import { courses } from "../../Database";
import CourseNavigation from "./navigation";
import Breadcrumb from "./Breadcrumb";

export default async function CourseLayout({ 
  children,
  params 
}: { 
  children: ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = courses.find((course: any) => course._id === id);
  
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <Breadcrumb course={course} />
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          {children}
        </div>
      </div>
    </div>
  );
}