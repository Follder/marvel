import React from "react";
import './HeroDetail.scss';
import { Button } from "../Button/Button";
import { MovieList } from "../MovieList/MovieList";

export const HeroDetail = () => {
  return (
    <div className="hero-detail">
      <div className="hero-detail__header">
        <div className="hero-detail__img">
          <img src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg" alt="hero-name" />
        </div>
        <div className="hero-detail__wrapper">
          <h2 className="hero-detail__name">Loki</h2>
          <div className="hero-detail__btns">
            <Button width="102px" height="38px" color="#9F0013" text="homepage" />
            <Button width="102px" height="38px" color="#5C5C5C" text="wiki"/>
          </div>
        </div>
      </div>
      <div className="hero-detail__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolores accusamus quam ex, reprehenderit dicta nulla consequuntur sed. Voluptatibus expedita dolorum quae veniam, dignissimos asperiores temporibus quidem similique voluptate architecto.
      </div>

      <MovieList />
    </div>
  )
}