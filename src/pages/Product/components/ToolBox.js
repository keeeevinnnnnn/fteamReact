import React, { useState } from 'react';

const ToolBox = () => {
  const menuItems = ['Skateboard', 'Decks', 'Trucks', 'Wheels'];
  const [menu, setMenu] = useState('Skateboard');
  return (
    <>
      <div className="row toolbox">
        <div className="col-10 d-flex justify-content-center align-items-center ">
          <div className="col-4">
            <ul>
              {menuItems.map((v, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => {
                      setMenu(v);
                    }}
                    className={menu === v ? 'catgory' : ''}
                  >
                    <a href="#/">{v}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
};

export default ToolBox;
