import { useState } from "react";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [places, setPlaces] = useState([
    {
      name: "Pokhara",
      location: "Pokhara, Nepal",
      time: "3–5 Days",
      expense: "NPR 20,000 – 40,000",
      image: null
    },
    {
      name: "Tilicho Lake",
      location: "Manang, Nepal",
      time: "7–10 Days",
      expense: "NPR 45,000 – 70,000",
      image: null
    }
  ]);

  const [form, setForm] = useState({
    name: "",
    location: "",
    time: "",
    expense: "",
    image: null
  });

  const [editIndex, setEditIndex] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    location: "",
    time: "",
    expense: "",
    image: null
  });

  /* ADD PLACE */
  const handleAdd = () => {
    if (!form.name) return;

    setPlaces([...places, form]);

    setForm({
      name: "",
      location: "",
      time: "",
      expense: "",
      image: null
    });
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

        {/* IMAGE UPLOAD FIELD */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setForm({ ...form, image: e.target.files[0] })
          }
        />

        {/* IMAGE PREVIEW */}
        {form.image && (
          <img
            src={URL.createObjectURL(form.image)}
            alt="Preview"
            style={{
              width: "150px",
              marginTop: "10px",
              borderRadius: "8px"
            }}
          />
        )}

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

                {/* EDIT IMAGE */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      image: e.target.files[0]
                    })
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
                  {p.image && (
                    <img
                      src={URL.createObjectURL(p.image)}
                      alt={p.name}
                      style={{
                        width: "120px",
                        borderRadius: "8px",
                        marginBottom: "8px"
                      }}
                    />
                  )}

                  <strong>{p.name}</strong>
                  <p>{p.location}</p>
                  <small>
                    {p.time} | {p.expense}
                  </small>
                </div>

                <div className="admin-actions">
                  <button
                    className="edit"
                    onClick={() => handleEdit(index)}
                  >
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
