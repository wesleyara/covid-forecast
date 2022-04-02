const forestCovid = require("./modules");
const readlineSync = require("readline-sync");

const days = readlineSync.question("Quantos dias você deseja prever? ");

console.log(forestCovid(days));
