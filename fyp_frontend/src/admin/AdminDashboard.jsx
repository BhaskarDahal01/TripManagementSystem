import { useState } from "react";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [places, setPlaces] = useState([
    {
      name: "Pokhara",
      location: "Pokhara, Nepal",
      time: "3–5 Days",
      expense: "NPR 20,000 – 40,000"
    },
    {
      name: "Tilicho Lake",
      location: "Manang, Nepal",
      time: "7–10 Days",
      expense: "NPR 45,000 – 70,000"
    },
    {
      name: "Upper Mustang",
      location: "Mustang, Nepal",
      time: "7–9 Days",
      expense: "NPR 60,000 – 90,000"
    },
    {
      name: "Chitwan National Park",
      location: "Chitwan, Nepal",
      time: "2–3 Days",
      expense: "NPR 15,000 – 30,000"
    },
    {
      name: "Manang",
      location: "Manang, Nepal",
      time: "6–8 Days",
      expense: "NPR 35,000 – 55,000"
    },
    {
      name: "Rara Lake",
      location: "Mugu, Nepal",
      time: "7–9 Days",
      expense: "NPR 50,000 – 80,000"
    }
  ]);

  const [form, setForm] = useState({
    name: "",
    location: "",
    time: "",
    expense: ""
  });

  const [editIndex, setEditIndex] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    location: "",
    time: "",
    expense: ""
  });

  /* ADD PLACE */
  const handleAdd = () => {
    if (!form.name) return;
    setPlaces([...places, form]);
    setForm({ name: "", location: "", time: "", expense: "" });
  };

  /* DELETE */
  const handleDelete = (index) => {
    setPlaces(places.filter((_, i) => i !== index));
  };

  /* START EDIT */
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditForm(places[index]);
  };

  /* UPDATE */
  const handleUpdate = () => {
    const updated = [...places];
    updated[editIndex] = editForm;
    setPlaces(updated);
    setEditIndex(null);
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>

      {/* ADD DESTINATION */}
      <div className="admin-card">
        <h2>Add Destination</h2>

        <input
          placeholder="Place Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
        <input
          placeholder="Duration"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />
        <input
          placeholder="Expense"
          value={form.expense}
          onChange={(e) => setForm({ ...form, expense: e.target.value })}
        />

        <button onClick={handleAdd}>Add Place</button>
      </div>

      {/* LIST */}
      <div className="admin-card">
        <h2>All Destinations</h2>

        {places.map((p, index) => (
          <div className="admin-row" key={index}>
            {editIndex === index ? (
              /* EDIT MODE */
              <div className="edit-form">
                <input
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm({ ...editForm, name: e.target.value })
                  }
                />
                <input
                  value={editForm.location}
                  onChange={(e) =>
                    setEditForm({ ...editForm, location: e.target.value })
                  }
                />
                <input
                  value={editForm.time}
                  onChange={(e) =>
                    setEditForm({ ...editForm, time: e.target.value })
                  }
                />
                <input
                  value={editForm.expense}
                  onChange={(e) =>
                    setEditForm({ ...editForm, expense: e.target.value })
                  }
                />

                <div className="admin-actions">
                  <button className="edit" onClick={handleUpdate}>
                    Update
                  </button>
                  <button
                    className="delete"
                    onClick={() => setEditIndex(null)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              /* VIEW MODE */
              <>
                <div>
                  <strong>{p.name}</strong>
                  <p>{p.location}</p>
                  <small>{p.time} | {p.expense}</small>
                </div>

                <div className="admin-actions">
                  <button className="edit" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
