import React from "react";
import "../styles/Button.css";

//Creamos componente y asiganamos las props, clase y evento.
function Button({ text, isButtonClick, handleClick }) {
  return (
    <button
      className={isButtonClick ? "btn-click" : "btn-reset"}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default Button;
