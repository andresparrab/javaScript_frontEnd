const cloneArray = require('./array')

describe('the ultimate test array', () => {
  test('lets tst this fucker', () => {
    const array = [1, 2, 3];
    expect(cloneArray(array)).not.toBe(array);
    expect(cloneArray(array)).toEqual(array);
  })
})

