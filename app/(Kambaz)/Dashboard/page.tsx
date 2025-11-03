import Link from "next/link";
import * as db from "../Database";

export default function Dashboard() {
  const courses = db.courses;
  
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4">
        {courses.map((course: any) => (
          <div 
            key={course._id}
            className="wd-dashboard-course col" 
            style={{ width: "300px" }}
          >
            <Link 
              href={`/Courses/${course._id}/Home`}
              className="text-decoration-none"
            >
              <div className="card" style={{ cursor: "pointer" }}>
                <img 
                  src={course.image || "/images/reactjs.jpg"} 
                  className="card-img-top"
                  alt={course.name}
                  style={{ height: "160px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title wd-dashboard-course-title text-nowrap overflow-hidden text-dark">
                    {course.name}
                  </h5>
                  <p 
                    className="card-text wd-dashboard-course-description overflow-hidden text-muted" 
                    style={{ height: "53px" }}
                  >
                    {course.description}
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}