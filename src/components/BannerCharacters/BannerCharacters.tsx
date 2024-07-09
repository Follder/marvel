import React from "react";
import { Button } from "../Button/Button";
import './BannerCharacters.scss';

export const BannerCharacters = () => (
  <div className="banner-ch">
    <div className="banner-ch__left">
      <div className="banner-ch__left-image">
        <img src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg" alt="hero-name" />
      </div>
      <div className="banner-ch__left-wrapper">
        <div className="banner-ch__left-title">thor</div>
        <div className="banner-ch__left-descr">
        As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...
        </div>
        <div className="banner-ch__left-buttons">
          <Button width="108px" height="38px" color="#9F0013" text="homepage" />
          <Button width="108px" height="38px" color="#5C5C5C" text="wiki"/>
        </div>
      </div>
    </div>
    <div className="banner-ch__right">
      <p className="banner-ch__right-promo">
        Random character for today!
        <br />
        Do you want to get to know him better?
      </p>
      <p className="banner-ch__right-promo">Or choose another one</p>
      <div className="banner-ch__right-buttons">
      <Button width="108px" height="38px" color="#9F0013" text="try it" />
      </div>
    </div>
  </div>
)