"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function AssignmentEditor() {
  const params = useParams();
  const id = params.id as string;
  const aid = params.aid as string;
  const [assignment, setAssignment] = useState<any>(null);

  useEffect(() => {
    if (aid === "new") {
      setAssignment({
        title: "New Assignment",
        description: "",
        points: 100,
        dueDate: "",
        availableFrom: "",
        availableUntil: ""
      });
    } else {
      import("../../../../Database/assignments.json").then((data) => {
        const found = data.default.find((a: any) => a._id === aid);
        setAssignment(found);
      });
    }
  }, [aid]);

  if (!assignment) return <div>Loading...</div>;

  return (
    <div id="wd-assignments-editor" className="p-3">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          id="wd-name"
          className="form-control"
          value={assignment.title}
          readOnly
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">
          Description
        </label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={5}
          value={assignment.description}
          readOnly
        />
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-points" className="form-label">
            Points
          </label>
          <input
            id="wd-points"
            type="number"
            className="form-control"
            value={assignment.points}
            readOnly
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-due-date" className="form-label">
            Due Date
          </label>
          <input
            id="wd-due-date"
            type="date"
            className="form-control"
            value={assignment.dueDate}
            readOnly
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-available-from" className="form-label">
            Available From
          </label>
          <input
            id="wd-available-from"
            type="date"
            className="form-control"
            value={assignment.availableFrom}
            readOnly
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-available-until" className="form-label">
            Available Until
          </label>
          <input
            id="wd-available-until"
            type="date"
            className="form-control"
            value={assignment.availableUntil}
            readOnly
          />
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end">
        <Link href={`/Courses/${id}/Assignments`}>
          <button className="btn btn-secondary me-2">Cancel</button>
        </Link>
        <Link href={`/Courses/${id}/Assignments`}>
          <button className="btn btn-danger">Save</button>
        </Link>
      </div>
    </div>
  );
}