import { Offcanvas } from 'react-bootstrap';
import { useState } from 'react';
import './Offcanvas.scss';
import zIndex from '@mui/material/styles/zIndex';
import { height } from '@mui/system';

export default function OffcanvasTest() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Offcanvas placement={'end'} show={show} onHide={handleClose}>
        <div className="carts-all-step-wrap">
          <div className="w-100 d-flex justify-content-end close-btn-wrap">
            <Offcanvas.Header closeButton></Offcanvas.Header>
          </div>
          {/* previous step */}
          <div className="back-step">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 w-100 h-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ccc"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </div>
          <div className="check-body-list-wrap w-100 h-100">
            <div className="check-body-list">
              <div className="distribution-page"></div>
              <div className="credit-detail-page"></div>
              <div className="check-compele-page"></div>
            </div>
          </div>
        </div>
      </Offcanvas>
      <button className="btn checkout-btn" onClick={handleShow}>
        CHECKOUT
      </button>
    </div>
  );
}
