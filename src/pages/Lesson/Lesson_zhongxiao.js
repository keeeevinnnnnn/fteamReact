import './style/Lesson_zhongxiao.scss';
// import l01 from './imgs/lesson_imgs/l01.jpg';

const Lesson_zhongxiao = () => {
  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0">
          <div className="w-100 h-100 d-flex">
            <div className="col-md-3 flex-wrap col-12 h-100 d-flex justify-content-center cooler-card-wrap align-items-center">
              <div className="lesson-card-wrap w-90 h-100">
                <div className="lesson-card w-100 h-100 d-flex flex-column justify-content-around">
                  <div className="w-100 h-30 cooler_card_img"></div>
                  <div className="w-100 h-70 d-flex flex-column">
                    <div className="w-100 h-25 d-flex flex-column justify-content-around align-items-center">
                      <p className="fs-4 fw-bold">HRC舞蹈工作室</p>
                      <p>忠孝館</p>
                    </div>
                    <div className="w-100 h-75"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9 h-100"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lesson_zhongxiao;
