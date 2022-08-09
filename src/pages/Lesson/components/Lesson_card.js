// import { render } from '@testing-library/react';
import React, { Fragment } from 'react';
import '../style/Lesson_card.scss';

function Lesson_card(props) {
  const {  lessonDisplay } = props;
  // console.log('Lesson_card:', lessonDisplay);
  return lessonDisplay.map((v, i) => {
    return (
      // <Fragment >
      <div
        key={v.sid}
        className=" col-sm-11 col-12 cooler_lesson_card   h-20 d-flex flex-wrap border-bottom "
      >
        <div className=" col-sm-6 col-12">
          <div className="cooler_lesson_card_title_collect d-flex">
            <h5 className="cooler_lesson_card_title w-90">{v.name}</h5>
            <div className="cooler_lesson_card_collect w-10   d-flex justify-content-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-1 w-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <p className="cooler_lesson_card_name text-center m-0  ">
            {v.teacher_name}
          </p>
          <div className=" cooler_gray">
            {/* <p>{v.duringtime_begin}</p> */}
            {/* <p>{v.duringtime_end}</p> */}
            <span>{v.duringtime_begin.slice(5, 7)}</span>
            <span>/</span>
            <span>{v.duringtime_begin.slice(8, 10)}</span>
            <span className=" p-1">-</span>
            <span>{v.duringtime_end.slice(5, 7)}</span>
            <span>/</span>
            <span>{v.duringtime_end.slice(8, 10)}</span>
          </div>
        </div>
        <div className=" cooler_lesson_card_quota_number col-sm-2 col-12 d-flex  align-items-end justify-content-around">
          <span className="cooler_lesson_card_quota fw-bold">剩餘名額</span>

          <span className="cooler_gray ">{v.quota}</span>
        </div>
        <div className="  col-sm-4 col-12 d-flex ">
          <div className="cooler_lesson_card_category_price w-50 h-100 d-flex  flex-column justify-content-between align-items-center ">
            <p className=" cooler_lesson_card_category cooler_gray ">
              {v.type}
            </p>
            <p className="cooler_lesson_card_price cooler_gray h-13 ">
              {v.price}
            </p>
          </div>
          <div className="w-50 h-100 d-flex align-items-center justify-content-center  ">
            <div className="w-50 h-50 ms-4 col-sm-6 col-4  cooler_lesson_card_btn  d-flex align-items-center justify-content-center">
              <button className=" cooler_lesson_card_book">BOOK</button>
            </div>
            <div className=" col-sm-6 h-100 d-flex justify-content-end">
              <div className="cooler_lesson_card_collect w-70  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-1 w-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      // </Fragment>
    );
  });
}
export default Lesson_card;
