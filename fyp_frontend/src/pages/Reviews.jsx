import { useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState("");

  return (
    <div className="container">
      <h2>Reviews</h2>
      <input
        placeholder="Write review"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setReviews([...reviews, text]);
          setText("");
        }}
      >
        Add
      </button>

      {reviews.map((r, i) => (
        <p key={i}>{r}</p>
      ))}
    </div>
  );
}
