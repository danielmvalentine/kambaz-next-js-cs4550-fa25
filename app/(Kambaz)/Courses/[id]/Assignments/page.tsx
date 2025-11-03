"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Assignments() {
  const params = useParams();
  const id = params.id as string;
  const [assignments, setAssignments] = useState<any[]>([]);

  useEffect(() => {
    import("../../../Database/assignments.json").then((data) => {
      setAssignments(data.default);
    });
  }, []);

  const courseAssignments = assignments.filter((assignment: any) => assignment.course === id);

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <span className="input-group-text bg-white">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Assignments"
          />
        </div>
        <div>
          <button className="btn btn-secondary me-2">
            <BsPlus className="fs-4" /> Group
          </button>
          <Link href={`/Courses/${id}/Assignments/new`}>
            <button className="btn btn-danger">
              <BsPlus className="fs-4" /> Assignment
            </button>
          </Link>
        </div>
      </div>

      <ul className="list-group rounded-0">
        <li className="list-group-item p-3 ps-1 bg-secondary">
          <BsGripVertical className="me-2 fs-3" />
          ASSIGNMENTS
        </li>

        {courseAssignments.map((assignment: any) => (
          <li key={assignment._id} className="list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <Link
              href={`/Courses/${id}/Assignments/${assignment._id}`}
              className="text-decoration-none text-dark fw-bold"
            >
              {assignment.title}
            </Link>
            <div className="text-muted small">
              <span className="text-danger">Multiple Modules</span> |{" "}
              <strong>Not available until</strong> {assignment.availableFrom} |{" "}
              <strong>Due</strong> {assignment.dueDate} | {assignment.points} pts
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}