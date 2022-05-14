/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var numLength = nums.length;
  var output = [];
  for (var i = 0; i < numLength; i++) {
    for (var j = i + 1; j < numLength; j++) {
      // if (i !== j) {
      //   var testNum = nums[i] + nums[j];
      //   if (testNum === target) {
      //     output.push(i, j);
      //     return output;
      //   }
      if (nums[j] === target - nums[i]) {
        output.push(i, j);
        return output;
      }
    }
  }
};

// this is my first JS exercise