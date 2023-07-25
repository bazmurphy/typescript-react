import { ReactNode } from "react";
import { useCounter } from "../context/CounterContext";
import { useCounterText } from "../context/CounterContext";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const CounterFour = ({ children }: ChildrenType) => {
  const { count, increment, decrement } = useCounter();
  const { text, handleTextInput } = useCounterText();

  return (
    <div>
      <hr />
      <h2>useContext & useReducer & Custom Hooks</h2>
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
