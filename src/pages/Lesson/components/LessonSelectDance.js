import '../style/LessonSelectDance.scss';

import Form from 'react-bootstrap/Form';

function LessonSelectDance(props) {
  const {
    lessonRaw,
    setLessonRaw,
    lessonDisplay,
    setLessonDisplay,
    lessonSelectDance,
    setLessonSelectDance,
  } = props;
  console.log('lessonRaw', lessonRaw);
  return (
    <div className="w-40">
      <Form.Select aria-label="Default select example">
        <option>DANCE</option>
        {lessonSelectDance.map((v, i) => {
          return (
            <option
              key={v.sid}
              value={v.type}
              onChange={(e) => {
                setLessonSelectDance(e.target.value);
                
                if (setLessonDisplay) {
                  const newLessonDisplay = lessonRaw.filter((v, i) =>
                    v.type.includes(setLessonSelectDance)
                  );

                  // setlessonSelectDance(newLessonDisplay);
                } else {
                  // reset
                  // setlessonSelectDance(lessonRaw);
                }
              }}
            >
              {v.type}
            </option>
          );
        })}
        ;
      </Form.Select>
    </div>
  );
}

export default LessonSelectDance;
