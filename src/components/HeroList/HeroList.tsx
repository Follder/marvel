import { Component } from "react";
import { HeroItem } from "../HeroItem/HeroItem";
import React from "react";
import './HeroList.scss';
import { MarvelService } from "../../services/MarvelService";
import { Character } from "../../types/Character";

interface HeroListState {
  characters: Character[];
  loading: boolean;
  error: string | null;
}

export class HeroList extends Component<{}, HeroListState> {
  state = {
    characters: [],
    loading: true,
    error: null,
  }

  marvelService = new MarvelService();

  getCharacters = () => {
    this.marvelService.getAllCharacters()
      .then(res => this.setState({characters: res}));
  }
  componentDidMount(): void {
    this.getCharacters();
  }

  
  render() {
    console.log(this.state.characters);
    if (!this.state.characters) {
      throw new Error ('new error')
    }

    return (
      <div className="hero-list">
        {this.state.characters.map((char: Character) => {
          return (
            <HeroItem name={char.name} thumbnail={char.thumbnail} key={char.id} />
          )
        })}
        {/* <HeroItem src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg" alt="Loki-hero" name="Loki" /> */}

      </div>
    )
  }
}