import { useState } from "react";

const Counter = () => {
  // Inferred Type:
  // const [count, setCount] = useState(1);
  // Explicit Type:
  const [count, setCount] = useState<number>(1);
  // Union Type:
  // const [count, setCount] = useState<number | null>(null);

  return (
    <>
      <h2>Counter One: {count}</h2>
      <div>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </button>
      </div>
    </>
  );
};
export default Counter;
