var series = [0, 1];

while (series.length < 10) {

  let firstP = series.pop();

  let secondP = series.pop();
  
  let sum = firstP + secondP;
  series.push(secondP, firstP, sum);
  };


console.log(series);
// the first ten numbers should be
// 0 1 1 2 3 5 8 13 21 34