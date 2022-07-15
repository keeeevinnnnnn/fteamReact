import './Lesson.css';

const Lesson = () => {
  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0">
          <div className="d-flex flex-wrap">
            <div className="col-12 col-md-1 d-none d-sm-block ">
              <i className=" fa-solid fa-arrow-left  center"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>
            </div>
            <div className="col-12 col-md-4 m-4 card  shadowblack  ">
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
                <i className="fa-solid fa-location-dot fs-4"></i>
                <span className="fs-6"> 國父紀念館</span>
                <p className="card-text">
                  HRC舞蹈工作室提供最優質的舞蹈教學服務，每月超過三百堂多樣化課程、數十種舞蹈風格，多元的課程選擇、由淺入深的漸進式學...
                </p>
                <a href="#/" className="btn btn-primary">
                  Go
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4 m-4 card  shadowblack ">
              <img
                src="./imgs/lesson_imgs/l02.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body ">
                <h5 className="card-title text-center fs-4 fw-bold">
                  HRC 舞蹈工作室
                </h5>
                <h6 className="card-title text-center fs-5 fw-bold">
                  【板橋民生旗艦館】
                </h6>
                <i className="fa-solid fa-location-dot fs-4"></i>
                <span className="fs-6"> 新埔站</span>
                <p className="card-text">
                  HRC舞蹈工作室提供最優質的舞蹈教學服務，每月超過三百堂多樣化課程、數十種舞蹈風格，多元的課程選擇、由淺入深的漸進式學...
                </p>
                <a href="#/" className="btn btn-primary">
                  Go
                </a>
              </div>
            </div>
            <div className="col-12 col-md-1 d-none d-sm-block ">
              <i className="fa-solid fa-arrow-right  center"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lesson;
