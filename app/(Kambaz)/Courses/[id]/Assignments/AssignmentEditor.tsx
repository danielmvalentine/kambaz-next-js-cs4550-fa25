"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import * as client from "../../client";

export default function AssignmentEditor() {
  const { id: cid, aid } = useParams();
  const router = useRouter();
  const isNew = aid === "new";
  
  const [assignment, setAssignment] = useState<any>({
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
  });

  useEffect(() => {
    if (!isNew) {
      const fetchAssignment = async () => {
        const data = await client.findAssignment(aid as string);
        setAssignment(data);
      };
      fetchAssignment();
    }
  }, [aid, isNew]);

  const handleSave = async () => {
    if (isNew) {
      await client.createAssignmentForCourse(cid as string, assignment);
    } else {
      await client.updateAssignment(assignment);
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div className="wd-assignment-editor">
      <h3>{isNew ? "New Assignment" : "Edit Assignment"}</h3>
      
      <div className="mb-3">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </div>
      
      <div className="mb-3">
        <label>Description</label>
        <textarea
          className="form-control"
          value={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        />
      </div>
      
      <div className="mb-3">
        <label>Points</label>
        <input
          type="number"
          className="form-control"
          value={assignment.points}
          onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
        />
      </div>
      
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
      <button onClick={() => router.push(`/Courses/${cid}/Assignments`)} className="btn btn-secondary">
        Cancel
      </button>
    </div>
  );
}