export default function FollowButton({ user, setUser, targetId }) {
  const isFollowing = user.following.includes(targetId);

  const toggle = () => {
    let updated;

    if (isFollowing) {
      updated = {
        ...user,
        following: user.following.filter(id => id !== targetId),
        followers: user.followers.filter(id => id !== targetId),
      };
    } else {
      updated = {
        ...user,
        following: [...user.following, targetId],
        followers: [...user.followers, targetId],
      };
    }

    localStorage.setItem("user", JSON.stringify(updated));
    setUser(updated);
  };

  return (
    <button
      className={`follow-btn ${isFollowing ? "following" : ""}`}
      onClick={toggle}
    >
      {isFollowing ? "✓ Following" : "+ Follow"}
    </button>
  );
}
