import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">TripNest</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/login" className="login-btn">Login</Link>
      </div>
    </nav>
  );
}
