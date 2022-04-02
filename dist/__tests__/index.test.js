"use strict";
const forecastCovid = require("../index");
describe("COVID forecast", () => {
    test("Verificar 10 dias", () => {
        const result = forecastCovid(10, 50000, 2);
        const expected = [0, 1, 1, 1, 1, 2, 3, 3, 4, 5];
        expect(result).toEqual(expected);
    });
    test("Verificar 0 dias", () => {
        expect(forecastCovid(0)).toEqual([]);
    });
    test("Verificar dias inválidos", () => {
        expect(forecastCovid(-10)).toEqual([]);
    });
});
