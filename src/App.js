import "./App.css";
import Button from "./components/Button";
import logoPage from "./img/front.png";

function App() {
  //Definimos funcion handleClick y resetCounter para el Button
  const handleClick = () => {
    console.log("Click");
  };

  const resetCounter = () => {
    console.log("Reset");
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logoPage} alt="logo" />
      </div>
      <div className="main-container">
        <Button text="Click" isButtonClick={true} handleClick={handleClick} />
        <Button text="Reset" isButtonClick={false} handleClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
