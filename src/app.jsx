import React from "react";
import reactDom from "react-dom";
import User from "./demo.jsx";

reactDom.render(
    <h1>Hello { User.name }</h1>,
    document.getElementById("app")
  );