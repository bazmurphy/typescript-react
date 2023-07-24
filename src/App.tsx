import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import CounterTwo from "./components/CounterTwo";

import "./App.css";

import { useState } from "react";

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
    </>
  );
}

export default App;
