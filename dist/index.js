"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forecastCovid = void 0;
function forecastCovid(d, n, x0) {
    const dataDays = [];
    const peopleCured = [];
    if (d <= 0) {
        return dataDays;
    }
    const xT = x0 * 1.28;
    const step1 = x0 * (n + x0);
    const step2 = step1 - xT * x0;
    const step3 = n * xT;
    const step5 = step2 / step3;
    const k = -(-1 / (n + x0)) * Math.log(step5);
    for (let i = 0; i < d; i++) {
        if (i < 13) {
            const result = Math.floor(step1 / (x0 + n * Math.exp((n + x0) * k * (i + 1)))) -
                Math.floor(step1 / (x0 + n * Math.exp((n + x0) * k * i)));
            dataDays.push(result);
            peopleCured.push(result);
        }
        else {
            const result = Math.floor((step1 - x0 - peopleCured[i - 13] * 2) /
                (x0 +
                    (n - peopleCured[i - 13]) *
                        Math.exp((n - peopleCured[i - 13]) * k * (i + 1)))) -
                Math.floor((step1 - x0 - peopleCured[i - 13] * 2) /
                    (x0 +
                        (n - peopleCured[i - 13]) *
                            Math.exp((n - peopleCured[i - 13]) * k * i)));
            peopleCured.push(result);
            dataDays.push(result);
        }
    }
    return dataDays;
}
exports.forecastCovid = forecastCovid;
