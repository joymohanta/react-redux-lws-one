import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

const HooksCounter = () => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div className="bg-gray-300 w-1/3 mx-auto my-4 p-2">
      <h2 className="text-2xl pb-2">{count}</h2>
      <button
        onClick={incrementHandler}
        className="text-xl bg-green-300 border-2 p-2 mx-2"
      >
        Increment
      </button>
      <button
        onClick={decrementHandler}
        className="text-xl bg-red-300 border-2 p-2"
      >
        Decrement
      </button>
    </div>
  );
};

export default HooksCounter;
