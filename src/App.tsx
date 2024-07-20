import React, { useState } from "react";
import { HeroList } from "./components/HeroList/HeroList";
import { HeroDetail } from "./components/HeroDetail/HeroDetail";
import "./App.scss";
import "./styles/normilize.scss";
import { Header } from "./components/Header/Header";
import { BannerCharacters } from "./components/BannerCharacters/BannerCharacters";

const App = () => {
  const [charId, setCharId] = useState<number | null>(null);

  const setHero = (charId: number) => {
    setCharId(charId);
  };

  return (
    <div className="App">
      <Header />
      <BannerCharacters />

      <HeroList setHero={setHero} focusHero={charId} />
      <HeroDetail charId={charId} />
    </div>
  );
};

export default App;
