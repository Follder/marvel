import React from 'react';
import './BannerComics.scss';
import logo from '../../resources/img/avengers-logo.png';
import avengersTeam from '../../resources/img/banner-avengers.png';

export const BannerComics = () => {
  return (
    <div className="banner-comics">
      <img src={avengersTeam} alt="avengersTean" className="banner-comics__img" />
      <div className="banner-comics__message">New comics every week! <br /> Stay tuned!</div>
      <img src={logo} alt="avengers-logo" className="banner-comics__img" />
    </div>
  )
}