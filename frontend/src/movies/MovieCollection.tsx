import React, { useEffect, useState } from 'react';
import { movie } from '../types/movie';

function MovieCollection() {
  const [movieData, setMovieData] = useState<movie[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const rsp = await fetch('https://localhost:4000/movies');
      const temp = await rsp.json();
      setMovieData(temp);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <table className="table table-bordered table-striped table-hover table-responsive-lg">
        <thead className="font-weight-bold">
          <tr>
            <td>Title</td>
            <td>Category</td>
            <td>Year</td>
            <td>Director</td>
            <td>Rating</td>
            <td>Edited</td>
            <td>Lent To</td>
            <td>Notes</td>
          </tr>
        </thead>
        <tbody>
          {movieData.map((m) => (
            <tr>
              <td>{m.title}</td>
              <td>{m.category}</td>
              <td>{m.year}</td>
              <td>{m.director}</td>
              <td>{m.rating}</td>
              <td>{m.edited}</td>
              <td>{m.lentTo}</td>
              <td>{m.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieCollection;
