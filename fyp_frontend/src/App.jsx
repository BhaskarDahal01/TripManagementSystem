import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Packages from "./pages/Packages.jsx";
import Blogs from "./pages/Blogs.jsx";
import Reviews from "./pages/Reviews.jsx";
import Videos from "./pages/Videos.jsx";

/* ✅ ADMIN DASHBOARD */
import AdminDashboard from "./admin/AdminDashboard.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/videos" element={<Videos />} />

        {/* ✅ ADMIN ROUTE */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
