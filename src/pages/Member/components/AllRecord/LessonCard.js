import React from 'react';
import '../../styles/LessonCard.scss';

const LessonCard = () => {
  return (
    <>
      <div className="m-2 lessonCard m-3">
        <div className="d-flex align-items-center text-center lessonhead">
          <p className="col-4 m-0">Collapse - Eminem / Baiba Klints</p>
          <p className="col-4 m-0">
            <span>Begin</span> 2022-09-25
          </p>
          <p className="col-4 m-0">
            <span>End</span> 2022-10-25
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center lessonbody">
          <table class="table w-90">
            <thead>
              <tr>
                <th scope="col">Teacher</th>
                <th scope="col">Location</th>
                <th scope="col">Quota</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nike</td>
                <td>忠孝館</td>
                <td>8</td>
                <td>$ 2700</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LessonCard;
