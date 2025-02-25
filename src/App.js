import { useState } from "react";
import "./App.scss";
function App() {
  // tạo state lưu số người dùng nhập
  const [inputNum, setInputNum] = useState();

  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
  };

  // tạo state lưu số bí mặt
  const [secretNumber, setsecretNumber] = useState(() => getRandomNumber());
  return (
    <div className="container">
      <h1 className="title">NUMBER GUESSING NAME</h1>
      <input type="text" value={inputNum} />
    </div>
  );
}

export default App;
