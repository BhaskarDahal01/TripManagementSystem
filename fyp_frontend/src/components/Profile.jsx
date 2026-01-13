import FollowButton from "./FollowButton";

export default function Profile({ user, setUser }) {
  const upload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const updated = {
        ...user,
        avatar: reader.result,
        followers: user.followers || [],
        following: user.following || [],
      };

      localStorage.setItem("user", JSON.stringify(updated));
      setUser(updated);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="profile glass">
      {/* TOP RIGHT FOLLOW */}
      <div className="profile-top">
        <FollowButton
          user={user}
          setUser={setUser}
          targetId="demo-user"
        />
      </div>

      <img
        src={user.avatar || "https://via.placeholder.com/80"}
        alt="Profile"
      />

      <h3>{user.name || "User"}</h3>

      <div className="stats">
        <span>
          <b>{user.followers?.length || 0}</b> Followers
        </span>
        <span>
          <b>{user.following?.length || 0}</b> Following
        </span>
      </div>

      <input type="file" onChange={upload} />
    </div>
  );
}
