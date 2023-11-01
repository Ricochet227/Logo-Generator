const { Circle, Square, Triangle } = require('./shapes');

test('Circle render method should return the correct SVG string with default color', () => {
  const circle = new Circle();
  expect(circle.render()).toEqual('<circle cx="50" cy="50" r="40" fill="black" />');
});

test('Square render method should return the correct SVG string with specified color', () => {
  const square = new Square();
  square.setColor('red');
  expect(square.render()).toEqual('<rect x="10" y="10" width="80" height="80" fill="red" />');
});

test('Triangle render method should return the correct SVG string with default color', () => {
  const triangle = new Triangle();
  expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="black" />');
});

test('Triangle setColor method should set the color property correctly', () => {
  const triangle = new Triangle();
  triangle.setColor('blue');
  expect(triangle.color).toEqual('blue');
});