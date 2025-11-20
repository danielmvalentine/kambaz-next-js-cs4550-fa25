"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setAssignments } from "./reducer";
import * as client from "../../client";
import Link from "next/link";
import { BsPlus } from "react-icons/bs";

export default function Assignments() {
  const params = useParams();
  const cid = params.id as string;
  const router = useRouter();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid);
    dispatch(setAssignments(assignments));
  };

  const onDeleteAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(setAssignments(assignments.filter((a: any) => a._id !== assignmentId)));
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div className="wd-assignments p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Assignments</h3>
        <button
          onClick={() => router.push(`/Courses/${cid}/Assignments/new`)}
          className="btn btn-danger"
        >
          <BsPlus className="fs-4" /> Assignment
        </button>
      </div>
      
      <ul className="list-group">
        {assignments.map((assignment: any) => (
          <li key={assignment._id} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <Link href={`/Courses/${cid}/Assignments/${assignment._id}`}>
                <strong>{assignment.title}</strong>
              </Link>
              <div>
                <button
                  onClick={() => router.push(`/Courses/${cid}/Assignments/${assignment._id}`)}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteAssignment(assignment._id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </div>
            {assignment.description && (
              <p className="mb-1 text-muted">{assignment.description}</p>
            )}
            <small className="text-muted">Points: {assignment.points}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}