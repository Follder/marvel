import React from "react"
import './MovieList.scss'

export const MovieList = () => {
  return (
    <div className="movie-list">
      <div className="movie-list__title">Comics:</div>

      <ul className="movie-list__movies">
        <li className="movie-list__movie">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="movie-list__movie">Alpha Flight (1983) #50</li>
        <li className="movie-list__movie">Amazing Spider-Man (1999) #503</li>
        <li className="movie-list__movie">Amazing Spider-Man (1999) #504</li>
        <li className="movie-list__movie">AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</li>
      </ul>
    </div>
  )
}