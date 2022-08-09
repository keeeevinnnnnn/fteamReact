import '../style/LessonSelectTime.scss';

import Form from 'react-bootstrap/Form';

function LessonSelectTime() {
  return (
    <div className="w-40 ">
      <Form.Select aria-label="Default select example ">
        <option>TIME</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </div>
  );
}

export default LessonSelectTime;
