/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var testNum = x;
  if (testNum < 0 || (testNum % 10 === 0 && testNum !== 0)) {
    return false;
  }

  var rev = 0;
  while (testNum > rev) {
    rev = rev * 10 + (testNum % 10);
    testNum = Math.floor(testNum / 10);
  }
  if (rev === testNum || testNum === Math.floor(rev / 10)) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));

// * the code below is to check if a num is a prime number
// if (x > 1) {
//     for (var i = 2; i < x; i++) {
//       if (x % i !== 0) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }
