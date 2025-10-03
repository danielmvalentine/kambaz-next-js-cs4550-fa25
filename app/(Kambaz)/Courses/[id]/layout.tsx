import { ReactNode } from "react";
import CourseNavigation from "./navigation";

export default function CourseLayout({ children }: { children: ReactNode }) {
  return (
    <div id="wd-courses">
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