import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {}, [message]);

  const handleClick = (e) => {
    console.log(e.target.value);
    let stimulus = e.target.value;
    if (stimulus === "increase" && progress < 100) {
      let increase = progress + 5;
      setProgress(increase);
      setMessage(increase);
      console.log(typeof message);
    } else if (stimulus === "increase" && progress === 100) {
      setMessage("You have reached 100% buddy, try the decrease button now!:P");
    } else if (stimulus === "decrease" && progress > 0) {
      let decrease = progress - 5;
      setProgress(decrease);
      setMessage(decrease);
    } else {
      setMessage(
        "You are at ground Zero! Try the increase button, let's go,upwards and onwards......"
      );
    }
  };

  return (
    <div className="App">
      <progress id="file" value={progress} max="100">
        {" "}
        32%{" "}
      </progress>
      <br />
      <button value="increase" onClick={handleClick}>
        Increase Progress
      </button>
      <br />
      <button value="decrease" onClick={handleClick}>
        Decrease Progress
      </button>
      <hr />
      <strong>
        Progress: {message} {Number.isInteger(message) ? "%" : ""}{" "}
      </strong>
    </div>
  );
}
