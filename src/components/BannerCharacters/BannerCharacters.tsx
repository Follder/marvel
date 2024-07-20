import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import "./BannerCharacters.scss";
import { Character } from "../../types/Character";
import { MarvelService } from "../../services/MarvelService";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import cn from "classnames";
import { sliceLongDescriptin } from "../../utils/sliceLongDescription";

const emptyChar = {
  id: 0,
  name: "",
  description: "",
  thumbnail: "",
  homepage: "",
  wiki: "",
  comics: [],
};

export const BannerCharacters = () => {
  const [char, setChar] = useState<Character>(emptyChar);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const marvelService = new MarvelService();

  const onCharLoaded = (char: Character) => {
    setChar(char);
    setLoading(false);
  };

  const updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

    marvelService
      .getCharacter(id)
      .then(onCharLoaded)
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    updateChar();
  }, []);

  const handleUpdateByClick = () => {
    setLoading(true);
    updateChar();
  };

  return (
    <div className="banner-ch">
      {loading && <div className="banner-ch__loader"><Loader /></div>  }
      {error && <ErrorMessage text="Something wrong! Can`t load the hero" />}
      {!(loading || error) && <View char={char} />}

      <div className="banner-ch__right">
        <p className="banner-ch__right-promo">
          Random character for today!
          <br />
          Do you want to get to know him better?
        </p>
        <p className="banner-ch__right-promo">Or choose another one</p>
        <div
          className="banner-ch__right-buttons"
          onClick={handleUpdateByClick}
        >
          <Button text="try it" />
        </div>
      </div>
    </div>
  );
};

type Props = {
  char: Character;
};

export const View: React.FC<Props> = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki } = char;
  const descr = sliceLongDescriptin(description, 300);
  const isNotAvailible = thumbnail.includes("image_not_available");

  return (
    <div className="banner-ch__left">
      <div className="banner-ch__left-image">
        <img
          src={thumbnail}
          alt={name}
          className={cn("banner-ch__left-image_pos-center", {
            "banner-ch__left-image_pos-left": isNotAvailible,
          })}
        />
      </div>
      <div className="banner-ch__left-wrapper">
        <div className="banner-ch__left-title">{name}</div>
        <div className="banner-ch__left-descr">{descr}</div>
        <div className="banner-ch__left-buttons">
          <a href={homepage}>
            <Button text="homepage" />
          </a>
          <a href={wiki}>
            <Button color="#5C5C5C" text="wiki" />
          </a>
        </div>
      </div>
    </div>
  );
};
