function primeFactors(number) {
  let num = number;
  const factors = [];
  let i = 2;
  while (num > 2) {
    if (num % i === 0) {
      factors.push(i);
      num /= i;
    } else {
      i += 1;
    }
  }
  return factors;
}

export default function gameFindGCD() {
  const randomNum = Math.round(Math.random() * 100);
  const randomNum2 = Math.round(Math.random() * 100);
  const first = primeFactors(randomNum);
  const second = primeFactors(randomNum2);

  const result = first.filter((value) => {
    const index = second.indexOf(value);
    if (index !== -1) {
      second.splice(index, 1);
      return true;
    }
    return false;
  });

  if (result.length === 0) {
    return [`${randomNum} ${randomNum2}`, 1];
  }
  const multIntersections = result.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
  );

  return [`${randomNum} ${randomNum2}`, multIntersections];
}
