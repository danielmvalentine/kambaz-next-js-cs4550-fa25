"use client";
import { useParams } from "next/navigation";
import { BsGripVertical } from "react-icons/bs";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";

// Inline the actions temporarily to test
import { v4 as uuidv4 } from "uuid";

export default function Modules() {
  const params = useParams();
  const cid = params.id as string;
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Inline action creators for testing
  const addModuleLocal = (payload: { name: string; course: string }) => ({
    type: "modules/addModule",
    payload,
  });

  const editModuleLocal = (moduleId: string) => ({
    type: "modules/editModule",
    payload: moduleId,
  });

  const updateModuleLocal = (module: any) => ({
    type: "modules/updateModule",
    payload: module,
  });

  const deleteModuleLocal = (moduleId: string) => ({
    type: "modules/deleteModule",
    payload: moduleId,
  });

  if (!isMounted) {
    return (
      <div>
        <h3>Loading modules...</h3>
      </div>
    );
  }

  return (
    <div className="wd-modules">
      {/* Simple inline module editor */}
      <div className="mb-4 p-3 border rounded bg-light">
        <h5>
          Add Module
          <button 
            className="btn btn-primary float-end" 
            onClick={() => {
              if (moduleName.trim()) {
                dispatch(addModuleLocal({ name: moduleName, course: cid }));
                setModuleName("");
              }
            }}
            disabled={!moduleName.trim()}
          >
            Add Module
          </button>
        </h5>
        <input
          type="text"
          className="form-control mt-3"
          placeholder="New Module Name"
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && moduleName.trim()) {
              dispatch(addModuleLocal({ name: moduleName, course: cid }));
              setModuleName("");
            }
          }}
        />
      </div>
      
      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <ListGroupItem
              key={module._id}
              className="wd-module p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && (
                  <FormControl 
                    className="w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(
                        updateModuleLocal({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModuleLocal({ ...module, editing: false }));
                      }
                    }}
                    defaultValue={module.name} 
                  />
                )}
                <ModuleControlButtons 
                  moduleId={module._id}
                  deleteModule={(moduleId) => {
                    dispatch(deleteModuleLocal(moduleId));
                  }}
                  editModule={(moduleId) => dispatch(editModuleLocal(moduleId))} 
                />
              </div>
              {module.lessons && module.lessons.length > 0 && (
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