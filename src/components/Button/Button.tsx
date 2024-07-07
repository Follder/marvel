import React from "react";
import './Button.scss';

type Props = {
  width: string,
  height: string,
  color: string,
  text: string,
}

export const Button: React.FC<Props> = ({width, height, color, text}) => {

  const style = {
    width: width,
    height: height,
    backgroundColor: color,
  }

  return (
    <button style={style} className="button">
      {text}
    </button>
  )
}