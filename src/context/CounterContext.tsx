import {
  createContext,
  useReducer,
  useCallback,
  ChangeEvent,
  ReactElement,
  useContext,
} from "react";

type StateType = {
  count: number;
  text: string;
};

// define the initial state
export const initialState: StateType = { count: 0, text: "" };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

// define the reducer function
const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error("reducer error");
  }
};

// custom hook to return the state, and dispatch functions
const useCounterContext = (initialState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }),
    []
  );

  const decrement = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }),
    []
  );

  const handleTextInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      dispatch({
        type: REDUCER_ACTION_TYPE.NEW_INPUT,
        payload: event.target.value,
      }),
    []
  );

  return { state, increment, decrement, handleTextInput };
};

type UseCounterContextType = ReturnType<typeof useCounterContext>;

// create an initial context state
const initialContextState: UseCounterContextType = {
  state: initialState,
  increment: () => {},
  decrement: () => {},
  // handleTextInput: (event: ChangeEvent<HTMLInputElement>) => {},
  handleTextInput: () => {},
};

// create a context
export const CounterContext =
  createContext<UseCounterContextType>(initialContextState);

type ChildrenType = {
  children?: ReactElement | undefined;
};

// create a context provider
export const CounterProvider = ({
  children,
  ...initialState
}: ChildrenType & StateType): ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initialState)}>
      {children}
    </CounterContext.Provider>
  );
};

type UseCounterHookType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

// custom hook to return the count state and increment/decrement functions
export const useCounter = (): UseCounterHookType => {
  const {
    state: { count },
    increment,
    decrement,
  } = useContext(CounterContext);
  return { count, increment, decrement };
};

type UseCounterTextHookType = {
  text: string;
  handleTextInput: (event: ChangeEvent<HTMLInputElement>) => void;
};

// custom hook to return the text state and handleTextInput function
export const useCounterText = (): UseCounterTextHookType => {
  const {
    state: { text },
    handleTextInput,
  } = useContext(CounterContext);
  return { text, handleTextInput };
};
