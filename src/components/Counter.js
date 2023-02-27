import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

const Counter = ({ count, increment, decrement }) => {
  /*   const [count, setCount] = useState(0);

  const increament = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreament = () => {
    setCount((prevCount) => prevCount - 1);
  }; */

  return (
    <div className="bg-gray-300 w-1/3 mx-auto my-4 p-2">
      <h2 className="text-2xl pb-2">{count}</h2>
      <button
        onClick={increment}
        className="text-xl bg-green-300 border-2 p-2 mx-2"
      >
        Increment
      </button>
      <button onClick={decrement} className="text-xl bg-red-300 border-2 p-2">
        Decrement
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
