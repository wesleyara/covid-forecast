export function forecastCovid(d: number, n: number, x0: number) {
  const dataDays: number[] = [];
  const peopleCured: number[] = [];

  const num = Math.floor((n / 3) * 2);

  if (d <= 0) {
    return dataDays;
  }

  const xT = x0 * 1.28;

  const step1 = x0 * (num + x0);

  const step2 = step1 - xT * x0;

  const step3 = num * xT;

  const step5 = step2 / step3;

  const k = -(-1 / (num + x0)) * Math.log(step5);

  for (let i = 0; i < d; i++) {
    if (i < 13) {
      const result =
        Math.floor(step1 / (x0 + num * Math.exp((num + x0) * k * (i + 1)))) -
        Math.floor(step1 / (x0 + num * Math.exp((num + x0) * k * i)));

      dataDays.push(result);

      peopleCured.push(result);
    } else {
      const result: number =
        Math.floor(
          (step1 - x0 - peopleCured[i - 13] * 2) /
            (x0 +
              (num - peopleCured[i - 13]) *
                Math.exp((num - peopleCured[i - 13]) * k * (i + 1))),
        ) -
        Math.floor(
          (step1 - x0 - peopleCured[i - 13] * 2) /
            (x0 +
              (num - peopleCured[i - 13]) *
                Math.exp((num - peopleCured[i - 13]) * k * i)),
        );

      peopleCured.push(result);

      dataDays.push(result);
    }
  }

  return dataDays;
}
