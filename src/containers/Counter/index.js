import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../../app/slide/counterSlide";
import { counterSelector } from "./selectore";
function CounterFeature(props) {
  const dispatch = useDispatch();
  const counter = useSelector(counterSelector);
  console.log('counter1111',counter)
  const handleIncreaseClick = (number) => {
    const action = increase(number);
    dispatch(action);
  };
  const handleDecreaseClick = () => {
    const action = decrease();
    dispatch(action);
  };
  return (
    <div>
      Counter: {counter}
      <div>
        <Button onClick={() => handleIncreaseClick(0)}>Increase</Button>
        <Button onClick={handleDecreaseClick}>Decrease</Button>
        <Button onClick={() => handleIncreaseClick(2)}>Increase + 2</Button>
      </div>
    </div>
  );
}

export default CounterFeature;
