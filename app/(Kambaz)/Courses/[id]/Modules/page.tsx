"use client";
import { useParams } from "next/navigation";
import { BsGripVertical } from "react-icons/bs";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function Modules() {
  const params = useParams();
  const id = params.id as string;
  const [modules, setModules] = useState<any[]>([]);

  useEffect(() => {
    // Dynamically import the JSON
    import("../../../Database/modules.json").then((data) => {
      setModules(data.default);
    });
  }, []);

  return (
    <div>
      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module: any) => module.course === id)
          .map((module: any) => (
            <ListGroupItem 
              key={module._id}
              className="wd-module p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {module.name}
              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <ListGroupItem 
                      key={lesson._id}
                      className="wd-lesson p-3 ps-1 border-gray"
                    >
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}