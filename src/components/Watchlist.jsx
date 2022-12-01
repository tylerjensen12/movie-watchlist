import React from "react";
import MovieCard from "./MovieCard";

function Watchlist({ list }) {
  const movieDisplay = list.map((movie, index) => {
    return <MovieCard movie={movie} list={list} />;
  });

  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
}

export default Watchlist;
