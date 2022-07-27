import '../style/Lesson_card.scss';

const Lesson_card = () => {
  return (
    <>
      <div className=" cooler_lesson_card w-100  h-20 d-flex border-bottom">
        <div className="w-50">
          <h5>Key Glock - Ambition For Cash</h5>
          <p className="cooler_lesson_card_name text-center mx-2 ">Nike</p>
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
        <div className=" w-10 d-flex  align-items-end justify-content-around">
          <span className="cooler_lesson_card_quota fw-bold">剩餘名額</span>

          <span className="cooler_gray ">8</span>
        </div>
        <div className=" w-40 d-flex ">
          <div className="w-50  d-flex justify-content-end align-items-end flex-column justify-content-between">
            <div className="cooler_gray">Popping</div>
            <div className="cooler_gray">3000</div>
          </div>
          <div className="w-50 h-100 d-flex align-items-center justify-content-center  m-auto">
            <div className=" ms-4 w-50 h-50 cooler_lesson_card_btn  d-flex align-items-center justify-content-center">
              <a href="#/" className=" ">
                BOOK
              </a>
            </div>
            <div className="w-50 h-100 d-flex justify-content-end">
              <div className="cooler_lesson_card_collect w-50  ">
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
