import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";

import "./App.css";

function App() {
  return (
    <>
      <Heading title={"Hello"} />
      {/* children are not the same as props, they are put between the opening/closing tags */}
      <Section title={"A different title"}>This is my Section</Section>
      <Counter></Counter>
    </>
  );
}

export default App;
