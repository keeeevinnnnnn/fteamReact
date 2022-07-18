import React from 'react';
import './App.css';
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

function App() {
  return (
    <Router>
      <div className="container-fluid vh-100 fteam-wrap">
        <div className="row h-100">
          <div className="p-0 d-flex flex-column w-100 h-100">
            <Navbar />
            <div className="w-100 bottom-grid d-flex">
              <SideBar />

               


              {/* <Customized_add/> */}

              {/* col-2 的側邊欄 */}
              {/* <div className="col-10 h-100 p-0 "></div>有要加sidebar的 用col-10 這段 沒有的用 col-12 */}

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/member" element={<Member />} />
                <Route path="/login" element={<Login />} />
                <Route path="/lesson" element={<Lesson />} />
                <Route path="/products" element={<Products />} />
                <Route path="/customized" element={<Customized />} />
                <Route path="/carts" element={<Carts />} />
                <Route path="/orders" element={<Orders />} />
              </Routes> 

            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
