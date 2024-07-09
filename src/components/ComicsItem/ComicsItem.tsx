import React from "react";
import './ComicsItem.scss';

export const ComicsItem = () => {
  return (
    <div className="comics-item">
      <div className="comics-item__img">
        <img src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg" alt="comics-movie" />
      </div>
      <div className="comics-item__title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
      <div className="comics-item__price">9.99$</div>
    </div>
  )
}