import React from 'react';
import FavoriteCard from './FavoriteCard';
import ScrollBox from '../../../../components/ScrollBox/ScrollBox';
import '../../styles/Favorite.scss'

const Favorite = () => {
  return (
    <>
      <div className="w-100 h-100 d-flex justify-content-center">
        <div className="favoriteWarp">
          <ScrollBox>
            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
          </ScrollBox>
        </div>
      </div>
    </>
  );
};

export default Favorite;
