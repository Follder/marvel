import React from "react";
import { ComicsItem } from "../ComicsItem/ComicsItem";
import './ComicsList.scss';
import { Button } from "../Button/Button";

export const ComicsList = () => {
  return (
    <div className="comics-list">
      <ComicsItem />
      <ComicsItem />
      <ComicsItem />
      <ComicsItem />
      <ComicsItem />
      <ComicsItem />
      <ComicsItem />
      <ComicsItem />

      <div className="comics-list__button">
        <Button width="170px" text="load more" />
      </div>
    </div>
  )
}