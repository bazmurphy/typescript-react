import { useState, useEffect, useCallback, useMemo, ChangeEvent } from "react";

interface User {
  id: number;
  username: string;
}

const Hooks = () => {
  // useState will infer the type from the initial state, but we can be more explicit
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const [input, setInput] = useState<string>("");

  const [myNumber, setMyNumber] = useState<number>(30);

  // useEffect deals with Side Effects, so it doesn't really return a value (same as useLayoutEffect)
  // so with TypeScript there is nothing much to do
  // Side Effects are "when something changes, something else can happen"
  // it doesn't return a value but maybe you want to change something else

  useEffect(() => {
    console.log("useEffect Mounting...");
    // When you use Strict Mode it mounts the Component
    // then it unmounts it, then it remounts it again

    console.log("useEffect Users: ", users);

    // useEffect does return a Clean Up function
    return () => console.log("useEffect Unmounting...");
  }, [users]);

  const handleAddUser = () => {
    if (!users) {
      setUsers([{ id: 1, username: input }]);
    } else {
      setUsers([
        ...users,
        { id: users[users.length - 1].id + 1, username: input },
      ]);
    }
    setInput("");
  };

  // useCallback memoizes a function so it's not always recreated
  const incrementCount = useCallback(
    () => setCount((prevCount) => prevCount + 1),
    // it also has a dependency array, so if it had anything else it depended on, we would pass that in
    []
  );

  // we can rely on inference but we can also explicitly state the function returns nothing (void)
  const decrementCount = useCallback(
    (): void => setCount((prevCount) => prevCount - 1),
    []
  );

  // if we want to use the event in a function, we get a warning that it implicitly has 'any' applied
  // so we can be more specific and tell it what event it is
  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setInput(event.target.value);
    },
    []
  );

  // useMemo memoizes a value, something that takes a while to calculate and might hold up the application
  type fibonacciFunctionType = (n: number) => number;

  const fibonacciFunction: fibonacciFunctionType = (n) => {
    if (n < 2) return n;
    return fibonacciFunction(n - 1) + fibonacciFunction(n - 2);
  };

  // const myNumber: number = 30;

  const result = useMemo(() => {
    console.log("useMemo of fibonacciFunction");
    return fibonacciFunction(myNumber);
  }, [myNumber]);

  return (
    <div>
      <hr />
      <h2>Hooks</h2>
      <hr />
      <h3>useState & useCallback</h3>
      <p>Count: {count}</p>
      <div>
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
      </div>
      <hr />
      <h3>useState & useEffect</h3>
      <p>Users:</p>
      <ol>
        {users?.map((user) => (
          <li key={user.id}>
            <span>id:{user.id}</span> <span>username:{user.username}</span>
          </li>
        ))}
      </ol>
      <div>
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <hr />
      <h3>useMemo</h3>
      <input
        type="number"
        value={myNumber}
        min={0}
        max={37}
        onChange={(event) => setMyNumber(parseInt(event.target.value))}
      />
      <p>Fibonacci Number: {result}</p>
      <hr />
    </div>
  );
};
export default Hooks;
