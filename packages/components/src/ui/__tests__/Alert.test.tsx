import React from "react";
import renderer from "react-test-renderer";
import Alert from "../Alert";

test("Alert renders correctly", () => {
  const component = renderer.create(<Alert message="alert message" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
