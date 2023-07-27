
import image from "./lone.jpg"
import "./App.css";
import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const re = await fetch("https://api.adviceslip.com/advice");
    const data = await re.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  return (
    <div className="App">
      <img src={image} className="App-logo" alt="logo" />
      <h2 className="Header">
        {!advice ? "Please Click the button to get todays Motivational Qoutes" : advice}
      </h2>
      <br></br>

      <button className="btn" onClick={getAdvice}>Get Advice</button>
      <p>
        You have Viewed <strong>{count}</strong> Affirmations today
      </p>
    </div>
  );
}

export default App;
