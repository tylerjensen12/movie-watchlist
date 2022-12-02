import React from "react";
import MovieCard from "./MovieCard";

function MovieScreen({
  movieList,
  list,
  page,
  setPage,
  addMovie,
  removeMovie,
}) {
  const movieDisplay = movieList.map((movie, index) => {
    return (
      <MovieCard
        key={movie.id}
        movie={movie}
        addMovie={addMovie}
        list={list}
        removeMovie={removeMovie}
      />
    );
  });

  const decrement = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };
  const increment = () => setPage(page + 1);
  return (
    <div className="page">
      <h1>Tyler's Movie Theatre</h1>
      <h3>Add a movie to your watchlist!</h3>
      <div className="btn-container">
        <button onClick={decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
      <br />
      <div className="btn-container">
        <button onClick={decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
    </div>
  );
}

export default MovieScreen;
