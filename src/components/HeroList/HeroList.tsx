import { Component } from "react";
import { HeroItem } from "../HeroItem/HeroItem";
import React from "react";
import "./HeroList.scss";
import { MarvelService } from "../../services/MarvelService";
import { Character } from "../../types/Character";
import { Loader } from "../Loader/Loader";
import { Button } from "../Button/Button";

interface State {
  characters: Character[];
  newCharacters: Character[];
  startCharacterNumber: number;
  loading: boolean;
  error: string | null;
}

interface Props {
  setHero: (charId: number) => void;
}

export class HeroList extends Component<Props, State> {
  state = {
    characters: [],
    newCharacters: [],
    startCharacterNumber: 250,
    loading: true,
    error: null,
  };

  marvelService = new MarvelService();

  getCharacters = () => {
    this.marvelService
      .getAllCharacters()
      .then((res) => this.setState({ characters: res, loading: false }));
  };

  getNewCharacters = (characters: Character[]) => {
    this.marvelService
    .getAllCharacters(this.state.startCharacterNumber)
      .then((res) => this.setState({ characters: [...characters, ...res], loading: false }));
    
    this.setState({startCharacterNumber: this.state.startCharacterNumber + 9})
  };

  handleNewCaracters = () => {
    this.getNewCharacters(this.state.characters)
  }

  componentDidMount(): void {
    this.getCharacters();
  }

  render() {
    if (!this.state.characters) {
      throw new Error("new error");
    }

    window.console.log(this.state.startCharacterNumber);

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

        <div className="hero-list__button" onClick={() => this.handleNewCaracters()}>
          <Button text="load more" />
        </div>
      </div>
    );
  }
}
