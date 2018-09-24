import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('should compute two given number', () => {
  let app = new App();
  expect(app.computeAdd(1, 1)).toBe(2);
});

it('should compute true', () => {
  let app = new App();
  expect(app.computeBool()).toBe(true);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});