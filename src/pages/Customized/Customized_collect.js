import React from 'react';
import { Link } from 'react-router-dom';

function Customized_collect() {
  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0">
          <div>
            <div className="border-bottom border-secondary p-5">
              <Link to={'/customized/create'}>
                <button className="viv-btn">Create</button>
              </Link>
            </div>
            <div className="">
            <h2 className='m-5'>Privious Creations</h2>
              <div className="row m-5">
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
        </div>
      </div>
    </>
  );
}

export default Customized_collect;
