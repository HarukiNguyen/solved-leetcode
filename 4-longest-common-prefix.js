/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // get longest string -> use as an index for looping
  const index = Math.max(...(strs.map(str => str.length)));
  const arrs = strs.map(str => str.split(''));
  let finalArr = [];
  for (let i = 0; i < index; i++) {
    // arr to store first char of each string and 
    // renew after each loop
    const strArr = [];
    arrs.forEach(arr => {
      strArr.push(arr.shift());
    })
    const isEqual = strArr.every(v => v === strArr[0]);
    if (isEqual) {
      finalArr.push(strArr);
    } else {
      break;
    }
  }
  const output = finalArr.map(arr => arr[0]);
  console.log(output.join(''));
};

longestCommonPrefix(["cir", "car"]);
