import { ReactNode } from "react";

type CounterTwoProps = {
  // this is an example of how to pass down a setState function
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const CounterTwo = ({ setCount, children }: CounterTwoProps) => {
  return (
    <>
      <h2>{children}</h2>
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
export default CounterTwo;
