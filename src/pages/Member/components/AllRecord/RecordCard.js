import React from 'react';
import '../../styles/RecordCard.scss';

const RecordCard = () => {
  return (
    <>
      <div className="w-95 h-18 m-3 recordCard">
        <div className="d-flex h-100 w-100">
          <div className="col-3">
            <img
              src="https://media.gq.com.tw/photos/628b2ec34824d010bb0b3cd4/master/pass/165306325038.jpeg"
              alt=""
              className="h-100"
              style={{
                objectFit: 'cover',
                aspectRatio: '1/1',
              }}
            />
          </div>
          <div className="col-9">
            <p className="h-50 p-3">
              That dog has three pairs of Inner 0.0 The whole set of skateboards
            </p>
            <div className="h-50 d-flex justify-content-around">
              <h5>Sat Jul 23 2022 20:58:35</h5>
              <h5>$ 4990</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecordCard;
