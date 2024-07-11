import React from "react";
import "./HeroItem.scss";
import cn from "classnames";

type Props = {
  thumbnail: string;
  name: string;
};

export const HeroItem: React.FC<Props> = ({ name, thumbnail }) => {
  const isNotAvailible = thumbnail.includes("image_not_available")
    ? true
    : false;

  return (
    <a href="#" className="hero-item">
      <div className="hero-item__image">
        <img
          src={thumbnail}
          alt={name}
          className={cn("hero-item__image_pos-center", {
            "hero-item__image_pos-left": isNotAvailible,
          })}
        />
      </div>
      <h3 className="hero-item__name">{name}</h3>
    </a>
  );
};
