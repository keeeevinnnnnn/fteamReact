import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../../../components/AuthContext';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/FavoriteCard.scss';
import EmptyBox from './EmptyBox';
import { useNavigate } from 'react-router-dom';
import { confirm } from '../../../../components/ConfirmComponent';
import { alert } from '../../../../components/AlertComponent';

const FavoriteCard = () => {
  const navigate = useNavigate();
  const { auth, token, auths, setAuths } = useContext(AuthContext);
  const [favoriteCard, setFavoriteCard] = useState([]);
  useEffect(() => {
    if (!auth) {
      return;
    } else {
      axios
        .get('http://localhost:3000/member/favorite', {
          // 發JWT一定要加這個headers
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setFavoriteCard(res.data);
        });
    }
  }, [auth, token, auths]);
  // 取消收藏
  function deleteFavorite(v) {
    let i = confirm('確定要取消收藏該商品?');
    i.then((res) => {
      if (res) {
        axios
          .post('http://localhost:3000/member/delfavorite', {
            sid: v.sid,
          })
          .then((res) => {
            if (res.data.success) {
              setAuths({ ...auths, change: uuidv4() });
              alert('已取消收藏');
            } else {
              alert('取消收藏失敗');
            }
          });
      } else {
        return;
      }
    });
  }
  // 加入購物車
  function goToCarts(v) {
    let i = confirm('確定要將該商品放入購物車?');
    i.then((res) => {
      if (res) {
        axios
          .post(
            'http://localhost:3000/carts',
            {
              type: 'product',
              quantity: 1,
              sid: v.favoriteId,
              memID: v.memId,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            // 從收藏刪除
            if (res.data.success) {
              axios
                .post('http://localhost:3000/member/delfavorite', {
                  sid: v.sid,
                })
                .then((res) => {
                  if (res.data.success) {
                    setAuths({ ...auths, change: uuidv4() });
                    alert('商品成功加入購物車');
                  }
                });
            } else {
              alert('商品加入失敗');
            }
          });
      }
    });
  }
  return (
    <>
      {favoriteCard.length === 0 ? (
        <EmptyBox />
      ) : (
        favoriteCard.map((v, i) => {
          return (
            <div className="w-95 m-3 favoriteCard" key={uuidv4()}>
              <div className="d-flex h-100 w-100">
                <div className="col-xl-3">
                  <img
                    src={`/imgs/Products/${v.favoriteImg}`}
                    alt=""
                    className="h-100"
                    style={{
                      objectFit: 'cover',
                      aspectRatio: '1/1',
                    }}
                    onClick={() => {
                      navigate(`/PRODUCTS/details/${v.favoriteId}`);
                    }}
                  />
                </div>
                <div className="col-xl-9">
                  <p
                    className="h-50 p-3 m-0"
                    onClick={() => {
                      navigate(`/PRODUCTS/details/${v.favoriteId}`);
                    }}
                  >
                    {v.favoriteName}
                  </p>
                  <div className="h-50 d-flex justify-content-between align-items-center">
                    <h5 className="text-gray p-3">$ {v.favoritePrice}</h5>
                    <div className="d-flex h-100 svgBox">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="deleteSvg"
                        onClick={() => {
                          deleteFavorite(v);
                        }}
                      >
                        <path
                          fill="red"
                          d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="cartSvg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="rgb(207, 207, 207)"
                        strokeWidth={2}
                        onClick={() => {
                          goToCarts(v);
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default FavoriteCard;
