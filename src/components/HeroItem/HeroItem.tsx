import React, { Component } from "react";
import "./HeroItem.scss";
import cn from "classnames";
import { Character } from "../../types/Character";

type Props = {
  char: Character;
  setHero: (charId: number) => void;
  focusHero: number | null;
};

export class HeroItem extends Component<Props> {
  focusRef = React.createRef<HTMLInputElement>();

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.focusHero !== this.props.focusHero) {
      this.focusRef.current?.classList.remove("hero-item_active");

      if (this.props.focusHero === this.props.char.id) {
        
        if (this.focusRef.current) {
          this.focusRef.current?.classList.add("hero-item_active");
          this.focusRef.current.focus();
        }
      }
    }

  }

  render() {
    const { char, setHero } = this.props;

    const isNotAvailible = char.thumbnail.includes("image_not_available")
      ? true
      : false;

    return (
      <div
        onFocus={() => setHero(char.id)}
        ref={this.focusRef}
        tabIndex={0}
        className="hero-item"
      >
        <div className="hero-item__image">
          <img
            src={char.thumbnail}
            alt={char.name}
            className={cn("hero-item__image_pos-center", {
              "hero-item__image_pos-left": isNotAvailible,
            })}
          />
        </div>
        <h3 className="hero-item__name">{char.name}</h3>
      </div>
    );
  }
}
