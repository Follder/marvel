import React, { Component } from "react";
import "./MovieList.scss";
import { CharacterComics } from "../../types/Character";

interface Props {
  comics: CharacterComics[];
}

// interface state {
//   isLongComicsList: boolean;
// }

export class MovieList extends Component<Props> {
  state = {
    isLongComicsList: false,
  }

  render() {
    const { comics } = this.props;

      let shortComicList = comics;
   shortComicList.length = 15;

    return (
      <div className="movie-list">
        <div className="movie-list__title">Comics:</div>
  
        {this.props.comics.length > 0 ? (
        <ul className="movie-list__movies">
          {this.state.isLongComicsList ? (
            <>
              {shortComicList.map((item, i) => (
                <li className="movie-list__movie" key={i}>
                  {item.name}
                </li>
              ))}
              <div onClick={() => this.setState({isLongComicsList: true})}>load more</div>
            </>
          ) : (
            comics.map((item, i) => (
              <li className="movie-list__movie" key={i}>
                {item.name}
              </li>
            ))
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
