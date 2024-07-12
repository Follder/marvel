import React from "react";
import "./HeroItem.scss";
import cn from "classnames";
import { Character } from "../../types/Character";

type Props = {
  char: Character
  setHero: (char: Character) => void;
};

export const HeroItem: React.FC<Props> = ({ char, setHero }) => {
  const isNotAvailible = char.thumbnail.includes("image_not_available")
    ? true
    : false;

  return (
    <div onClick={() => setHero(char)} className="hero-item">
      <div className="hero-item__image">
        <img
          src={char.thumbnail}
          alt={char.name}
          className={cn("hero-item__image_pos-center", {
            "hero-item__image_pos-left": isNotAvailible,
          })}
        />
      </div>
      <h3 className="hero-item__name">{char.name}</h3>
    </div>
  );
};
