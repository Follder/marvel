export type Character = {
  id: number,
  name: string,
  description: string,
  thumbnail: string,
  homepage: string,
  wiki: string,
  comics: CharacterComics[],
}

export type CharacterComics = {
  name: string,
  url: string,
}