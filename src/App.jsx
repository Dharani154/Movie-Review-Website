import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieCard";
import MovieModal from "./components/MovieModal";
import Watchlist from "./components/Watchlist";
import MoviesData from "./data/Movies";

export default function App() {
  const [Movies, setMovies] = useState(MoviesData);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [watchlist, setWatchlist] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term === "") {
      setMovies(MoviesData);
    } else {
      setMovies(
        MoviesData.filter((m) =>
          m.title.toLowerCase().includes(term.toLowerCase())
        )
      );
    }
  };

  const toggleWatchlist = (movie) => {
    if (watchlist.find((w) => w.id === movie.id)) {
      setWatchlist(watchlist.filter((w) => w.id !== movie.id));
    } else {
      setWatchlist([...watchlist, movie]);
    }
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <h2 className="section-title">Top Movie List</h2>
      <div className="movie-grid">
        {Movies.map((movie) => (
          <MovieList
            key={movie.id}
            movie={movie}
            onClick={() => setSelectedMovie(movie)}
            toggleWatchlist={toggleWatchlist}
            isInWatchlist={watchlist.some((w) => w.id === movie.id)}
          />
        ))}
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          toggleWatchlist={toggleWatchlist}
          isInWatchlist={watchlist.some((w) => w.id === selectedMovie.id)}
        />
      )}

      <Watchlist watchlist={watchlist} toggleWatchlist={toggleWatchlist} />
    </div>
  );
}