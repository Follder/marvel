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
    return await this.getResource(`${this._apiBase}/characters?limit=9&offset=250&${this._apiKey}`);
  }

  getCharacter = async (id: number) => {
    const character = await this.getResource(`${this._apiBase}/characters/${id}?${this._apiKey}`)

    window.console.log(character);

    return this._transformCharacter(character);
  }

  _transformCharacter = (res: any): Character => {
    return {
      name: res.data.results[0].name,
      description: res.data.results[0].description,
      thumbnail: `${res.data.results[0].thumbnail.path}.${res.data.results[0].thumbnail.extension}`,
      homepage: res.data.results[0].urls[0].url,
      wiki: res.data.results[0].urls[1].url,
    }
  }
}