import React, { useState } from 'react';

const ProductTest = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    phone: '',
    email: '',
    gender: '',
    car: '',
    likeList: [],
  });

  const genderOptions = ['男', '女', '不提供'];

  const carOptions = ['Benz', 'BMW', 'Toyota'];

  const fruitOptions = ['西瓜', '芒果', '蘋果'];

  const handleChange = (e) => {
    console.log(e.target.type, e.target.name, e.target.value);
    //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%90%8D
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
        <div className="work-area col-10 pb-5 pe-5 text-danger">
          {fruitOptions.map((v, i) => {
            return (
              <div key={i}>
                <input
                  type="checkbox"
                  checked={userData.likeList.includes(v)}
                  name="likeList"
                  value={v}
                  onChange={(e) => {
                    console.log('e.target.value===', e.target.value);
                    //先判斷是否有在likeList狀態陣列中
                    if (userData.likeList.includes(e.target.value)) {
                      // if有 -> 移出陣列
                      const newLikeList = userData.likeList.filter((v, i) => {
                        return v !== e.target.value;
                      });

                      setUserData({ ...userData, likeList: newLikeList });
                    } else {
                      // else -> 加入陣列
                      const newLikeList = [
                        ...userData.likeList,
                        e.target.value,
                      ];

                      setUserData({ ...userData, likeList: newLikeList });
                    }
                  }}
                />
                <label>{v}</label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductTest;
