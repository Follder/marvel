import React from 'react';
import './ErrorMessage.scss';

type Props = {
  text: string;
}

export const ErrorMessage: React.FC<Props> = ({text}) => {
  return (
    <div className="error__background">
      <div className="error__text">{text}</div>
    </div>
  )
}