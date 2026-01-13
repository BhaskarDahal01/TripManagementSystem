import { useState } from "react";
import FollowButton from "./FollowButton";

export default function Post({ post, posts, setPosts, user, setUser }) {
  const [menu, setMenu] = useState(false);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(post.text);

  const like = () => {
    const updated = posts.map((p) =>
      p.id === post.id
        ? {
            ...p,
            likes: p.likes.includes(user.id)
              ? p.likes.filter((id) => id !== user.id)
              : [...p.likes, user.id],
          }
        : p
    );

    setPosts(updated);
    localStorage.setItem("posts", JSON.stringify(updated));
  };

  const remove = () => {
    const updated = posts.filter((p) => p.id !== post.id);
    setPosts(updated);
    localStorage.setItem("posts", JSON.stringify(updated));
  };

  const saveEdit = () => {
    const updated = posts.map((p) =>
      p.id === post.id ? { ...p, text } : p
    );

    setPosts(updated);
    localStorage.setItem("posts", JSON.stringify(updated));
    setEdit(false);
  };

  return (
    <div className="post glass">
      <div className="post-header">
        <img src={post.user.avatar} />
        <strong>{post.user.name}</strong>

        {post.user.id !== user.id && (
          <FollowButton user={user} setUser={setUser} targetId={post.user.id} />
        )}

        {post.user.id === user.id && (
          <div className="menu">
            <span onClick={() => setMenu(!menu)}>⋮</span>

            {menu && (
              <div className="menu-box">
                <button onClick={() => setEdit(true)}>Edit</button>
                <button onClick={remove}>Delete</button>
              </div>
            )}
          </div>
        )}
      </div>

      {edit ? (
        <>
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <p>{post.text}</p>
      )}

      {post.image && <img src={post.image} className="post-img" />}

      <button className="like-btn" onClick={like}>
        ❤️ {post.likes.length}
      </button>
    </div>
  );
}
