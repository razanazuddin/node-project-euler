/* https://projecteuler.net/problem=3
 *
 * Largest prime factor
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

function find_prime_factors(num) {
    if(num == 1) {
        return [];
    } else {
        let factor = [];
        let array = Array.apply(null, { length: num }).map(Number.call, Number);
        array.forEach((element) => {
            if(num % element === 0) {
                factor.push(element);
            }
        });

        return [factor] + find_prime_factors(num / factor);
    }
}

console.log(find_prime_factors(600851475143).max);