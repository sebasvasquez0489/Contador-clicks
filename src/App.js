import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";
import logoPage from "./img/front.png";

function App() {
  //Implementación de Hooks-useState para counter
  const [numClicks, setNumClicks] = useState(0);

  //Definimos funcion handleClick y resetCounter para el Button
  const handleClick = () => {
    setNumClicks(numClicks + 1); //Llama la funcion y actuliza estado.
  };

  const resetCounter = () => {
    setNumClicks(0); //llama funcio asignamos el valor y actualiza el estado.
  };

  //Estructura para renderizar.
  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logoPage} alt="logo" />
      </div>
      <div className="main-container">
        <Counter numClicks={numClicks} />
        <Button text="Click" isButtonClick={true} handleClick={handleClick} />
        <Button text="Reset" isButtonClick={false} handleClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
