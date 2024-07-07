import React from 'react';
import { HeroList } from './components/HeroList/HeroList';
import { HeroDetail } from './components/HeroDetail/HeroDetail';
import './App.scss';
import './utils/normilize.scss';

function App() {
  return (
    <div className="App">
      <h1 className="main-title"><span>Marvel </span>information portal</h1>
      <nav className="nav">
        <a href="" className="nav__link">Characters</a>
        <span> / </span>
        <a href="" className="nav__link">Comics</a>
      </nav>

      <HeroList />
      <HeroDetail />
    </div>
  );
}

export default App;
