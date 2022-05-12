/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var specialRoman = [];
  var normalRoman = [];
  for (var i = s.length - 1; i >= 0; i--) {
    if (typeof s[i - 1] !== "undefined") {
      let romanPair = s[i - 1].concat(s[i]);
      if (romanPair === "IV") {
        specialRoman.push(4);
        s = s.replace(romanPair, "");
      } else if (romanPair === "IX") {
        specialRoman.push(9);
        s = s.replace(romanPair, "");
      } else if (romanPair === "XL") {
        specialRoman.push(40);
        s = s.replace(romanPair, "");
      } else if (romanPair === "XC") {
        specialRoman.push(90);
        s = s.replace(romanPair, "");
      } else if (romanPair === "CD") {
        specialRoman.push(400);
        s = s.replace(romanPair, "");
      } else if (romanPair === "CM") {
        specialRoman.push(900);
        s = s.replace(romanPair, "");
      }
    }
  }
  for (var j of s) {
    if (j === "I") {
      normalRoman.push(1);
    } else if (j === "V") {
      normalRoman.push(5);
    } else if (j === "X") {
      normalRoman.push(10);
    } else if (j === "L") {
      normalRoman.push(50);
    } else if (j === "C") {
      normalRoman.push(100);
    } else if (j === "D") {
      normalRoman.push(500);
    } else if (j === "M") {
      normalRoman.push(1000);
    }
  }
  var fullRomanArr = specialRoman.concat(normalRoman);

  var result = fullRomanArr.reduce((total, curr) => {
    return total + curr;
  });

  // console.log(specialRoman);
  // console.log(normalRoman);
  // console.log(fullRomanArr);

  return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
