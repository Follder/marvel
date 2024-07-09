import React from 'react';
import { HeroList } from './components/HeroList/HeroList';
import { HeroDetail } from './components/HeroDetail/HeroDetail';
import './App.scss';
import './utils/normilize.scss';
import { Header } from './components/Header/Header';
import { BannerCharacters } from './components/BannerCharacters/BannerCharacters';
import { Form } from './components/Form/Form';
import { BannerComics } from './components/BannerComics/BannerComics';
import { ComicsList } from './components/ComicsList/ComicsList';

function App() {
  return (
    <div className="App">
      <Header />
      <BannerComics />
      <ComicsList />
      {/* <BannerCharacters />

      <HeroList />
      <HeroDetail />
      <Form /> */}
    </div>
  );
}

export default App;
