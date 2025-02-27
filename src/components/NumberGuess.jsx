import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

NumberGuess.propTypes = {
  onClick: PropTypes.func,
  disable: PropTypes.bool,
};

NumberGuess.defaultProps = {
  onClick: null,
  disable: false,
};

function NumberGuess(props) {
  // tạo state lưu số người dùng nhập
  const [inputNum, setInputNum] = useState("");
  const { onClick, disable } = props;
  const typingOfOutRef = useRef(null);

  const handleValueChange = (e) => {
    if (disable) return; // nhập rồi thì dừng
    const value = e.target.value;
    if (value < 1 || value > 100) {
      return;
    }
    setInputNum(value);

    if (!onClick) return;

    if (typingOfOutRef.current) {
      clearTimeout(typingOfOutRef.current);
    }

    // set giá trị sau khi gõ
    typingOfOutRef.current = setTimeout(() => {
      onClick(Number(value));
      setInputNum("");
    }, 300);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="number"
        value={inputNum}
        onChange={handleValueChange}
        disabled={disable}
        placeholder="Input number from 1 to 100"
      />
    </form>
  );
}
export default NumberGuess;
