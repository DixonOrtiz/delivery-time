const fibonacci = (number) => {
  if (number === 0 || number === 1) {
    return [0, 1];
  } else {
    let fibonacciSerie = fibonacci(number - 1);
    fibonacciSerie.push(
      fibonacciSerie[fibonacciSerie.length - 1] +
        fibonacciSerie[fibonacciSerie.length - 2]
    );
    return fibonacciSerie;
  }
};

const rangeDefine = (kilometers) => {
  let range = Math.trunc(kilometers / 100);
  let leftPivot = 0;
  let rightPivot = 0;

  if (kilometers <= 99) {
    leftPivot = 0;
    rightPivot = 99;
    range = 1;
  } else {
    range += 1;
    leftPivot = (range - 1) * 100;
    rightPivot = leftPivot + 99;
  }

  return [range, leftPivot, rightPivot];
};

const estimateDays = (kilometers) => {
  const [range, leftPivot, rightPivot] = rangeDefine(kilometers);
  const fibonacciSerie = fibonacci(range - 1);

  let days = 0;
  if (kilometers <= 99) {
    days = 0;
  } else if (kilometers <= 199) {
    days = 1;
  } else {
    days =
      fibonacciSerie[fibonacciSerie.length - 3] +
      fibonacciSerie[fibonacciSerie.length - 2];
  }

  console.log(`The kilometers entered were: ${kilometers}`);
  console.log(
    `These belong to the range: ${range}° [${leftPivot}-${rightPivot}]`
  );
  console.log(
    `\nYour order will be delivered in ${days} ${days <= 1 ? 'day!' : 'days!'}`
  );
};

const kilometers = Math.floor(Math.random() * 2001);
estimateDays(kilometers);
