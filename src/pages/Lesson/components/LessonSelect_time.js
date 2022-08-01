import '../style/LessonSelect_time.scss';

import Form from 'react-bootstrap/Form';

function LessonSelect_time() {
  return (
    <div className="w-35 ">
      <Form.Select aria-label="Default select example ">
        <option disabled={true}>TIME</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </div>
  );
}

export default LessonSelect_time;
