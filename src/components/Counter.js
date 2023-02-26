import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreament = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="bg-gray-300 w-2/4 mx-auto my-4 p-2">
      <h2 className="text-2xl pb-2">{count}</h2>
      <button
        onClick={increament}
        className="text-xl bg-green-300 border-2 p-2 mx-2"
      >
        Increment
      </button>
      <button onClick={decreament} className="text-xl bg-red-300 border-2 p-2">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
