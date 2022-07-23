import './style/Lesson_zhongxiao.scss';
// import l01 from './imgs/lesson_imgs/l01.jpg';

const Lesson_zhongxiao = () => {
  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0">
          <div className="d-flex flex-wrap"></div>
          <div className="col-12 col-md-4 m-md-4 card  shadow  ">
            <img
              src="./imgs/lesson_imgs/l01.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body ">
              <h5 className="card-title text-center fs-4 fw-bold">
                HRC 舞蹈工作室
              </h5>
              <h6 className="card-title text-center fs-5 fw-bold">
                【忠孝館】
              </h6>
              <div className="coolermap d-inline-block">
                <a href="#/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="black"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <span className="fs-6 fw-bold"> 國父紀念館</span>
              <p className="card-text  pt-4">
                HRC舞蹈工作室提供最優質的舞蹈教學服務，每月超過三百堂多樣化課程、數十種舞蹈風格，多元的課程選擇、由淺入深的漸進式學習，讓你輕鬆踏出舞蹈的第一步，打穩基礎、深根學習、挑戰自己！
              </p>
              <p>
                一起讓生活充滿節奏，用舞蹈豐富生活，加入HRC舞蹈生活館，讓生活多一件喜歡的事！
              </p>
              <p>忠孝館Tel:(02)2711-3104</p>
              <p>台北市大安區忠孝東路四段299號B1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lesson_zhongxiao;
