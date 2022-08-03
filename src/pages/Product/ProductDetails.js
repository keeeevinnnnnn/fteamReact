import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductTabsBox from './components/ProductTabsBox';
import axios from './commons/axios';
import './styles/ProductDetails.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = (props) => {
  const [details, setdetails] = useState({
    sid: '',
    img: '',
    name: '',
    brand: '',
    price: 0,
    info: '',
  });

  const { setFavoritesNum } = props;
  // 收藏svg開關
  const [heart, setHeart] = useState(false);

  // 收藏成功提示訊息設定
  const detailsSuccess = () => {
    toast.success('Add Favorites Success', {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setHeart(!heart);
  };

  // 取消收藏成功提示訊息設定
  const detailsError = () => {
    toast.error('Cancel Favorites Success', {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setHeart(!heart);
  };

  const axiosProductDetails = async (productId) => {
    axios.get(`/product/${productId}`).then((res) => {
      setdetails(res.data);
    });
  };

  // 收藏商品與取消收藏商品;
  const detailsFavorites = async () => {
    const addFavorites = {
      sid: details.sid,
      favoriteImg: details.img,
      favoriteName: details.name,
      favoriteBrand: details.brand,
      favoritePrice: details.price,
      memId: 5,
    };
    await axios.post('/product/favorites', addFavorites).then((res) => {
      // 拿到成功或失敗的訊息
      console.log('favorites==', res.data);
      res.data.success === 'true' ? detailsSuccess() : detailsError();
      countDetailsFavorites();
    });
  };

  const countDetailsFavorites = async () => {
    await axios.get(`/product/favoriteCount?memId=${5}`).then((res) => {
      let favoritesNum = res.data[`count(sid)`];
      setFavoritesNum(favoritesNum);
    });
  };

  const params = useParams();

  useEffect(() => {
    axiosProductDetails(params.productId);
  }, [params.productId]);

  return (
    <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
      <div className="work-area col-10 pb-5 pe-5 text-danger">
        <div className="d-flex w-100">
          <div className="d-flex mb-5 p-0 m-0 vh-50 w-100">
            <div className="col-7 productDetailsImg">
              <img src={`/imgs/Products/${details.img}`} alt="" />
            </div>
            <div className="col-5 productDetail">
              <div className="productDetailBody mb-3">
                <h5 className="detail-name">{details.name}</h5>
                <p className="detail-brand">{details.brand}</p>
                <p className="detail-price">
                  <span>$ {details.price}</span>
                </p>
              </div>

              <div className="detail-int-cart mb-3">
                <button>
                  <span>Add to Bag</span>
                </button>
              </div>
              <div className="detail-int-heart mb-5">
                <button onClick={detailsFavorites}>
                  <span>Favorite</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      style={{
                        display: heart === false ? '' : 'none',
                      }}
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
                        display: heart === false ? 'none' : '',
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="detail-info">
                <h5 className="mb-3">Product details</h5>
                <p>{details.info}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex w-100">
          <div className="d-flex p-0 m-0 ProductTabsBox vh-50 w-100">
            <ProductTabsBox />
          </div>
        </div>
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

export default ProductDetails;
