import { Component } from "react";
import { HeroItem } from "../HeroItem/HeroItem";
import React from "react";
import './HeroList.scss';

export class HeroList extends Component {

  render() {
    return (
      <div className="hero-list">
        <HeroItem src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg" alt="Loki-hero" name="Loki" />
        <HeroItem src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg" alt="Loki-hero" name="Neloki" />
        <HeroItem src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg" alt="Loki-hero" name="Toloki" />
        <HeroItem src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg" alt="Loki-hero" name="Burloki" />
        <HeroItem src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg" alt="Loki-hero" name="Lokivrod" />
        <HeroItem src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg" alt="Loki-hero" name="Selokimor" />
      </div>
    )
  }
}