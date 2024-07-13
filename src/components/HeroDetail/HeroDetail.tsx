import React, { Component } from "react";
import "./HeroDetail.scss";
import cn from "classnames";
import { Button } from "../Button/Button";
import { MovieList } from "../MovieList/MovieList";
import { Character } from "../../types/Character";
import { Skeleton } from "../Skeleton/Skeleton";
import { Form } from "../Form/Form";
import { Loader } from "../Loader/Loader";

interface Props {
  char: Character | null;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export class HeroDetail extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.loading !== this.props.loading) {
      this.props.setLoading(true);
    }
  }

  componentDidMount(): void {
    this.props.setLoading(false);
  }

  render () {
    const {char, loading, setLoading} = this.props;

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
  
    window.console.log(loading);

    return (
      <>
      <div className="hero-detail">
        {loading ? (
          <div className="hero-detail__loader">
            <Loader />
          </div>
        ) : (
                  <><div className="hero-detail__header">
                <div className="hero-detail__img">
                  <img
                    src={thumbnail}
                    alt={name}
                    className={cn("hero-item__image_pos-center", {
                      "hero-item__image_pos-left": isNotAvailible,
                    })} />
                </div>
                <div className="hero-detail__wrapper">
                  <h2 className="hero-detail__name">{name}</h2>
                  <div className="hero-detail__btns">
                    <a href={homepage}>
                      <Button
                        width="102px"
                        height="38px"
                        color="#9F0013"
                        text="homepage" />
                    </a>
                    <a href={wiki}>
                      <Button width="102px" height="38px" color="#5C5C5C" text="wiki" />
                    </a>
                  </div>
                </div>
              </div><div className="hero-detail__description">{description}</div><MovieList comics={comics} /></>
        )}
      </div>
  
  <Form />
  </>
    );
  }
};
