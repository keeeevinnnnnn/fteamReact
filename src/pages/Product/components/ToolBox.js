import React, { useState } from 'react';

const ToolBox = (props) => {
  const { toolBoxFilter } = props;
  const menuItems = ['Skateboard', 'Decks', 'Trucks', 'Wheels'];
  const [menu, setMenu] = useState('Skateboard');

  return (
    <>
      <div className="row toolbox p-0 m-0">
        <div className="col-10 d-flex justify-content-center align-items-center ">
          <div className="col-4">
            <ul>
              {menuItems.map((v, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => {
                      if (i === 0) {
                        toolBoxFilter(null, null, 'skateboard');
                        setMenu(v);
                      } else if (i === 1) {
                        toolBoxFilter(null, null, 'decks');
                        setMenu(v);
                      } else if (i === 2) {
                        toolBoxFilter(null, null, 'trucks');
                        setMenu(v);
                      } else if (i === 3) {
                        toolBoxFilter(null, null, 'wheels');
                        setMenu(v);
                      }
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
