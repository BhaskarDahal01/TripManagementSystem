import { useNavigate } from "react-router-dom";

export default function LogoutModal({ setShowLogout }) {
  const navigate = useNavigate();

  const yes = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="modal-overlay">
      <div className="modal glass">
        <h3>Are you sure you want to logout?</h3>

        <div className="modal-actions">
          <button className="yes" onClick={yes}>Yes</button>
          <button className="no" onClick={() => setShowLogout(false)}>No</button>
        </div>
      </div>
    </div>
  );
}
