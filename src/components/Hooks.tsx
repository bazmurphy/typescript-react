import { useState, useEffect } from "react";

interface User {
  id: number;
  username: string;
}

const Hooks = () => {
  // useState will infer the type from the initial state, but we can be more explicit
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const [input, setInput] = useState<string>("");

  // useEffect deals with Side Effects, so it doesn't really return a value (same as useLayoutEffect)
  // so with TypeScript there is nothing much to do
  // Side Effects are "when something changes, something else can happen"
  // it doesn't return a value but maybe you want to change something else

  useEffect(() => {
    console.log("Mounting...");
    // When you use Strict Mode it mounts the Component
    // then it unmounts it, then it remounts it again

    console.log("Users: ", users);

    // useEffect does return a Clean Up function
    return () => console.log("Unmounting...");
  }, [users]);

  const handleClick = () => {
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

  return (
    <div>
      <hr />
      <h2>Hooks</h2>
      <hr />
      <h3>useState</h3>
      <p>Count: {count}</p>
      <div>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
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
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={handleClick}>Add User</button>
      </div>
      <hr />
    </div>
  );
};
export default Hooks;
