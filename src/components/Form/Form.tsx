import React from "react";
import { Button } from "../Button/Button";
import './Form.scss';

export const Form = () => {
  return (
    <div className="form">
      <div className="form__title">Or find a character by name:</div>
      <div className="form__wrapper">
        <input type="text" placeholder="Enter name" className="form__input" />
          <div className="form__button">
            <Button text="find" />
          </div>
      </div>
      <div className="form__error">
        <div>This field is required</div>
      </div>
      <div className="form__error">
        <div>The character was not found. Check the name and try again</div>
      </div>
      <div className="form__message">
        <div>There is! Visit $name page?</div>
        <Button color="#5C5C5C" text="to page" />
      </div>
    </div>
  )
}