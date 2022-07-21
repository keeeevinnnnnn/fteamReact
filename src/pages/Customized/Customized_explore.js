import React from 'react';
import { Link } from 'react-router-dom';

function Customized_explore() {
  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0">
          大概是分享牆喔

          <div className="row">
            <div className="card col-12 col-sm-4">
              <h3>Prject Name</h3>
              有商品再來map
              <Link to={'/customized/create/detail'}>
                <button className="btn btn-dark">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customized_explore;
