import { useState } from "react";
import "./App.scss";
import NumberGuess from "./components/NumberGuess";
function App() {
  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
  };

  // tạo state lưu số bí mặt
  const [secretNumber, setsecretNumber] = useState(() => getRandomNumber());

  const handleTodoSubmit = (value) => {};
  return (
    <div className="container">
      <h1 className="title">NUMBER GUESSING NAME</h1>
      <NumberGuess onClick={handleTodoSubmit} />
    </div>
  );
}

export default App;
