import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/dynamicHookCounter/dactions";

const DynamicHookCounter = () => {
  const count = useSelector((state) => state.dynamicCounter.value);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(increment(value));
  };

  const decrementHandler = (value) => {
    dispatch(decrement(value));
  };

  return (
    <div className="bg-gray-300 w-1/3 mx-auto my-4 p-2">
      <h2 className="text-2xl pb-2">{count}</h2>
      <button
        onClick={() => incrementHandler(5)}
        className="text-xl bg-green-300 border-2 p-2 mx-2"
      >
        Increment
      </button>
      <button
        onClick={() => decrementHandler(2)}
        className="text-xl bg-red-300 border-2 p-2"
      >
        Decrement
      </button>
    </div>
  );
};

export default DynamicHookCounter;
