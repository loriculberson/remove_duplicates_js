const removeDups = require('./removeDups');

test('array returned without duplicate values', () => {
  let nums = [1,1,2];
  let uniqValues = removeDups(nums);

  expect(uniqValues).toEqual([1,2]);
});

test('array returned without duplicate values', () => {
  let nums = [1,1,2,3,3,4,5];
  let uniqValues = removeDups(nums);

  expect(uniqValues).toEqual([1,2,3,4,5]);
});
