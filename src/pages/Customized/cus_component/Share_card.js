import React from 'react';
import { Link } from 'react-router-dom';

function Share_card() {
  return (
    <>
      <div class="share-card-con p-3 ">
          <div className="share-card">
            <div class="board">
              <img src="/imgs/Customized/cus_sk_01.png" />
            </div>
            <div class="share-right ">
              <h3>My Cool Board</h3>
              <div class="share-creator">
                <div className="share-ava">
                  <img src="/imgs/Customized/cus_bg_05.jpg" />
                </div>
                <div class="share-name">
                  <h6>Loren Lin</h6>
                </div>
              </div>
              <Link to={'/customized/create/detail'}>
                <button className="viv-btn mt-5">View</button>
              </Link>
            </div>
          </div>
      </div>
    </>
  );
}

export default Share_card;
