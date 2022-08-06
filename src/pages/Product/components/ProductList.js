import React, { useState, useEffect, useContext } from 'react';
import '../styles/ProductMain.scss';
import axios from '../commons/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import AuthContext from '../../../components/AuthContext';

const ProductList = (props) => {
  const {
    sid,
    img,
    name,
    brand,
    price,
    setFavoritesNum,
    whoFavorites,
    setWhoFavorites,
  } = props;

  // auth為登入判斷(true,false) token為會員JWT的token logout是登出涵式
  const { token } = useContext(AuthContext);

  // 收藏成功提示訊息設定
  const favoriteSuccess = () => {
    toast.success('Add Favorites Success', {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  // 取消收藏成功提示訊息設定
  const favoriteError = () => {
    toast.error('Cancel Favorites Success', {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  // 收藏按鈕開關
  const [heart, setHeart] = useState(false);
  // 收藏商品與取消收藏商品;
  const getFavorites = async () => {
    const addFavorites = {
      sid: sid,
      favoriteImg: img,
      favoriteName: name,
      favoriteBrand: brand,
      favoritePrice: price,
    };
    await axios
      .post('/product/favorites', addFavorites, {
        // 發JWT一定要加這個headers
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // 拿到成功或失敗的訊息
        res.data.success === 'true' ? favoriteSuccess() : favoriteError();
        setHeart(!heart);
        countSonFavorites();
      });
  };

  //紀錄重新渲染時誰收藏;
  let findWhoFavorites = whoFavorites.filter((v) => v === sid);

  // console.log(whoFavorites);
  // 計算收藏商品總數
  const countSonFavorites = async () => {
    await axios
      .get(`/product/favoriteCount`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        let favoritesNum = res.data[`count(sid)`];
        setFavoritesNum(favoritesNum);
      });
  };
  // 讓heart值改變重新渲染，改變會員所收藏的商品
  useEffect(() => {
    axios
      .get(`/product/whoFavorites`, {
        // 發JWT一定要加這個headers
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setWhoFavorites(res.data);
      });
  }, [heart]);

  return (
    <div className="col-4 mt-5">
      <div className="product-header">
        <div className="pro-favorites mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            style={{
              display: findWhoFavorites.length > 0 ? 'none' : 'block',
            }}
            id="heartTrue"
            onClick={getFavorites}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            style={{
              display: findWhoFavorites.length > 0 ? 'block' : 'none',
            }}
            id="heartFalse"
            onClick={getFavorites}
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="pro-cart mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
      </div>
      <div className="productImg">
        <Link to={`details/${sid}`}>
          <img src={`/imgs/Products/${img}`} className="card-img-top" alt="" />
        </Link>
      </div>

      <div className="card-body productBody">
        <h5 className="card-name">{name}</h5>
        <p className="card-brand">{brand}</p>
        <p className="card-price">
          <span>$ {price}</span>
        </p>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ProductList;
