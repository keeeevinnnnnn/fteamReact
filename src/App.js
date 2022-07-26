import React, { useState } from 'react';
import './App.css';
import './Nootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Home from './pages/Home/Home';
import Member from './pages/Member/Member';
import Lesson from './pages/Lesson/Lesson';
import Lesson_zhongxiao from './pages/Lesson/Lesson_zhongxiao';
import Lesson_banqiao from './pages/Lesson/Lesson_banqiao';
import Products from './pages/Product/Products';
import ProductMain from './pages/Product/ProductMain';
import ProductDetails from './pages/Product/ProductDetails';
import Customized from './pages/Customized/Customized';
import Orders from './pages/Orders/Orders';
import Login from './pages/Login/Login';
import Carts from './pages/Carts/Carts';
import Customized_add from './pages/Customized/Customized_add';
import Cus_product_card_wheel from './pages/Customized/Cus_product_card_wheel';
import Cus_product_card_struct from './pages/Customized/Cus_product_card_struct';
import Cus_product_card_fcolor from './pages/Customized/Cus_product_card_fcolor';
import Cus_product_card_back from './pages/Customized/Cus_product_card_back';
import Cus_product_detail from './pages/Customized/Cus_product_detail';
import Customized_explore from './pages/Customized/Customized_explore';
import Customized_collect from './pages/Customized/Customized_collect';
import AuthContextProvider from './components/AuthContextProvider';

export const MemberContext = React.createContext();
function App() {
  // 從Nav接住登入會員的個人資料
  const [member, setMember] = useState([]);
  return (
    <Router>
      {/* 裡面包含ConText(會員登入判斷)及登出涵式 */}
      <AuthContextProvider>
        {/* 會員個人資料 */}
        <MemberContext.Provider value={{ member, setMember }}>
          <div className="container-fluid vh-100 fteam-wrap">
            <div className="row h-100">
              <div className="p-0 d-flex flex-column w-100 h-100">
                <Navbar />
                <div className="w-100 bottom-grid d-flex">
                  <SideBar />

                  {/* col-2 的側邊欄 */}
                  {/* <div className="col-10 h-100 p-0 "></div>有要加sidebar的 用col-10 這段 沒有的用 col-12 */}

                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/member" element={<Member />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/lesson" element={<Lesson />} />
                    <Route
                      path="/lesson/lesson_zhongxiao"
                      element={<Lesson_zhongxiao />}
                    />
                    <Route
                      path="/lesson/lesson_banqiao"
                      element={<Lesson_banqiao />}
                    />
                    <Route path="/products" element={<ProductMain />} />
                    <Route path="/products/main" element={<ProductDetails />} />
                    <Route path="/customized" element={<Customized />} />
                    <Route
                      path="/customized/create"
                      element={<Customized_add />}
                    />
                    <Route
                      path="/customized/create/wheel"
                      element={<Cus_product_card_wheel />}
                    />
                    <Route
                      path="/customized/create/carrier"
                      element={<Cus_product_card_struct />}
                    />
                    <Route
                      path="/customized/create/front_deck"
                      element={<Cus_product_card_fcolor />}
                    />
                    <Route
                      path="/customized/create/back"
                      element={<Cus_product_card_back />}
                    />
                    <Route
                      path="/customized/create/detail"
                      element={<Cus_product_detail />}
                    />
                    <Route
                      path="/customized/explore"
                      element={<Customized_explore />}
                    />
                    <Route
                      path="/customized/previous_creations"
                      element={<Customized_collect />}
                    />
                    <Route path="/carts" element={<Carts />} />
                    <Route path="/orders" element={<Orders />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </MemberContext.Provider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
