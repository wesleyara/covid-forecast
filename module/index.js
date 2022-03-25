const POPULATION = 50000;
const RATE = -0.00000493723;

module.exports = function forestCovid(t) {
  if (t <= 1) {
    return 0;
  }

  const dataDays = [];

  for (let i = 0; i < t; i++) {
    const result =
      Math.floor(
        100004 / (2 + 50000 * Math.exp((POPULATION + 2) * RATE * (i + 1))),
      ) -
      Math.floor(100004 / (2 + 50000 * Math.exp((POPULATION + 2) * RATE * i)));

    const total = Math.floor(
      100004 / (2 + 50000 * Math.exp((POPULATION + 2) * RATE * (i + 1))),
    );

    dataDays.push(`${i + 1} -> ${result}, total de casos: ${total}`);
  }

  return dataDays;
};
