/*
Exercício extra da semana 01. Tentativa 3.
Autora: Maria R. Silva
*/

function lerInput(): void{
  const readline = require('readline');
  const lerLinha = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  lerLinha.question("", (resposta)=>{
    console.log(resposta);
    lerLinha.close();
  });
}

lerInput();
