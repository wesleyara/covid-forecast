const POPULATION = 50000;
const RATE = -0.00000493723;
const INFECTED = 2;

module.exports = function forestCovid(d: number) {
  const dataDays: number[] = [];
  const peopleCured: number[] = [];

  if (d <= 0) {
    return dataDays;
  }

  for (let i = 0; i < d; i++) {
    if (i < 13) {
      const result =
        Math.floor(
          100004 /
            (INFECTED +
              50000 * Math.exp((POPULATION + INFECTED) * RATE * (i + 1))),
        ) -
        Math.floor(
          100004 /
            (INFECTED + 50000 * Math.exp((POPULATION + INFECTED) * RATE * i)),
        );

      dataDays.push(result);

      peopleCured.push(result);
    } else {
      const result: number =
        Math.floor(
          (100000 - peopleCured[i - 13] * 2) /
            (INFECTED +
              (50000 - peopleCured[i - 13]) *
                Math.exp((POPULATION - peopleCured[i - 13]) * RATE * (i + 1))),
        ) -
        Math.floor(
          (100000 - peopleCured[i - 13] * 2) /
            (INFECTED +
              (50000 - peopleCured[i - 13]) *
                Math.exp((POPULATION - peopleCured[i - 13]) * RATE * i)),
        );

      peopleCured.push(result);

      dataDays.push(result);
    }
  }

  return dataDays;
};
