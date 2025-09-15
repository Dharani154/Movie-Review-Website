import React from "react";

export default function Watchlist({ watchlist, toggleWatchlist }) {
  return (
    <div className="watchlist">
      <h2>📌 Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies in watchlist.</p>
      ) : (
        <ul>
          {watchlist.map((movie) => (
            <li key={movie.id}>
              {movie.title}
              <button onClick={() => toggleWatchlist(movie)}>❌ Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
