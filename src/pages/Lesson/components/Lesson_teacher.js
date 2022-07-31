import '../style/Lesson_teacher.scss';

const Lesson_teacher = () => {
  return (
    <>
      <section className="  w-100 h-100 d-flex flex-wrap">
        <div className="col-sm-6 col-12  cooler_teacher_card px-3 mb-4  ">
          <div className="h-55 ">
            <div className="cooler_teacher_log h-100 d-flex">
              <div className="cooler_teacher_card_head_circle w-55 ">
                <div className="cooler_teacher_card_circle ">
                  <div className="cooler_teacher_card_head"></div>
                </div>
              </div>
              <div className=" w-45  ">
                <h4 className="cooler_teacher_card_teachername w-100 h-100">
                  Nike
                </h4>
              </div>
            </div>
          </div>
          <div className="h-45">456</div>
        </div>

        <div className="col-sm-6 col-12  cooler_teacher_card px-3 mb-4">
          <div className="h-55 ">123</div>
          <div className="h-45">456</div>
        </div>

        <div className="col-sm-6 col-12  cooler_teacher_card px-3 mb-4">
          <div className="h-55">123</div>
          <div className="h-45">456</div>
        </div>
      </section>
    </>
  );
};

export default Lesson_teacher;
