import React from "react";
import Review from "./Review";

export default function MovieModal({ movie, onClose, toggleWatchlist, isInWatchlist }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{movie.title}</h2>
        <img src={movie.poster} alt={movie.title} className="modal-poster" />
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Year:</strong> {movie.year}</p>
        <p>{movie.description}</p>
        <button onClick={() => toggleWatchlist(movie)}>
          {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
        </button>
        <Review movieId={movie.id} />
      </div>
    </div>
  );
}
