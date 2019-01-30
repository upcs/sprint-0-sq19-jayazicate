const sum = require('./functions');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 7 + 3 to equal 10', () => {
  expect(sum(7, 3)).toBe(9);
});

