import { Link } from "react-router-dom";

export function TeamNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="mcqueen">Team - McQueen</Link>
        </li>
        <li>
          <Link to="sally">Team - Sally</Link>
        </li>
        <li>
          <Link to="..">.. Route</Link>
        </li>
        <li>
          <Link to=".." relative="path">
            .. Path
          </Link>
        </li>
        <li>
          <Link to=".">. Route</Link>
        </li>
        <li>
          <Link to="." relative="path">
            . Path
          </Link>
        </li>
      </ul>
    </nav>
  );
}
