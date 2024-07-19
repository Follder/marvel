import React, { Component } from 'react';
import { HeroList } from './components/HeroList/HeroList';
import { HeroDetail } from './components/HeroDetail/HeroDetail';
import './App.scss';
import './utils/normilize.scss';
import { Header } from './components/Header/Header';
import { BannerCharacters } from './components/BannerCharacters/BannerCharacters';

interface HeroDetailState {
  charId: number | null,
  loading: boolean,
  error: string | null,
}

class App extends Component<{}, HeroDetailState> {
  state: HeroDetailState = {
    charId: null,
    loading: true,
    error: null,
  };

  setHero = (charId: number) => {
    this.setState({ charId });
  };

  setLoading = (loading: boolean) => {
    this.setState({ loading });
  };

  render() {

    return (
      <div className="App">
        <Header />
        <BannerCharacters />
  
        <HeroList setHero={this.setHero} focusHero={this.state.charId} />
        <HeroDetail charId={this.state.charId} />
      </div>
    );
  }
}

export default App;
