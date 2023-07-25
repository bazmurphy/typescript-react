import { ReactNode } from "react";
// import the two custom hooks
import { useCounter } from "../context/CounterContext";
import { useCounterText } from "../context/CounterContext";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const CounterFour = ({ children }: ChildrenType) => {
  // bring in the state and functions from the two custom hooks
  const { count, increment, decrement } = useCounter();
  const { text, handleTextInput } = useCounterText();

  return (
    <div>
      <hr />
      <h3>useContext & useReducer & Custom Hooks</h3>
      <p>{children(count)}</p>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <input type="text" onChange={handleTextInput} />
      <p>Text: {text}</p>
    </div>
  );
};

export default CounterFour;
