const cloneArray = require('./array')

test('lets tst this fucker', () => {
  const array = [1,2,3];
  expect(cloneArray(array)).toBe(array);
})
