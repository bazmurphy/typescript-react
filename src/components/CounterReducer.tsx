// import { ReactNode, useState } from "react";

// // we define the Children Type
// type ChildrenType = {
//   // children is a function that takes in a number and returns a React Node
//   children: (num: number) => ReactNode;
// };

// // it recieves the children of the ChildrenType
// const CounterReducer = ({ children }: ChildrenType) => {
//   // explicitly saying its a number
//   const [count, setCount] = useState<number>(1);

//   const increment = () => setCount((prevCount) => prevCount + 1);
//   const decrement = () => setCount((prevCount) => prevCount - 1);

//   return (
//     <>
//       <p>{children(count)}</p>
//       <div>
//         <button onClick={decrement}>-</button>
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// };

// export default CounterReducer;

// useReducer - An alternative to useState.
// useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values.
// It also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

import { useReducer, ReactNode, ChangeEvent } from "react";

const initialState = { count: 0, text: "" };

// some people do this:
// const REDUCER_ACTION_TYPE = {
//   INCREMENT: "INCREMENT",
//   DECREMENT: "DECREMENT",
//   NEW_INPUT: "NEW_INPUT",
// };

// and some people do this using an enum:
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  // the payload is optional because the increment/decrement don't have a payload
  payload?: string;
};

// define a reducer function
// it has two parameters state and action
// its return value is the same as initialState
const reducer = (
  state: typeof initialState,
  action: ReducerAction
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      // we get an error on "text"
      // Type 'string | undefined' is not assignable to type 'string'.
      // we need to check if it's undefined or not and if it is we need to make it a string with the Null Coalescing Operator - if it's null put in an empty string
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error("reducer error");
  }
};

type ChildrenType = {
  // children is a function that takes in a number and returns a React Node
  children: (num: number) => ReactNode;
};

const CounterReducer = ({ children }: ChildrenType) => {
  // we have the state and the dispatch function destructured from useReducer
  // useReducer starts out with the reducer function we defined above and the initialState we defined above
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });

  const handleTextInput = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: event.target.value,
    });

  return (
    <div>
      <hr />
      <h2>useReducer</h2>
      <p>{children(state.count)}</p>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <input type="text" onChange={handleTextInput} />
      <p>Input: {state.text}</p>
    </div>
  );
};

export default CounterReducer;
