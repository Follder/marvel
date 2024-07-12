import { Character } from "../types/Character";

export class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=2944d85f14bbb2e47822e595e9618453';

  getResource = async (url: string) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }

    return await res.json();
  }

  getAllCharacters = async () => {
    const characters = await this.getResource(`${this._apiBase}/characters?limit=9&offset=250&${this._apiKey}`);

    console.log(characters);

    return characters.data.results.map(this._transformCharacter);
  }

  getCharacter = async (id: number) => {
    const character = await this.getResource(`${this._apiBase}/characters/${id}?${this._apiKey}`)

    return this._transformCharacter(character.data.results[0]);
  }

  _transformCharacter = (char: any): Character => {
    const description = char.description.length === 0 ? "Unfortunally, information about this character was deleted from Avenger`s servers" : char.description;

    return {
      id: char.id,
      name: char.name,
      description: description,
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    }
  }
}