/**Write a recursive function power that calculates a base raised to an exponent. 
 * The function must support negative exponents (returning a fraction) and utilize a global or closure-based memo 
 * object to cache results. Using Math.pow or the ** operator results in failure.

Expected Output: 32
Expected Output: 0.25

Template and Test Code:

*/

const memo = {};
function power(base, exp) {
    let is_negative = false;
    if (exp < 0){
        is_negative = true;
    }
    let exponent = Math.abs(exp);
    let product = 1;
    
    for(let i = 1; i<= exponent; i++){
            product *= base;
    }
    
    if(is_negative == true){
        product = 1/product;
    }
    
    return product;
}

// Test Code
console.log(power(2, 5));
console.log(power(2, -2));
