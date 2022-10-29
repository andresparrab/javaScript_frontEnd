const sum = require('./sum')

describe("My fisrt ever sum test", () => {

  test('add two number yeah', () => {
    expect(sum(5, 5)).toBe(10);
  })
})
