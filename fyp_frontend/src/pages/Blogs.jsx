import { useState } from "react";

export default function Blogs() {
  const [show, setShow] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addBlog = () => {
    setBlogs([...blogs, { title, desc }]);
    setShow(false);
    setTitle("");
    setDesc("");
  };

  return (
    <div className="container">
      <h2>Blogs</h2>
      <button onClick={() => setShow(true)}>Add Blog</button>

      {show && (
        <div className="modal">
          <input
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
          <button onClick={addBlog}>Save</button>
        </div>
      )}

      {blogs.map((b, i) => (
        <div key={i} className="card">
          <h3>{b.title}</h3>
          <p>{b.desc}</p>
        </div>
      ))}
    </div>
  );
}
