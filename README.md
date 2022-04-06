# Covid Forecast

O Covid Forecast é um software livre que usa modelagem matemática para prever o número de casos de Covid-19.

## Como usar o Covid Forecast em seus projetos?

Instalando:
```sh
$ npm install https://github.com/wesleyara/covid-forecast
# ou
$ yarn add https://github.com/wesleyara/covid-forecast
```

Utilizando no Node.js:
```js
const covid = require('covid-forecast');

// const data = covid.forecastCovid(n, d, x0) 
// n = número total da população, d = número de dias para prever, x0 = número de casos iniciais
const data = covid.forecastCovid(50000, 20, 2);
console.log(data);
// retorna um array com os números de casos para cada dia.
```

Utilizando no React:
```js

import { forecastCovid } from 'covid-forecast';

// const data = covid.forecastCovid(n, d, x0) 
// n = número total da população, d = número de dias para prever, x0 = número de casos iniciais
const data = forecastCovid(50000, 20, 2);
console.log(data);
// retorna um array com os números de casos para cada dia.
```

## Como usar o Covid Forecast?

### Iniciando com node
```sh
# Clone o repositório
$ git clone https://github.com/wesleyara/covid-forecast.git

# Instale as dependências:
$ npm install

# Execute a aplicação:
$ npm dev

# Execute os testes:
$ npm test
```

### Iniciando com Docker (Windows)
```sh
# Clone o repositório
$ git clone https://github.com/wesleyara/covid-forecast.git

# Crie a imagem
$ docker build -t --rm covid-forecast .

# Execute o container:
$ docker run -it --rm covid-forecast bash

# Execute os testes:
$ npm test

# Execute a aplicação:
$ npm dev

# Remova a imagem
$ docker rmi covid-forecast
```

### Iniciando com Docker (Linux)
```sh
# Clone o repositório
$ git clone https://github.com/wesleyara/covid-forecast.git

# Crie a imagem
$ sudo docker build -t covid-forecast .

# Execute o container:
$ sudo docker run -it --rm covid-forecast bash

# Execute os testes:
$ npm test

# Execute a aplicação:
$ npm dev

# Remova a imagem
$ sudo docker rmi covid-forecast
```

## Testes:
A aplicação foi feita utilizando testes unitários com Jest.
```sh
# Testando a aplicação
$ npm test
```

## Docs

Toda informação sobre o processo de criação desse software está disponível no [DESCRIPTION.md](/docs/DESCRIPTION.md)

### Licença
Covid Forecast está sob a licença MIT. Olhe o arquivo [LICENSE](/LICENSE) para mais detalhes.