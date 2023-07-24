import { ReactElement } from "react";

type HeadingProps = { title: string };

// the return of a functional component is a JSX.Element (inferred)
// if we are just returning an element like in this case, we can be more explicity and say it is returning a ReactElement
const Heading = ({ title }: HeadingProps): ReactElement => {
  return <h1>{title}</h1>;
};

export default Heading;
