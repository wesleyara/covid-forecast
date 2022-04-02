const forestCovid = require("../index");

describe("Preview Covid", () => {
  test("Verificar 10 dias", () => {
    const result = forestCovid(10);
    const expected = [0, 1, 1, 1, 1, 2, 3, 3, 4, 5];

    expect(result).toEqual(expected);
  });

  test("Verificar 0 dias", () => {
    expect(forestCovid(0)).toEqual([]);
  });

  test("Verificar dias inválidos", () => {
    expect(forestCovid(-10)).toEqual([]);
  });
});
