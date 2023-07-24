import { ReactNode } from "react";

// Generic Example
// (T is the generic "placeholder", you could use ListItem or Item etc.)
interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

// when we provide a generic here and we are using "const" and an anonymous function
// it has a hard time recognising the Generic
// so there are a few solutions
// 1:
// <T extends {}>
// and gets TypeScript to recognise it is a generic
// 2:
// <T,>
// add a comma after the T

const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default List;
