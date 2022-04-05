const forecastCovid = require("./modules");
const inquirer = require("inquirer");

interface IQuestion {
  d: number;
  n: number;
  x0: number;
}

inquirer
  .prompt([
    {
      name: "d",
      message: "Quantos dias deseja prever?",
    },
    {
      name: "n",
      message: "Qual o tamanho da população?",
    },
    {
      name: "x0",
      message: "Diga a quantidade inicial de infectados:",
    },
  ])
  .then((answers: IQuestion) => {
    console.log(
      forecastCovid(Number(answers.d), Number(answers.n), Number(answers.x0)),
    );
  })
  .catch((err: string) => {
    console.log(err);
  });
