import React, { useState } from "react";

export default function ReviewForm({ movieId }) {
  const [reviews, setReviews] = useState(
    JSON.parse(localStorage.getItem(`reviews-${movieId}`)) || []
  );
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;

    const newReviews = [...reviews, text];
    setReviews(newReviews);
    localStorage.setItem(`reviews-${movieId}`, JSON.stringify(newReviews));
    setText("");
  };

  return (
    <div className="review-section">
      <h3>Reviews</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit Review</button>
      </form>
      <ul>
        {reviews.map((rev, idx) => (
          <li key={idx}>{rev}</li>
        ))}
      </ul>
    </div>
  );
}
