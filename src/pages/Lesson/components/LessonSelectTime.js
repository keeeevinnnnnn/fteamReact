import '../style/LessonSelectTime.scss';

function LessonSelectTime(props) {
  const { timeListOption, timeList, setTimeList } = props;
  return (
    <div className="w-33 ">
      <select
        className="h-100 cooler_select"
        value={timeList}
        // 換選項的動作
        onChange={(e) => {
          setTimeList(e.target.value);
        }}
      >
        <option className="cooler_select" value="">
          TIME
        </option>
        {timeListOption.map((v, i) => {
          return (
            <option className="cooler_select" key={i} value={v}>
              {v}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default LessonSelectTime;
