function removeDups(nums) {
  let i = 0;
  while (i <= nums.length - 2) {
    let currentValue = nums[i];
    let nextValue = nums[i+1];
    if (currentValue === nextValue){
      //delete currentValue and reset i by --1
      nums.splice(i, 1);
      //i-=1;
    } else {
    //console.log('Current: ', currentValue);
    //console.log('Next:', nextValue);
      i+=1;
    }
  }
  return nums;
}

function uniqValuesCounter(noDupes) {
  return noDupes.length;
}



module.exports = { removeDups, uniqValuesCounter };
