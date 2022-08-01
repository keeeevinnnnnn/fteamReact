import '../style/LessonSelect_price.scss';

import Form from 'react-bootstrap/Form';

function LessonSelect_price() {
  return (
    <div className="w-35 ">
      <Form.Select aria-label="Default select example">
        <option disabled={true}>PRICE</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </div>
  );
}

export default LessonSelect_price;
