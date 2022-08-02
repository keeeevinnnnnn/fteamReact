import './style/Lesson.css';

import LessonSwiper from './components/LessonSwiper';

const Lesson = () => {
  return (
    <>
      <div className=" w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="h-85 work-area col-12 col-md-10 p-0">
          <LessonSwiper />
        </div>
      </div>
    </>
  );
};

export default Lesson;
