function divisible(dividend, divisor) {
  let remainder = dividend % divisor;
  console.log('Remainder '+ remainder);

  if (remainder === 0) {
    console.log('Is divisible')
    return true;
  } else (remainder !== 0); {
    console.log('Not Divisible')
    return false;
  }
  }

let result = divisible(7, 3); // false
// let result = divisible(10, 2); // true
console.log(result);



