import React, { Component } from "react";
import "./MovieList.scss";
import { CharacterComics } from "../../types/Character";
import { Button } from "../Button/Button";

interface Props {
  comics: CharacterComics[];
}

interface State {
  isShortList: boolean;
}

export class MovieList extends Component<Props, State> {
  MAX_DISPLAYED_COMICS: number;

  constructor(props: Props) {
    super(props);
    this.MAX_DISPLAYED_COMICS = 10;
    this.state = {
      isShortList: props.comics.length > this.MAX_DISPLAYED_COMICS,
    };
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.comics !== this.props.comics) {
      this.setState({
        isShortList: this.props.comics.length > this.MAX_DISPLAYED_COMICS,
      });
    }
  }

  handleLoadMore = () => {
    this.setState({ isShortList: false });
  };

  render() {
    const { comics } = this.props;
    const { isShortList } = this.state;
    const displayedComics = isShortList ? comics.slice(0, this.MAX_DISPLAYED_COMICS) : comics;

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
            {isShortList && comics.length > this.MAX_DISPLAYED_COMICS && (
              <div className="movie-list__button" onClick={this.handleLoadMore}>
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
}