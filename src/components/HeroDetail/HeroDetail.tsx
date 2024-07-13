import React, { Component } from "react";
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

interface State {
  char: Character | null;
  loading: boolean;
  error: string | null;
}

export class HeroDetail extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      char: null,
      loading: true,
      error: "",
    };
  }

  marvelService = new MarvelService();

  updateChar = () => {
    this.setState({ loading: true });

    if (this.props.charId) {
      this.marvelService
        .getCharacter(this.props.charId)
        .then((res) => {
          this.setState({ loading: false, char: res });
        })
        .catch(() => {
          this.setState({
            error: "Something went wrong. Can`t get a hero",
            loading: true,
          });
        });
    }
  };

  componentDidMount(): void {
    this.updateChar();
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.charId !== this.props.charId) {
      this.updateChar();
    }
  }

  render() {
    const { char, loading } = this.state;

    if (!this.props.charId) {
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

    const isNotAvailible = char.thumbnail.includes("image_not_available")
      ? true
      : false;

    return (
      <>
        <div className="hero-detail">
          {loading ? (
            <div className="hero-detail__loader">
              <Loader />
            </div>
          ) : (
            <>
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
                      <Button
                        width="102px"
                        height="38px"
                        color="#5C5C5C"
                        text="wiki"
                      />
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
  }
}
