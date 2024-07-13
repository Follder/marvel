import { Component } from "react";
import { HeroItem } from "../HeroItem/HeroItem";
import React from "react";
import "./HeroList.scss";
import { MarvelService } from "../../services/MarvelService";
import { Character } from "../../types/Character";
import { Loader } from "../Loader/Loader";
import { Button } from "../Button/Button";

interface HeroListState {
  characters: Character[];
  loading: boolean;
  error: string | null;
}

interface props {
  setHero: (char: Character) => void;
}

export class HeroList extends Component<props, HeroListState> {
  state = {
    characters: [],
    loading: true,
    error: null,
  };

  marvelService = new MarvelService();

  getCharacters = () => {
    this.marvelService
      .getAllCharacters()
      .then((res) => this.setState({ characters: res, loading: false }));
  };
  componentDidMount(): void {
    this.getCharacters();
  }

  render() {
    if (!this.state.characters) {
      throw new Error("new error");
    }

    return (
      <div className="hero-list">
        {this.state.loading ? (
          <div className="hero-list__loader">
            <Loader />
          </div>
        ) : (
          this.state.characters.map((char: Character) => {
            return (
              <HeroItem
                char={char}
                setHero={this.props.setHero}
                key={char.id}
              />
            );
          })
        )}

        <div className="hero-list__button">
          <Button text="load more" />
        </div>
      </div>
    );
  }
}
