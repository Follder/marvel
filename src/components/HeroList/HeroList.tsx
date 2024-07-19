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
  loading: boolean;
  error: string | null;
  offset: number;
  newLoading: boolean;
}

interface Props {
  setHero: (charId: number) => void;
  focusHero: number | null;
}

export class HeroList extends Component<Props, State> {
  state = {
    characters: [],
    loading: true,
    error: null,
    offset: 230,
    newLoading: false,
  };

  marvelService = new MarvelService();

  getCharacters = (offset: number) => {
    this.setState({ newLoading: true });
    this.marvelService.getAllCharacters(offset).then(this.onCharListLoaded);
  };

  isSimilar = (res: Character[], characters: Character[]): boolean => {
    return res.some((newChar) =>
      characters.some((existingChar) => newChar.id === existingChar.id)
    );
  };

  onCharListLoaded = (res: Character[]) => {
    this.setState(({ characters, offset }) => {
      const isSimilar = this.isSimilar(res, characters);

      if (isSimilar) {
        return {
          characters: [...characters],
          loading: false,
          offset: offset,
          newLoading: false,
        };
      }

      return {
        characters: [...characters, ...res],
        loading: false,
        offset: offset + 9,
        newLoading: false,
      };
    });
  };

  handleNewCaracters = () => {
    this.getCharacters(this.state.offset);
  };

  componentDidMount(): void {
    this.getCharacters(this.state.offset);
  }

  render() {
    const { characters, newLoading, loading } = this.state;

    if (!characters) {
      throw new Error("new error");
    }

    return (
      <div className="hero-list">
        {loading ? (
          <div className="hero-list__loader">
            <Loader />
          </div>
        ) : (
          characters.map((char: Character) => {
            return (
              <HeroItem
                char={char}
                setHero={this.props.setHero}
                focusHero={this.props.focusHero}
                key={char.id}
              />
            );
          })
        )}

        <div
          className="hero-list__button"
          onClick={() => this.handleNewCaracters()}
        >
          <Button text="load more" isDisabled={newLoading} />
        </div>
      </div>
    );
  }
}
