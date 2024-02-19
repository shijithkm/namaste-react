import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// React Title Componenet
const TitleComponenet = () => {
  const title = "Title Componenet";
  return <h1>{title}</h1>;
};

const element = <h1>I am an element</h1>;

// React Heading Componenet
const HeadingComponenet = () => {
  return (
    <div id="container">
      <TitleComponenet />
      <TitleComponenet></TitleComponenet>
      {TitleComponenet()}
      {element}
      <h1>Heading Componenet</h1>
    </div>
  );
};

root.render(<HeadingComponenet />);
