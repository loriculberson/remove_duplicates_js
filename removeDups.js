function removeDups(nums) {
//Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

//Example:

//Given nums = [1,1,2],

//Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

  //iterate through the array
  //starting array length nums.length
  //set currentValue to num[i]
  //set nextValue to num[i+1]
  //check to see if currentValue === nextValue
  //if it does, delete currentValue and set nextValue to be currentValue
  //loop until currentValue is second is nums[-2]
  i = 0;
  while (i <= nums.length - 2) {
    let currentValue = nums[i];
    let nextValue = nums[i+1];
    if (currentValue === nextValue){
      //delete currentValue and reset i by --1
      nums.splice(i, 1);
      i--;
    }
    console.log('Current: ', currentValue);
    console.log('Next:', nextValue);
    i++;
  }
  return nums;
}

module.exports = removeDups;
