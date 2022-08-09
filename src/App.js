import './App.css';
import React, {useState} from "react"
import Formular from "./Components/Formular"

function App() {
  const title = "React FAST KALKULAČKA"
  const [xState, setXState] = useState(0);
  const [yState, setyState] = useState(0);

  const inputXonchange = (event) => {
    setXState(event.target.value);
};

  const inputYonChange= (event) => {
    setyState(event.target.value)
  }

  return (
    <div className="App">
    <h1>{title}</h1>
    <Formular
    xOnChange={inputXonchange}
    yOnChange={inputYonChange}
    x={xState}
    y={yState}
    />
    </div>
  );
}

export default App;
