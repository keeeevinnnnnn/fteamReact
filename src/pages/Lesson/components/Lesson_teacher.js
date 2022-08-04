import '../style/Lesson_teacher.scss';

const Lesson_teacher = () => {
  return (
    <>
      <div className="col-sm-4   cooler_teacher_card   border ">
        <div className="h-55 ">
          <div className="cooler_teacher_log h-100 d-flex">
            <div className="cooler_teacher_card_head_circle w-55 ">
              <div className="cooler_teacher_card_circle ">
                <div className="cooler_teacher_card_head"></div>
              </div>
            </div>
            <div className=" w-45 cooler_teacher_card_right ">
              <h3 className="cooler_teacher_card_teachername w-100 h-100">
                Nike
              </h3>
            </div>
          </div>
        </div>
        <div className="h-45 p-2 cooler_teacher_card_bottom ">
          <p className="cooler_teacher_card_info ">
            Nike
            Chen之所以被大家封為Nike老師，就是因為她的實力及對跳舞的態度超認真，她跳舞資歷超過20年，擔任過演藝圈天王天后的舞者甚至是編舞老師
          </p>
        </div>
      </div>
    </>
  );
};

export default Lesson_teacher;
