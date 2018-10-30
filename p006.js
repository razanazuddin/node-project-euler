/* https://projecteuler.net/problem=6
 *
 * Sum square difference
 * 
 * The sum of the squares of the first ten natural numbers is, 1^2 + 2^2 + ... + 10^2 = 385
 * The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)^2 = 55^2 = 3025
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 * 
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

function sum_of_squares(from, to) {
    let squareArray = [];
    for(let i = from; i <= to; i++) {
        squareArray.push(Math.pow(i,2));
    }

    return squareArray.reduce(function(a, b) {
        return a + b;
    }, 0);
}

function square_of_sum(from, to) {
    let sumArray = [];

    for(let i = from; i <= to; i++) {
        sumArray.push(i);
    }

    let sums = sumArray.reduce(function(a, b) {
        return a + b;
    }, 0);

    return Math.pow(sums,2);
}

function sum_square_difference(from, to) {
    return square_of_sum(from, to) - sum_of_squares(from, to);
}

console.log(sum_square_difference(1, 100));