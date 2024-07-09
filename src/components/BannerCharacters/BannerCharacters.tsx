import React, { Component } from "react";
import { Button } from "../Button/Button";
import "./BannerCharacters.scss";
import { Character } from "../../types/Character";
import { MarvelService } from "../../services/MarvelService";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export class BannerCharacters extends Component {
  constructor(props: any) {
    super(props);
    this.updateChar();
  }

  state = {
    char: {
      name: "",
      description: "",
      thumbnail: "",
      homepage: "",
      wiki: "",
    },
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  onCharLoaded = (char: Character) => {
    this.setState({ char, loading: false });
  };

  updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.marvelService.getCharacter(id)
      .then(this.onCharLoaded)
      .catch(() => {
        this.setState({ error: true, loading: false });
      });
  };

  render() {
    const { char, loading, error } = this.state;

    const load = loading ? (<div className="banner-ch__loader"><Loader /></div>) : false;
    const errorMessage = error ? <ErrorMessage text="Something wrong! Can`t load the hero" /> : false;
    const view = !(load || errorMessage) ? <View char={char} />: null;

    return (
      <div className="banner-ch">
        
        {load}
        {errorMessage}
        {view}
        
        <div className="banner-ch__right">
          <p className="banner-ch__right-promo">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="banner-ch__right-promo">Or choose another one</p>
          <div className="banner-ch__right-buttons" onClick={this.updateChar}>
            <Button width="108px" height="38px" color="#9F0013" text="try it" />
          </div>
        </div>
      </div>
    );
  }
}

type Props = {
  char: Character;
}

export const View:React.FC<Props> = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki } = char;
  let descr = description;

  if (descr.length === 0) {
    descr =
      "Unfortunally, information about this character was deleted from Avenger`s servers";
  }

  if (descr.length > 300) {
    descr = descr.slice(0, 300) + "...";
  }

  return (
    <div className="banner-ch__left">
      <div className="banner-ch__left-image">
        <img src={thumbnail} alt={name} />
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
