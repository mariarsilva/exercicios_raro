/*
Questão extra do exercício da semana 1.
Programa de saudação :)
Autora: Maria R. Silva
*/
console.log("output padrão.");
process.stdout.write("output com stdout.write. OBS: diferente do console.log, ele não adiciona o 'enter' automaticamente.\n");

//outputs
var outname: string = process.argv[2];
console.log("olá "+ outname);
