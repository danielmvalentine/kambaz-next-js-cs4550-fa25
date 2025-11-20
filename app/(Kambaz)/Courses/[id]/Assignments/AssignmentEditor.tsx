"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import * as client from "../../../client";

export default function AssignmentEditor() {
  const params = useParams();
  const cid = params.id as string;
  const aid = params.aid as string;
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const isNew = aid === "new";
  const isFacultyOrAdmin = currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";
  
  const [assignment, setAssignment] = useState<any>({
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
  });

  useEffect(() => {
    // Redirect students away from this page
    if (currentUser && !isFacultyOrAdmin) {
      router.push(`/Courses/${cid}/Assignments`);
      return;
    }

    if (!isNew) {
      const fetchAssignment = async () => {
        const data = await client.findAssignment(aid);
        setAssignment(data);
      };
      fetchAssignment();
    }
  }, [aid, isNew, currentUser, isFacultyOrAdmin]);

  const handleSave = async () => {
    try {
      if (isNew) {
        await client.createAssignmentForCourse(cid, assignment);
      } else {
        await client.updateAssignment(assignment);
      }
      router.push(`/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Error saving assignment:", error);
    }
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  // Don't render if not faculty/admin
  if (!isFacultyOrAdmin) {
    return null;
  }

  return (
    <div className="wd-assignment-editor p-4">
      <h3>{isNew ? "New Assignment" : "Edit Assignment"}</h3>
      
      <div className="mb-3">
        <label className="form-label">Assignment Name</label>
        <input
          type="text"
          className="form-control"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          placeholder="Enter assignment name"
        />
      </div>
      
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          rows={5}
          value={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          placeholder="Enter assignment description"
        />
      </div>
      
      <div className="mb-3">
        <label className="form-label">Points</label>
        <input
          type="number"
          className="form-control"
          value={assignment.points}
          onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) || 0 })}
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
        <button onClick={handleSave} className="btn btn-success">
          Save
        </button>
        <button onClick={handleCancel} className="btn btn-secondary">
          Cancel
        </button>
      </div>
    </div>
  );
}