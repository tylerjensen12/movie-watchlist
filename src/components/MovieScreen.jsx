import React from "react";
import MovieCard from "./MovieCard";

function MovieScreen({movieList, list, page, setPage, addMovie}) {
    const movieDisplay = movieList.map((movie, index) => {
        return <MovieCard movie={movie} addMovie={addMovie} list={list}/>
    })
  return (
    <div className="page">
      <h1>Tyler's Movie Theatre</h1>
      <h3>Add a movie to your watchlist!</h3>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
}

export default MovieScreen