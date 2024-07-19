import React from "react";
import "./Button.scss";

type Props = {
  width?: string;
  height?: string;
  color?: string;
  text: string;
  isDisabled?: boolean;
};

export const Button: React.FC<Props> = ({
  width = "102px",
  height = "38px",
  color = "#9F0013",
  text,
  isDisabled = false,
}) => {
  const filter = isDisabled ? "grayscale(0.5)" : "";

  const style = {
    width: width,
    height: height,
    backgroundColor: color,
    filter: filter,
  };

  return (
    <div className="button">
      <button style={style} className="button__elem" disabled={isDisabled}>
        {text}
      </button>
    </div>
  );
};
