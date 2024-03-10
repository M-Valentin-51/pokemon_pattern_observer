import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav>
        <Link to={"/list"}> List</Link>
      </nav>

      <p>Home</p>
    </div>
  );
}
