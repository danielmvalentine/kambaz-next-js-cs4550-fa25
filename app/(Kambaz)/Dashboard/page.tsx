"use client";
import * as client from "../Courses/client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../Courses/reducer";
import { RootState } from "../store";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "0", 
    name: "New Course", 
    number: "New Number",
    startDate: "2023-09-10", 
    endDate: "2023-12-15",
    image: "/images/NEU.png", 
    description: "New Description"
  });

  const fetchCourses = async () => {
    try {
      const myCourses = await client.findMyCourses();
      dispatch(setCourses(myCourses));
      
      const all = await client.findAllCourses();
      setAllCourses(all);
    } catch (error: any) {
      if (error.response?.status === 401 || error.response?.status === 403) {
        router.push("/Account/Signin");
      }
    }
  };

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    const updatedCourses = courses.map((c) =>
      c._id === course._id ? course : c
    );
    dispatch(setCourses(updatedCourses));
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };

  const onEnrollInCourse = async (courseId: string) => {
    try {
      await client.enrollInCourse(courseId);
      fetchCourses();
    } catch (error) {
      console.error("Error enrolling in course:", error);
    }
  };

  const onUnenrollFromCourse = async (courseId: string) => {
    try {
      await client.unenrollFromCourse(courseId);
      fetchCourses();
    } catch (error) {
      console.error("Error unenrolling from course:", error);
    }
  };

  const isEnrolled = (courseId: string) => {
    return courses.some(c => c._id === courseId);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCheckingAuth(false);
      if (!currentUser) {
        router.push("/Account/Signin");
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentUser, router]);

  useEffect(() => {
    if (!currentUser || isCheckingAuth) return;
    fetchCourses();
  }, [currentUser, isCheckingAuth]);

  if (isCheckingAuth || !currentUser) {
    return null;
  }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      
      {/* Course Creation Section - Only for Faculty/Admin */}
      {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN") && (
        <>
          <h5>
            New Course
            <button 
              onClick={onAddNewCourse}
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
            > 
              Add 
            </button>
            <button 
              onClick={onUpdateCourse}
              className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <TextField 
            id="wd-course-name"
            value={course.name} 
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            className="mb-2" 
            fullWidth
            label="Course Name"
            variant="outlined"
          />
          <TextField 
            id="wd-course-description"
            value={course.description} 
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
            rows={3}
            multiline
            fullWidth
            label="Course Description"
            variant="outlined"
          />
          <hr />
        </>
      )}

      {/* Enrolled Courses */}
      <h2 id="wd-dashboard-published">
        {currentUser.role === "STUDENT" ? "Enrolled Courses" : "Published Courses"} ({courses.length})
      </h2>
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
                  
                  {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN") && (
                    <>
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
                        className="btn btn-danger float-end me-2"
                        id="wd-delete-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          onDeleteCourse(course._id);
                        }}
                      >
                        Delete
                      </button>
                    </>
                  )}
                  
                  {currentUser.role === "STUDENT" && (
                    <button 
                      className="btn btn-danger float-end"
                      onClick={(event) => {
                        event.preventDefault();
                        onUnenrollFromCourse(course._id);
                      }}
                    >
                      Unenroll
                    </button>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* All Available Courses for Enrollment - Students Only */}
      {currentUser.role === "STUDENT" && (
        <>
          <hr className="mt-5" />
          <h2>All Courses</h2>
          <hr />
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {allCourses
              .filter(c => !isEnrolled(c._id))
              .map((course: any) => (
                <div 
                  key={course._id}
                  className="wd-dashboard-course col" 
                  style={{ width: "300px" }}
                >
                  <div className="card">
                    <img 
                      src={course.image || "/images/reactjs.jpg"} 
                      className="card-img-top"
                      alt={course.name}
                      style={{ height: "160px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-nowrap overflow-hidden">
                        {course.name}
                      </h5>
                      <p 
                        className="card-text overflow-hidden text-muted" 
                        style={{ height: "53px" }}
                      >
                        {course.description}
                      </p>
                      <button 
                        className="btn btn-success w-100"
                        onClick={() => onEnrollInCourse(course._id)}
                      >
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}