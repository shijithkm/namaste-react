import React from "react";
import ReactDOM from "react-dom/client";
import Header from './src/componenets/Header'
import Body from './src/componenets/Body'

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
