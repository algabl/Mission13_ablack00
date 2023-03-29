import React from 'react';
import data from './MovieData.json';

const MDS = data.MovieData;

function MovieCollection() {
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
          </tr>
        </thead>
        <tbody>
          {MDS.map((m) => (
            <tr>
              <td>{m.Title}</td>
              <td>{m.Category}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieCollection;
