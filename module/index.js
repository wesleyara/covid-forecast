const POPULATION = 50000;
const RATE = -0.00000493723;

module.exports = function forestCovid(d) {
  const dataDays = [];
  const peopleCured = [];

  if (d <= 0) {
    return dataDays;
  }

  for (let i = 0; i < d; i++) {
    if (i < 13) {
      const result =
        Math.floor(
          100004 / (2 + 50000 * Math.exp((POPULATION + 2) * RATE * (i + 1))),
        ) -
        Math.floor(
          100004 / (2 + 50000 * Math.exp((POPULATION + 2) * RATE * i)),
        );

      const total = Math.floor(
        100004 / (2 + 50000 * Math.exp((POPULATION + 2) * RATE * (i + 1))),
      );

      dataDays.push(`${i + 1} -> ${result}, total de casos: ${total}`);

      peopleCured.push(result);
    } else {
      const total = Math.floor(
        (100000 - peopleCured[i - 13] * 2) /
          (2 +
            (50000 - peopleCured[i - 13]) *
              Math.exp((POPULATION - peopleCured[i - 13]) * RATE * (i + 1))),
      );

      const result =
        Math.floor(
          (100000 - peopleCured[i - 13] * 2) /
            (2 +
              (50000 - peopleCured[i - 13]) *
                Math.exp((POPULATION - peopleCured[i - 13]) * RATE * (i + 1))),
        ) -
        Math.floor(
          (100000 - peopleCured[i - 13] * 2) /
            (2 +
              (50000 - peopleCured[i - 13]) *
                Math.exp((POPULATION - peopleCured[i - 13]) * RATE * i)),
        );

      peopleCured.push(result);

      dataDays.push(`${i + 1} -> ${result}, total de casos: ${total}`);
    }
  }

  return dataDays;
};
