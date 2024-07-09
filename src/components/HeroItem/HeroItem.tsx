import React from "react";
import './HeroItem.scss';

type Props = {
  src: string,
  alt: string,
  name: string;
}

export const HeroItem: React.FC<Props> = ({ src, alt, name }) => {
  return (
    <a href="#" className="hero-item">
      <div className="hero-item__image">
        <img src={src} alt={alt} />
      </div>
      <h3 className="hero-item__name">{name}</h3>
    </a>
  );
}