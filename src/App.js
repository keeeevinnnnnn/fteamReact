import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Member from './pages/Member';
import Lesson from './pages/Lesson';
import Products from './pages/Products';
import Customized from './pages/Customized';
import Orders from './pages/Orders';
import Login from './pages/Login';
function App() {
  const [sideBar, setSideBar] = useState(true);
  return (
    <Router>
      <div className="container-fluid vh-100 fteam-wrap">
        <div className="row h-100">
          <div className="p-0 d-flex flex-column w-100 h-100">
            <Navbar />
            <div className="w-100 bottom-grid d-flex">
              <SideBar sideBar={sideBar} setSideBar={setSideBar} />
              {/* col-2 的側邊欄 */}
              {/* <div className="col-10 h-100 p-0 "></div>有要加sidebar的 用col-10 這段 沒有的用 col-12 */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/member" element={<Member />} />
                <Route path="/login" element={<Login />} />
                <Route path="/lesson" element={<Lesson />} />
                <Route path="/products" element={<Products />} />
                <Route path="/customized" element={<Customized />} />
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
