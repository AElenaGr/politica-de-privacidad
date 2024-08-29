// src/components/__tests__/Greeting.test.js
import React from "react";
import { render } from "@testing-library/react";
import Greeting from "../greeting";

test("muestra un saludo con el nombre correcto", () => {
  const { getByText } = render(<Greeting name="Gatsby" />);
  expect(getByText("Hello, Gatsby!")).toBeInTheDocument();
});