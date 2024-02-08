import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Wolfie",
      breed: "Maltese",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Fury",
      breed: "Maltese",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Simba",
      breed: "Maltese",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));