import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Home from './pages/Home/Home';
import Member from './pages/Member/Member';
import Lesson from './pages/Lesson/Lesson';
import Products from './pages/Products';
import Customized from './pages/Customized/Customized';
import Orders from './pages/Orders/Orders';
import Login from './pages/Login/Login';
import Carts from './pages/Carts/Carts';
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
                <Route
                  path="/"
                  element={<Home sideBar={sideBar} setSideBar={setSideBar} />}
                />
                <Route
                  path="/member"
                  element={<Member sideBar={sideBar} setSideBar={setSideBar} />}
                />
                <Route
                  path="/login"
                  element={<Login sideBar={sideBar} setSideBar={setSideBar} />}
                />
                <Route
                  path="/lesson"
                  element={<Lesson sideBar={sideBar} setSideBar={setSideBar} />}
                />
                <Route
                  path="/products"
                  element={
                    <Products sideBar={sideBar} setSideBar={setSideBar} />
                  }
                />
                <Route
                  path="/customized"
                  element={
                    <Customized sideBar={sideBar} setSideBar={setSideBar} />
                  }
                />
                <Route
                  path="/carts"
                  element={<Carts sideBar={sideBar} setSideBar={setSideBar} />}
                />
                <Route
                  path="/orders"
                  element={<Orders sideBar={sideBar} setSideBar={setSideBar} />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
