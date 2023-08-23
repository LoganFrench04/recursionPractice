/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/
/*
return null statement
base case: n===0
rec step: n+(n-1)
rec case: n>0
*/

function sumToN(n) {
  if (n<0) return null
  if (n>0) {
    sumToN(n +(n-1))

  }

}
sumToN(5) // returns 15


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
