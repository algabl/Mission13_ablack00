import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1 className="display-4">Welcome</h1>
      <p>
        Welcome to Joel Hilton's superior film collection, containing only the
        finest films humanity has created.
      </p>
      <img
        src="./img/JoelHiltonHeadshot.jpg"
        alt="A picture of the man himself"
        className="p-2 img-fluid"
      />
      <br />
      <Link to="/moviecollection" className="btn btn-primary">
        View the Collection
      </Link>
    </div>
  );
}

export default Home;
