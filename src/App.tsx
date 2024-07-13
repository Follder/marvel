import React, { Component } from 'react';
import { HeroList } from './components/HeroList/HeroList';
import { HeroDetail } from './components/HeroDetail/HeroDetail';
import './App.scss';
import './utils/normilize.scss';
import { Header } from './components/Header/Header';
import { BannerCharacters } from './components/BannerCharacters/BannerCharacters';
import { Form } from './components/Form/Form';
import { Character } from './types/Character';

interface HeroDetailState {
  char: Character | null,
  loading: boolean,
  error: string | null,
}

class App extends Component<{}, HeroDetailState> {
  state: HeroDetailState = {
    char: null,
    loading: true,
    error: null,
  };

  setHero = (char: Character) => {
    this.setState({ char });
  };

  setLoading = (loading: boolean) => {
    this.setState({ loading });
  };

  render() {
    if (this.state.char) {
      console.log(this.state.char.id);
    }

    return (
      <div className="App">
        <Header />
        <BannerCharacters />
  
        <HeroList setHero={this.setHero} />
        <HeroDetail loading={this.state.loading} setLoading={this.setLoading} char={this.state.char} />
      </div>
    );
  }
}

export default App;
