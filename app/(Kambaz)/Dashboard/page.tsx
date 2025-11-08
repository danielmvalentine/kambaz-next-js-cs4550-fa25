"use client"
import { useState } from "react";
import Link from "next/link";
import * as db from "../Database";
import { v4 as uuidv4 } from "uuid";
// import { FormControl } from '@mui/material';

export default function Dashboard() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/NEU.png", description: "New Description"
  });

  const addNewCourse = () => {
    const newCourse = { ...course, _id: uuidv4() };
    setCourses([...courses, newCourse ]);
  };

  
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={addNewCourse} > Add </button>
      </h5>
      <br />
      {/* <FormControl value={course.name} className="mb-2" />
      <FormControl value={course.description} rows={3}/><hr /> */}
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