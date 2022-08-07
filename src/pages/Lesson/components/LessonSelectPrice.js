import '../style/LessonSelectPrice.scss';

import Form from 'react-bootstrap/Form';

function LessonSelectPrice() {
  return (
    <div className="w-35 ">
      <Form.Select aria-label="Default select example">
        <option>PRICE</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </div>
  );
}

export default LessonSelectPrice;
