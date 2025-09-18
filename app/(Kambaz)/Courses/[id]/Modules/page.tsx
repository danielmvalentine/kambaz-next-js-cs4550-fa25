"use client";
import { useState } from "react";

export default function Modules() {
  const [allCollapsed, setAllCollapsed] = useState(false);

  return (
    <div>
      {/* Simple buttons */}
      <button onClick={() => setAllCollapsed(true)}>Collapse All</button>
      <button onClick={() => setAllCollapsed(false)}>View Progress</button>
      
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          {!allCollapsed && (
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
          )}
        </li>
        
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          {!allCollapsed && (
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2</li>
                </ul>
              </li>
            </ul>
          )}
        </li>
        
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          {!allCollapsed && (
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">ASSIGNMENT</span>
                <ul className="wd-content">
                  <li className="wd-content-item">A1 - Environment Setup</li>
                </ul>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}