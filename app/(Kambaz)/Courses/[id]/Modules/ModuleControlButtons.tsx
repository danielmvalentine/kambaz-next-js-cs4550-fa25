import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons({ 
  moduleId, 
  deleteModule, 
  editModule 
}: {
  moduleId: string; 
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="float-end">
      <FaPencil 
        onClick={() => editModule(moduleId)} 
        className="text-primary me-3" 
        style={{ cursor: "pointer" }}
      />
      <FaTrash 
        onClick={() => deleteModule(moduleId)} 
        className="text-danger me-2" 
        style={{ cursor: "pointer" }}
      />
      <GreenCheckmark />
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}