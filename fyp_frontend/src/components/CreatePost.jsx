import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function CreatePost({ user, posts, setPosts }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const upload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const addPost = () => {
    if (!text && !image) return;

    const newPost = {
      id: uuid(),
      user,
      text,
      image,
      likes: [],
      createdAt: Date.now(),
    };

    const updated = [newPost, ...posts];
    setPosts(updated);
    localStorage.setItem("posts", JSON.stringify(updated));
    cancel();
  };

  const cancel = () => {
    setText("");
    setImage("");
  };

  return (
    <div className="glass post">
      <textarea
        placeholder="Describe the place..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {image && <img src={image} className="post-img" />}

      <div className="post-actions">
        <input type="file" onChange={upload} />

        <div>
          <button className="cancel-btn" onClick={cancel}>
            Cancel
          </button>
          <button className="post-btn" onClick={addPost}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
