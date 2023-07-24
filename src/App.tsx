import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import CounterTwo from "./components/CounterTwo";
import List from "./components/List";
import Hooks from "./components/Hooks";

import "./App.css";

import { useState } from "react";
import CounterReducer from "./components/CounterReducer";

function App() {
  // mouse over the setCount function to get the Type
  // React.Dispatch<React.SetStateAction<number>>
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title={"Hello"} />
      {/* children are not the same as props, they are put between the opening/closing tags */}
      <Section title={"A different title"}>This is my Section</Section>
      <Counter></Counter>
      <CounterTwo setCount={setCount}>Counter Two: {count}</CounterTwo>
      {/* we pass it the items, and then we create the render function */}
      <List
        items={["😊", "😍", "😁", "😘"]}
        render={(item: string) => <span className="fun">{item}</span>}
      />
      <List
        items={["😎", "🤣", "😜", "🤓"]}
        render={(item: string) => <span className="fun-two">{item}</span>}
      />
      <Hooks />
      {/* the children is a function, that recieves the number and displays the current count */}
      <CounterReducer>{(num: number) => <>Count: {num}</>}</CounterReducer>
    </>
  );
}

export default App;
