import React, { Component } from "react";
import "./MovieList.scss";
import { CharacterComics } from "../../types/Character";
import { Button } from "../Button/Button";

interface Props {
  comics: CharacterComics[];
}

interface State {
  isLongComicsList: boolean;
}

export class MovieList extends Component<Props, State> {
  MAX_DISPLAYED_COMICS: number;
  
  constructor(props: Props) {
    super(props);
    this.MAX_DISPLAYED_COMICS = 10;
    this.state = {
      isLongComicsList: props.comics.length <= this.MAX_DISPLAYED_COMICS
    }
  }

  componentDidUpdate(prevProps: Props): void {
    if(prevProps.comics !== this.props.comics) {
      this.setState({isLongComicsList: this.props.comics.length <= this.MAX_DISPLAYED_COMICS})
    }
  }

  makeShortMovieList = (comics: CharacterComics[]) => {
    if (comics.length > this.MAX_DISPLAYED_COMICS) {
      return comics.slice(0, this.MAX_DISPLAYED_COMICS);
    }

    return comics;
  }

  render() {
    const {comics} = this.props;
    const shortComics = this.makeShortMovieList(this.props.comics);


    console.log(comics, this.state.isLongComicsList);

    return (
      <div className="movie-list">
        <div className="movie-list__title">Comics:</div>
  
        {this.props.comics.length > 0 ? (
        <ul className="movie-list__movies">
          {this.state.isLongComicsList && comics.length >= this.MAX_DISPLAYED_COMICS ? (
            comics.map((item, i) => (
              <li className="movie-list__movie" key={i}>
                {item.name}
              </li>
            ))
          ) : (
            <>
            {shortComics.map((item, i) => (
              <li className="movie-list__movie" key={i}>
                {item.name}
              </li>
            ))}
            {comics.length > this.MAX_DISPLAYED_COMICS && <div className="movie-list__button" onClick={() => this.setState({isLongComicsList: true})}><Button text="load more" /></div>}
          </>
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
};
