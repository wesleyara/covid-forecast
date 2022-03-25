const previewCovid = require("../index");

describe("Preview Covid", () => {
  test("Verificar 10 dias", () => {
    expect(previewCovid(10)).toBe(23);
  });

  test("Verificar 0 dias", () => {
    expect(previewCovid(0)).toBe(0);
  });

  test("Verificar dias inválidos", () => {
    expect(previewCovid(-10)).toBe(0);
  });
});
