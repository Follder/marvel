import React, { useEffect, useState } from "react";
import "./HeroDetail.scss";
import cn from "classnames";
import { Button } from "../Button/Button";
import { MovieList } from "../MovieList/MovieList";
import { Character } from "../../types/Character";
import { Skeleton } from "../Skeleton/Skeleton";
import { Form } from "../Form/Form";
import { Loader } from "../Loader/Loader";
import { MarvelService } from "../../services/MarvelService";

interface Props {
  charId: number | null;
}

export const HeroDetail: React.FC<Props> = ({ charId }) => {
  const [char, setChar] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  const marvelService = new MarvelService();

  const updateChar = () => {
    setLoading(true);

    if (charId) {
      marvelService
        .getCharacter(charId)
        .then((res) => {
          setLoading(false);
          setChar(res);
        })
        .catch(() => {
          setLoading(true);
        });
    }
  };

  useEffect(() => {
    updateChar();
  }, [charId]);

  if (!charId) {
    return (
      <div className="hero-detail">
        <Skeleton />
      </div>
    );
  }

  if (!char) {
    return (
      <div className="hero-detail">
        <div className="hero-detail__loader">
          <Loader />
        </div>
      </div>
    );
  }

  const { name, thumbnail, homepage, wiki, description, comics } = char;
  const isNotFound = char.thumbnail.includes("image_not_available");
  const isNotAvailible = char.thumbnail.includes("4c002e0305708");

  return (
    <>
      <div className="hero-detail">
        {loading && (
          <div className="hero-detail__loader">
            <Loader />
          </div>
        )}
        {!loading && (
          <>
            <div className="hero-detail__header">
              <div className="hero-detail__img">
                <img
                  src={thumbnail}
                  alt={name}
                  className={cn("hero-item__image_pos-center", {
                    "hero-item__image_pos-right": isNotAvailible,
                    "hero-item__image_pos-left": isNotFound,
                  })}
                />
              </div>
              <div className="hero-detail__wrapper">
                <h2 className="hero-detail__name">{name}</h2>
                <div className="hero-detail__btns">
                  <a href={homepage}>
                    <Button text="homepage" />
                  </a>
                  <a href={wiki}>
                    <Button color="#5C5C5C" text="wiki" />
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-detail__description">{description}</div>
            <MovieList comics={comics} />
          </>
        )}
      </div>

      <Form />
    </>
  );
};
