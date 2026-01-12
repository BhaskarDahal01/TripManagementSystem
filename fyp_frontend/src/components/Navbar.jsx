import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>Trip Planner</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
