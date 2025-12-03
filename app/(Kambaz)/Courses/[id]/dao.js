import model from "./model.js";

export default function CoursesDao(db) {
    const findAllCourses = () => {
      return db.courses;
    };
    
    const findCoursesForEnrolledUser = (userId) => {
      const { courses, enrollments } = db;
      const enrolledCourses = courses.filter((course) =>
        enrollments.some((enrollment) => 
          enrollment.user === userId && enrollment.course === course._id
        )
      );
      return enrolledCourses;
    };
    
    return {
      findAllCourses,
      findCoursesForEnrolledUser,
    };
  }