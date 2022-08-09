import './style/Lesson_taichung.scss';
import LessonTabPanel from './components/LessonTabPanel';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Lesson_taichung = () => {
  const [lessonDisplay, setlessonDisplay] = useState([]);
  const [lessonSelectDance, setlessonSelectDance] = useState([]);
  const getLessonData = async () => {
    const response = await axios.get(
      `http://localhost:3000/lesson?location=台中精誠館`
    );
    // 設定到state
    // setLessonRaw(response.data);

    setlessonDisplay(response.data);
  };

  const getLessonSelectDanceData = async () => {
    const response = await axios.get(
      `http://localhost:3000/lesson/dance_category`
    );
    setlessonSelectDance(response.data);
  };

  useEffect(() => {
    // 開啟載入指示動態
    getLessonData();
    getLessonSelectDanceData();
  }, []);

  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-12 col-md-10 p-0">
          <div className="w-100 h-100 d-flex flex-wrap cooler_lesson_position">
            <div className=" mb-5 col-md-4 flex-wrap col-12  d-flex  justify-content-center cooler_card_wrap align-items-center">
              <div className="cooler_lesson_background lesson-card-wrap w-100 h-100">
                <div className="lesson_card shadow border w-100 h-100 d-flex flex-column justify-content-around ">
                  <div className="w-100 h-30 cooler_card_taichung_img"></div>
                  <div className="w-100 h-70 d-flex flex-column ">
                    <div className="w-100 h-20 ">
                      <h4 className=" fw-bold text-center pt-2">
                        HRC舞蹈工作室
                      </h4>
                      <h5 className="fw-bold text-center">【台中精誠館】</h5>
                    </div>
                    <div className=" w-100 h-75 p-3 ">
                      <div className="h-15 ">
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
                        <span className="fw-5 ">403台中市西區精誠路92號B1</span>
                      </div>

                      <div className="h-75 cooler_gray">
                        <p className="card-text   ">
                          HRC舞蹈工作室提供最優質的舞蹈教學服務，每月超過三百堂多樣化課程、數十種舞蹈風格，多元的課程選擇、由淺入深的漸進式學習，讓你輕鬆踏出舞蹈的第一步，打穩基礎、深根學習、挑戰自己！
                        </p>
                        <p>
                          一起讓生活充滿節奏，用舞蹈豐富生活，加入HRC舞蹈生活館，讓生活多一件喜歡的事！
                        </p>
                      </div>
                      <div className="h-10 cooler_gray d-flex pt-2">
                        <div className="coolermap  px-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </div>
                        <p>台中精誠館 Tel:(04)2320-8555</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  col-md-8 col-12 h-100">
              <LessonTabPanel
                lessonDisplay={lessonDisplay}
                lessonSelectDance={lessonSelectDance}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lesson_taichung;
