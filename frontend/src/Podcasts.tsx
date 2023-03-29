import React from 'react';

function Podcasts() {
  return (
    <div className="col">
      <div className="card shadow-lg">
        <a href="https://baconsale.com">
          <img
            className="card-img-top p-3"
            src="./img/baconsale3.png.webp"
            alt="baconsale podcast"
          />
        </a>
        <div className="card-body">
          <a className="btn btn-primary" href="https://baconsale.com/">
            Check out my podcast!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Podcasts;
