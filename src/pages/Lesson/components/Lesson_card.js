import '../style/Lesson_card.scss';

const Lesson_card = () => {
  return (
    <>
      <div className=" col-sm-12 col-12 cooler_lesson_card   h-20 d-flex flex-wrap border-bottom">
        <div className=" col-sm-6 col-12">
          <div className="cooler_lesson_card_title_collect d-flex">
            <h5 className="cooler_lesson_card_title w-90">
              Key Glock - Ambition For Cash
            </h5>
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
          <p className="cooler_lesson_card_name text-center m-0  ">Nike</p>
          <div className=" cooler_gray">
            <span>8</span>
            <span>/</span>
            <span>25</span>
            <span className=" p-1">-</span>
            <span>9</span>
            <span>/</span>
            <span>25</span>
          </div>
        </div>
        <div className=" cooler_lesson_card_quota_number col-sm-2 col-12 d-flex  align-items-end justify-content-around">
          <span className="cooler_lesson_card_quota fw-bold">剩餘名額</span>

          <span className="cooler_gray ">8</span>
        </div>
        <div className="  col-sm-4 col-12 d-flex ">
          <div className="cooler_lesson_card_category_price w-50 h-100 d-flex  flex-column justify-content-between align-items-center ">
            <p className=" cooler_lesson_card_category cooler_gray ">Popping</p>
            <p className="cooler_lesson_card_price cooler_gray h-13 ">3000</p>
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
    </>
  );
};

export default Lesson_card;
