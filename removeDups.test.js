const { removeDups, uniqValuesCounter } = require('./removeDups');

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

test('return number of unique values', () => {
  let nums = [1,1,2,3,3,4,5];
  let updatedNums = removeDups(nums);
  let uniqValues = uniqValuesCounter(updatedNums);
  expect(uniqValues).toEqual(5);
});
