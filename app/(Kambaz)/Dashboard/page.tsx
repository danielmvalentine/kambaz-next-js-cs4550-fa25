"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/[id]/reducer";
import { RootState } from "../store";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const [course, setCourse] = useState<any>({
    _id: "0", 
    name: "New Course", 
    number: "New Number",
    startDate: "2023-09-10", 
    endDate: "2023-12-15",
    image: "/images/NEU.png", 
    description: "New Description"
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <p>Loading courses...</p>
      </div>
    );
  }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <h5>
        New Course
        <button 
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={() => {
            const newCourse = { ...course, _id: uuidv4() };
            dispatch(addNewCourse(newCourse));
          }}
        > 
          Add 
        </button>
        <button 
          className="btn btn-warning float-end me-2"
          id="wd-update-course-click"
          onClick={() => dispatch(updateCourse(course))}
        >
          Update
        </button>
      </h5>
      <br />
      <TextField 
        value={course.name} 
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        className="mb-2" 
        fullWidth
        label="Course Name"
        variant="outlined"
      />
      <TextField 
        value={course.description} 
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
        rows={3}
        multiline
        fullWidth
        label="Course Description"
        variant="outlined"
      />
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
                  <button 
                    id="wd-edit-course-click"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                    className="btn btn-warning me-2 float-end"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={(event) => {
                      event.preventDefault();
                      dispatch(deleteCourse(course._id));
                    }} 
                    className="btn btn-danger float-end"
                    id="wd-delete-course-click"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}