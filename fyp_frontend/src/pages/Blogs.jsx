import Feed from "../components/Feed";

export default function Blogs() {
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Guest",
    avatar: "https://via.placeholder.com/80",
    id: "guest",
  };

  return (
    <div style={{ padding: "20px" }}>
      <Feed user={user} setUser={() => {}} />
    </div>
  );
}
