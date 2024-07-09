import React from "react";
import './Button.scss';

type Props = {
  width?: string,
  height?: string,
  color?: string,
  text: string,
}

export const Button: React.FC<Props> = ({width="102px", height="38px", color="#9F0013", text}) => {

  const style = {
    width: width,
    height: height,
    backgroundColor: color,
  }

  return (
    <div className="button">
      <button style={style} className="button__elem">
        {text}
      </button>
    </div>
  )
}