const forestCovid = require("../index");

describe("Preview Covid", () => {
  test("Verificar 10 dias", () => {
    expect(forestCovid(10)).toStrictEqual([
      "1 -> 0, total de casos: 2",
      "2 -> 1, total de casos: 3",
      "3 -> 1, total de casos: 4",
      "4 -> 1, total de casos: 5",
      "5 -> 1, total de casos: 6",
      "6 -> 2, total de casos: 8",
      "7 -> 3, total de casos: 11",
      "8 -> 3, total de casos: 14",
      "9 -> 4, total de casos: 18",
      "10 -> 5, total de casos: 23",
    ]);
  });

  test("Verificar 0 dias", () => {
    expect(forestCovid(0)).toBe(0);
  });

  test("Verificar dias inválidos", () => {
    expect(forestCovid(-10)).toBe(0);
  });
});
