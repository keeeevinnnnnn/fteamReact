import React, { useState } from 'react';
import './App.css';
import './Nootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Home from './pages/Home/Home';
import Member from './pages/Member/Member';
import Lesson from './pages/Lesson/Lesson';
import Products from './pages/Product/Products';
import Customized from './pages/Customized/Customized';
import Orders from './pages/Orders/Orders';
import Login from './pages/Login/Login';
import Carts from './pages/Carts/Carts';
import Customized_add from './pages/Customized/Customized_add';
import Cus_product_card_wheel from './pages/Customized/Cus_product_card_wheel';
import Cus_product_card_struct from './pages/Customized/Cus_product_card_struct';
import Cus_product_card_fcolor from './pages/Customized/Cus_product_card_fcolor';
import Cus_product_card_back from './pages/Customized/Cus_product_card_back';
import ProductMain from './pages/Product/ProductMain';

export const TokenContext = React.createContext();
function App() {
  // 登入狀態判斷
  const [auth, setAuth] = useState(false);
  // 登入後會存的值user_token JWT
  const token = localStorage.getItem('user_token');
  return (
    // 所有人都可以直接拿到token
    <TokenContext.Provider value={token}>
      <Router>
        <div className="container-fluid vh-100 fteam-wrap">
          <div className="row h-100">
            <div className="p-0 d-flex flex-column w-100 h-100">
              <Navbar auth={auth} setAuth={setAuth} />
              <div className="w-100 bottom-grid d-flex">
                <SideBar />

                {/* col-2 的側邊欄 */}
                {/* <div className="col-10 h-100 p-0 "></div>有要加sidebar的 用col-10 這段 沒有的用 col-12 */}

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/member" element={<Member />} />
                  <Route path="/login" element={<Login setAuth={setAuth} />} />
                  <Route path="/lesson" element={<Lesson />} />
                  <Route path="/products" element={<ProductMain />} />
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
                  <Route path="/carts" element={<Carts />} />
                  <Route path="/orders" element={<Orders />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </TokenContext.Provider>
  );
}

export default App;
