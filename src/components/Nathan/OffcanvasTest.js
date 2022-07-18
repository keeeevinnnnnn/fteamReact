import { Offcanvas } from 'react-bootstrap';
import { useState } from 'react';

export default function OffcanvasTest() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Offcanvas placement={'end'} show={show} onHide={handleClose}>
        <div
          style={{ width: '100%', height: '100%', backgroundColor: '#464240' }}
        >
          <div className="w-100 d-flex justify-content-end">
            <Offcanvas.Header closeButton></Offcanvas.Header>
          </div>
        </div>
      </Offcanvas>
      <button className="btn checkout-btn" onClick={handleShow}>
        CHECKOUT
      </button>
    </div>
  );
}
