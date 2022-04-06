const covidPredict = require("../index");

describe("COVID forecast", () => {
  test("Verificar 10 dias", () => {
    const result = covidPredict.forecastCovid(10, 50000, 2);
    const expected = [0, 1, 1, 1, 1, 2, 3, 3, 4, 5];

    expect(result).toEqual(expected);
  });

  test("Verificar 0 dias", () => {
    expect(covidPredict.forecastCovid(0)).toEqual([]);
  });

  test("Verificar dias inválidos", () => {
    expect(covidPredict.forecastCovid(-10)).toEqual([]);
  });
});
