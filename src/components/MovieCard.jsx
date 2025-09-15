import React from "react";

export default function MovieCard({ movie, onClick, toggleWatchlist, isInWatchlist }) {
  return (
    <div className="movie-card">
      <img
        src={movie.poster}
        alt={movie.title}
        className="movie-poster"
        onClick={onClick}
      />
      

      <h3>{movie.title}</h3>
      <p className="description">{movie.description}</p>
      <button onClick={() => toggleWatchlist(movie)}>
        {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
      </button>
    </div>
  );
}
