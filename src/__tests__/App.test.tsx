// @flow
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import App from '../app/App';

describe("App Component", () => {
  it("renders correctly", () => {
    const component = renderer.create(<App buttonName="Un Boton" />).toJSON();
    expect(component).toMatchSnapshot();
  });
});