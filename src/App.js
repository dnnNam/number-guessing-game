import { useState } from "react";
import "./App.scss";
import NumberGuess from "./components/NumberGuess";
import getRandomNumber from "./funcs/getRandomNumber";
function App() {
  // tạo state lưu số bí mặt
  const [secretNumber, setsecretNumber] = useState(() => getRandomNumber());
  const [message, setMessage] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [disable, setDisable] = useState(false); // chỉ cho nhập 1 lần sau khi nhập xong chỉ có thể bấm nút chơi lại

  const handleTodoSubmit = (number) => {
    console.log(secretNumber);
    console.log(number);
    if (number < 1 || number > 100) {
      setBgColor("yellow");
      setMessage("number not valid!!!");
    }

    if (number === secretNumber) {
      setMessage("Chính xác! Bạn thắng");
      setBgColor("green");
    } else if (number > secretNumber) {
      setMessage("Quá cao!");
      setBgColor("blue");
    } else {
      setMessage("Quá thấp!");
      setBgColor("red");
    }
    setDisable(true); // không cho nhập
  };

  const playAgain = () => {
    setsecretNumber(getRandomNumber()); // chơi lại ramdom lại
    setMessage("");
    setBgColor("white");
    setDisable(false);
  };
  return (
    <div className="container">
      <h1 className="title">NUMBER GUESSING NAME</h1>
      <NumberGuess onClick={handleTodoSubmit} disable={disable} />
      <div className="btn-again">
        <button onClick={playAgain}>Chơi lại</button>
      </div>
      <div className="message" style={{ background: bgColor }}>
        {message}
      </div>
    </div>
  );
}

export default App;
