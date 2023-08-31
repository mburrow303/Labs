// when you add the string "cheese" to the number 42 you get the result cheese42 which is a concatenized string
console.log("cheese" + 42);

// when you add the string "4" and the number 2 you get the result 42
console.log("4" + 2);

// When you add a number and a string together the resulting data type is a string

// when you add the string "pie" to the boolean true the result is pietrue
console.log("pie" + true);

// when you add the boolean false + the number 8 you get the result 8 and when you add true + the number 8 you get the result 9.
console.log(false + 8);
console.log(true + 8);

// when you add a string to a boolean you get the result stringtrue and the result of that is a string. 
console.log("string" + true);

// when you add null + 7 the result is 7, when you add undefined + 7 the result is NaN - not a number
console.log(null + 7);
console.log(undefined + 7);

// when you subtract a string from a number the result is NaN
console.log(7 - "string");

// when you subtract the boolean true from the number 17 the result is 16, when you use false the result is 17.
console.log(17 - true);
console.log(17 - false);

// when you use strings with division operator the result is NaN
// when you use strings with multiplication operator the result is NaN
// when you use strings with modulus operator the result is Nan
console.log('string' / 'cheese');
console.log('string' * 'cheese');
console.log('string' % 'cheese');

// when you use booleans with division operator the result is either NaN, Infinity, 1 or 0 depending on what is entered T or F
console.log(false / true);
console.log(true / false);
console.log(true / true);
console.log(false / false);

// when you use booleans with multiplication operator the result is either 0 or 1 depnding on what was entered T or F
console.log(false * true);
console.log(true * false);
console.log(true * true);
console.log(false * false);

// when you use booleans with modulus operator the result is 0 or NaN depending on what was entered T or F
console.log(false % true);
console.log(true % false);
console.log(true % true);
console.log(false % false);

// when you perform operations with null as part of them the result is Infinity, 0 or NaN depending on the calculation entered
console.log(7 / null);
console.log(null / 7);

console.log(7 * null);
console.log(null * 7);

console.log(7 % null);
console.log(null % 7);