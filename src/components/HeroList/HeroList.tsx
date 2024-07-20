import { useEffect, useState } from "react";
import { HeroItem } from "../HeroItem/HeroItem";
import React from "react";
import "./HeroList.scss";
import { MarvelService } from "../../services/MarvelService";
import { Character } from "../../types/Character";
import { Loader } from "../Loader/Loader";
import { Button } from "../Button/Button";

interface Props {
  setHero: (charId: number) => void;
  focusHero: number | null;
}

export const HeroList: React.FC<Props> = ({ setHero, focusHero }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(230);
  const [newLoading, setNewLoading] = useState(false);

  const marvelService = new MarvelService();

  const getCharacters = (offset: number) => {
    setNewLoading(true);
    marvelService.getAllCharacters(offset).then(onCharListLoaded);
  };

  const isSimilar = (res: Character[], characters: Character[]): boolean => {
    return res.some((newChar) =>
      characters.some((existingChar) => newChar.id === existingChar.id)
    );
  };

  const onCharListLoaded = (res: Character[]) => {
    const similar = isSimilar(res, characters);

    if (similar) {
      setCharacters((characters) => [...characters]);
      setOffset((offset) => offset);
    } else {
      setCharacters((characters) => [...characters, ...res]);
      setOffset((offset) => offset + 9);
    }

    setLoading(false);
    setNewLoading(false);
  };

  const handleNewCaracters = () => {
    getCharacters(offset);
  };

  useEffect(() => {
    getCharacters(offset);
  }, []);

  return (
    <div className="hero-list">
      {loading && (
        <div className="hero-list__loader">
          <Loader />
        </div>
      )}

      {!loading &&
        characters.map((char: Character) => {
          return (
            <HeroItem
              char={char}
              setHero={setHero}
              focusHero={focusHero}
              key={char.id}
            />
          );
        })}

      <div className="hero-list__button" onClick={handleNewCaracters}>
        <Button text="load more" isDisabled={newLoading} />
      </div>
    </div>
  );
};
