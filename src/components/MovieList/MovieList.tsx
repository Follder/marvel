import React, { Component, useEffect, useState } from "react";
import "./MovieList.scss";
import { CharacterComics } from "../../types/Character";
import { Button } from "../Button/Button";

interface Props {
  comics: CharacterComics[];
}

export const MovieList: React.FC<Props> = ({ comics }) => {
  const MAX_DISPLAYED_COMICS = 10;
  const [isShortList, setIsShortList] = useState(comics.length > MAX_DISPLAYED_COMICS)

  useEffect(() => {
    setIsShortList(comics.length > MAX_DISPLAYED_COMICS)
  }, [comics])


  const handleLoadMore = () => {
    setIsShortList(false);
  };

    const displayedComics = isShortList ? comics.slice(0, MAX_DISPLAYED_COMICS) : comics;

    return (
      <div className="movie-list">
        <div className="movie-list__title">Comics:</div>
        {comics.length > 0 ? (
          <ul className="movie-list__movies">
            {displayedComics.map((item, i) => (
              <li className="movie-list__movie" key={item.name + i}>
                {item.name}
              </li>
            ))}
            {isShortList && comics.length > MAX_DISPLAYED_COMICS && (
              <div className="movie-list__button" onClick={handleLoadMore}>
                <Button text="load more" />
              </div>
            )}
          </ul>
        ) : (
          <div className="movie-list__movie-error">
            We don`t have any information about comics with this hero, or this
            information was deleted from Avenger`s servers.
          </div>
        )}
      </div>
    );
}