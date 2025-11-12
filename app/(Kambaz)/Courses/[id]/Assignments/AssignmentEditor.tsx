"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { addAssignment, updateAssignment } from "../reducer";

export default function AssignmentEditor() {
  const params = useParams();
  const cid = params.id as string;
  const aid = params.aid as string;
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const [isMounted, setIsMounted] = useState(false);

  const isNew = aid === "new";
  const existingAssignment = isNew ? null : assignments.find((a: any) => a._id === aid);

  const [assignment, setAssignment] = useState({
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    course: cid,
  });

  useEffect(() => {
    setIsMounted(true);
    if (existingAssignment) {
      setAssignment({
        title: existingAssignment.title || existingAssignment.name || "",
        description: existingAssignment.description || "",
        points: existingAssignment.points || 100,
        dueDate: existingAssignment.dueDate || "",
        availableFrom: existingAssignment.availableFrom || "",
        availableUntil: existingAssignment.availableUntil || "",
        course: cid,
      });
    }
  }, [existingAssignment, cid]);

  const handleSave = () => {
    if (isNew) {
      dispatch(addAssignment(assignment));
    } else {
      dispatch(updateAssignment({ ...assignment, _id: aid }));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wd-assignment-editor">
      <h3>{isNew ? "New Assignment" : "Edit Assignment"}</h3>
      
      <div className="mb-3">
        <label className="form-label">Assignment Name</label>
        <input
          type="text"
          className="form-control"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          rows={4}
          value={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Points</label>
        <input
          type="number"
          className="form-control"
          value={assignment.points}
          onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Due Date</label>
        <input
          type="datetime-local"
          className="form-control"
          value={assignment.dueDate}
          onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Available From</label>
        <input
          type="datetime-local"
          className="form-control"
          value={assignment.availableFrom}
          onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Available Until</label>
        <input
          type="datetime-local"
          className="form-control"
          value={assignment.availableUntil}
          onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
        />
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-success" onClick={handleSave}>
          Save
        </button>
        <button className="btn btn-secondary" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}