import React, { useState } from 'react';

const ToolBox = (props) => {
  const { getPageData, filter, setFilter } = props;
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
                        setFilter({ ...filter, categoryId: '2' });
                        setMenu(v);
                      } else if (i === 1) {
                        setFilter({ ...filter, categoryId: '4' });
                        setMenu(v);
                      } else if (i === 2) {
                        setFilter({ ...filter, categoryId: '5' });
                        setMenu(v);
                      } else if (i === 3) {
                        setFilter({ ...filter, categoryId: '6' });
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
