import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

import logoPage from "./img/front.png";

function App() {
  //Definimos funcion handleClick y resetCounter para el Button
  const handleClick = () => {
    console.log("Click");
  };

  const resetCounter = () => {
    console.log("Reset");
  };

  //Estructura para renderizar.
  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logoPage} alt="logo" />
      </div>
      <div className="main-container">
        <Counter numClicks="5" />
        <Button text="Click" isButtonClick={true} handleClick={handleClick} />
        <Button text="Reset" isButtonClick={false} handleClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
