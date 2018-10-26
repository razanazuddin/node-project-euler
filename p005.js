/* https://projecteuler.net/problem=5
 *
 * Smallest multiple
 * 
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

// LCM (least common multiple) of 1 to 10 is 2520, LCM of 1 to 20 is?

function smallestMultiple(factors) {
  let found = false;

  for(let n = 1; !found; n++) {
    found = factors.every(factor => n % factor === 0);
  }
  
  return n - 1;
}

console.log(smallestMultiple([11, 12, 13, 14, 15, 16, 17, 18, 19,20]));