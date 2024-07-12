import React from "react";
import "./HeroDetail.scss";
import cn from "classnames";
import { Button } from "../Button/Button";
import { MovieList } from "../MovieList/MovieList";
import { Character } from "../../types/Character";
import { Skeleton } from "../Skeleton/Skeleton";

interface Props {
  char: Character | null;
  loading: boolean;
}

export const HeroDetail: React.FC<Props> = ({ char }) => {
  if (!char) {
    return (
      <div className="hero-detail">
        <Skeleton />
      </div>
    );
  }

  const { name, description, thumbnail, homepage, wiki, comics } = char;

  const isNotAvailible = char.thumbnail.includes("image_not_available")
    ? true
    : false;

  window.console.log({ char });

  return (
    <div className="hero-detail">
      <div className="hero-detail__header">
        <div className="hero-detail__img">
          <img
            src={thumbnail}
            alt={name}
            className={cn("hero-item__image_pos-center", {
              "hero-item__image_pos-left": isNotAvailible,
            })}
          />
        </div>
        <div className="hero-detail__wrapper">
          <h2 className="hero-detail__name">{name}</h2>
          <div className="hero-detail__btns">
            <a href={homepage}>
              <Button
                width="102px"
                height="38px"
                color="#9F0013"
                text="homepage"
              />
            </a>
            <a href={wiki}>
              <Button width="102px" height="38px" color="#5C5C5C" text="wiki" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-detail__description">{description}</div>

      <MovieList comics={comics} />
    </div>
  );
};
