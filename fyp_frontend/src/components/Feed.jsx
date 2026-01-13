import { useState } from "react";
import Profile from "./Profile";
import CreatePost from "./CreatePost";
import Post from "./Post";
import LogoutModal from "./LogoutModal";

export default function Feed() {
  // 🔒 SAFELY LOAD USER
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState(
    storedUser
      ? {
          ...storedUser,
          following: storedUser.following || [],
          followers: storedUser.followers || [],
        }
      : {
          id: "u1",
          name: "Guest User",
          avatar: "https://via.placeholder.com/80",
          following: [],
          followers: [],
        }
  );

  // 🔒 SAFELY LOAD POSTS
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) || []
  );

  const [showLogout, setShowLogout] = useState(false);

  return (
    <>
      {/* LOGOUT BAR */}
      <div className="logout-bar">
        <button className="logout-btn" onClick={() => setShowLogout(true)}>
          Logout
        </button>
      </div>

      {/* FEED */}
      <div className="feed">
        <Profile user={user} setUser={setUser} />
        <CreatePost user={user} posts={posts} setPosts={setPosts} />

        {posts.map(post => (
          <Post
            key={post.id}
            post={post}
            posts={posts}
            setPosts={setPosts}
            user={user}
            setUser={setUser}
          />
        ))}
      </div>

      {/* LOGOUT MODAL */}
      {showLogout && <LogoutModal setShowLogout={setShowLogout} />}
    </>
  );
}
