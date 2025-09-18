import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/600/Assignments/1" className="wd-assignment-link">
            A1 - The Farm
          </Link>
          <br />
          <span>Due: Sep 18 at 11:59pm</span>
        </li>
        
        <li className="wd-assignment-list-item">
          <Link href="/Courses/600/Assignments/2" className="wd-assignment-link">
            A2 - The Beach
          </Link>
          <br />
          <span>Due: Sep 25 at 11:59pm</span>
        </li>
        
        <li className="wd-assignment-list-item">
          <Link href="/Courses/600/Assignments/3" className="wd-assignment-link">
            A3 - The Town
          </Link>
          <br />
          <span>Due: Oct 2 at 11:59pm</span>
        </li>
      </ul>
    </div>
  );
}