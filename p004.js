/* https://projecteuler.net/problem=4
 *
 * Largest palindrome product
 *
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
*/

// 100 ≤ n ≤ 999
// 11000 * n - 9901 * (n / 10) - 989 * (n / 100)

function isPalindrome(x) {
  var pal = parseInt(x.toString().split('').reverse().join(''));

  if(pal === x)
    return true;
  else
    return false;
}

function find_palindrome(from, to) {
	var x, y, product, max = 0;

  for(x = from; x <= to; x++) {
    for(y = x; y <= to; y++) {
      product = x * y;
      if (isPalindrome(product)) {
        if(max < product) { // this is new
          return product;
        }
      }
    }
  }
}

console.log(find_palindrome(100, 999));