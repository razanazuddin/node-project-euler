/* https://projecteuler.net/problem=2
 *
 * Even Fibonacci numbers
 *
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 */

// Fn = F(n-1) + F(n-2) where F0 = 0 and F1 = 1.

function sum_even_fibonacci(maxSum) {
  let total = 0;
  let a = 0;
  let b = 1;

	while(b < maxSum) {
    a = b;
    b = a + b;
		if (b % 2 == 0)	{	
			total = total + b;
    }
  }

	return total;
}

console.log(sum_even_fibonacci(4000000));