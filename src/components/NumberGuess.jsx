import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

NumberGuess.propTypes = {
  onClick: PropTypes.func,
};

NumberGuess.defaultProps = {
  onClick: null,
};

function NumberGuess(props) {
  // tạo state lưu số người dùng nhập
  const [inputNum, setInputNum] = useState("");
  const { onClick } = props;
  const typingOfOutRef = useRef(null);

  const handleValueChange = (e) => {
    const value = e.target.value;
    setInputNum(value);

    if (!onClick) return;

    if (typingOfOutRef.current) {
      clearTimeout(typingOfOutRef.current);
    }

    // set giá trị sau khi gõ
    typingOfOutRef.current = setTimeout(() => {
      onClick({ inputNum: value });
    }, 300);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="number"
        value={inputNum}
        onChange={handleValueChange}
        min={1}
        max={100}
      />
      <div>
        <button>ĐOÁN</button>
      </div>
    </form>
  );
}
export default NumberGuess;
