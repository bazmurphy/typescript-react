// the older way of doing it was:
// import React, { ReactNode } from "react";

// before React18 you could use the implicit type definition on children but now you must be explicit

// type SectionProps = {
//   title?: string;
//   children: ReactNode;
// };

// using the type React.FunctionComponent or React.FC (shorthand)
// const Section: React.FC<{ title: string }> = ({ children, title }) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       <p>{children}</p>
//     </section>
//   );
// };

// export default Section;

import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  // the children should be type ReactNode
  // type ReactNode = string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined
  children: ReactNode;
};

const Section = ({ children, title = "My Subheading" }: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};

export default Section;
