import Link from "next/link";

export default function TOC() {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link className="nav-link" href="/Labs">Labs</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/Labs/Lab1">Lab 1</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/Labs/Lab2">Lab 2</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/Labs/Lab3">Lab 3</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/Labs/Lab4">Lab 4</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/Labs/Lab5">Lab 5</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/Account/Signin">Kambaz</Link>
      </li>
      <li className="nav-item">
        <a 
          className="nav-link" 
          href="https://github.com/danielmvalentine/kambaz-next-js-cs4550-fa25/tree/a5"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Frontend (a5)
        </a>
      </li>
      <li className="nav-item">
        <a 
          className="nav-link" 
          href="https://github.com/danielmvalentine/kambaz-node-server-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Backend (a5)
        </a>
      </li>
      <li className="nav-item">
        <a 
          className="nav-link" 
          href="https://kambaz-node-server-app-w5y2.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Server (Render)
        </a>
      </li>
    </ul>
  );
}