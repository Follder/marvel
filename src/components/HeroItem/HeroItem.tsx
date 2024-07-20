import React, { useEffect, useRef } from "react";
import "./HeroItem.scss";
import cn from "classnames";
import { Character } from "../../types/Character";

type Props = {
  char: Character;
  setHero: (charId: number) => void;
  focusHero: number | null;
};

export const HeroItem: React.FC<Props> = ({char, setHero, focusHero}) => {
  const focusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focusRef.current?.classList.remove('hero-item_active')

    if (focusHero === char.id) {
      focusRef.current?.classList.add('hero-item_active');
      focusRef.current?.focus();
    }
  }, [focusHero])

  const isNotFound = char.thumbnail.includes("image_not_available");
  const isNotAvailible = char.thumbnail.includes("4c002e0305708");

    return (
      <div
        onFocus={() => setHero(char.id)}
        ref={focusRef}
        tabIndex={0}
        className="hero-item"
      >
        <div className="hero-item__image">
          <img
            src={char.thumbnail}
            alt={char.name}
            className={cn("hero-item__image_pos-center", {
              "hero-item__image_pos-right": isNotAvailible,
              "hero-item__image_pos-left": isNotFound,
            })}
          />
        </div>
        <h3 className="hero-item__name">{char.name}</h3>
      </div>
    );
}
