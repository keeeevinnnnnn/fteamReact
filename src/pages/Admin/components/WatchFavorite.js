import React, { useState, useEffect } from 'react';
import ScrollBox from '../../../components/ScrollBox/ScrollBox';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import '../styles/WatchFavorite.scss';

const WatchFavorite = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [favoritesData, setFavoritesData] = useState([]);
  const memberFavoriteDetails = async (memberId) => {
    axios
      .get(`http://localhost:3000/admin/memberfavorite/${memberId}`)
      .then((res) => {
        setFavoritesData(res.data);
      });
  };
  useEffect(() => {
    memberFavoriteDetails(params.memberId);
  }, [params.memberId]);

  console.log(favoritesData);

  return (
    <>
      <div className="vh-100 vw-100 d-flex justify-content-center align-items-center bg-dark watchFavoriteWrap">
        <div className="h-90 w-30 bg-light watchFavoriteBox">
          <div
            className="h-10 w-100 bg-primary
"
          ></div>
          <div className="h-90 w-100">
            <ScrollBox>
              {favoritesData.map((v, i) => {
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
                        <div className="h-50 d-flex justify-content-end align-items-center">
                          <h5 className="text-gray p-3">$ {v.favoritePrice}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ScrollBox>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchFavorite;
