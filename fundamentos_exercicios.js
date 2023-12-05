// Exercícios de fundamentos

// Exercício 1: Olá, Mundo!
// Crie um script que imprima "Olá, Mundo" no console

// Resposta
const oi = "Olá, Mundo!";
console.log(oi);

//Gabarito
console.log("Olá, Mundo!");

// Ambos responderam no console

// Exercício 2: Conversão de tipos
// Dado o valor de uma string "1234" converta-o em número e exiba o tipo de variável no console

const valorString = "1234";
const valorNumber = Number(valorString);
console.log(typeof valorNumber);

// Exercício 3: Manipulação de strings
// Dado uma string "JavaScript é incrível", escreva um código que conte quantos caracteres a string tem e quantas palavras existem na frase

//Resposta
const stringExercicio = "JavaScript é incrivel";
console.log(stringExercicio.length);

const numeroDePalavras = stringExercicio.split(" ").length;
console.log(numeroDePalavras);

// Gabarito

const minhaStringE = "JavaScript é incrível";
const numeroDeCaracteres = minhaStringE.length;
const NumeroDePalavrasResposta = minhaStringE.split(" ").length;

console.log(`O número de caracteres é ${numeroDeCaracteres}`);
console.log(`O número de palavras é ${NumeroDePalavrasResposta}`);

// Exercício 4: Loops e Arrays
// Crie um array com 5 nomes. Use um loop for pra imprimir cada nome no console

const nomesExercicio = ["Lara", "Cauet", "Sabrina", "Alice", "Celio"]; // Errei em nao ter colocado "" nos nomes

// console.log(nomesExercicio); //Errado

for (let i = 0; i < nomesExercicio.length; i++) {
  console.log(nomesExercicio[i]);
}
// Esqueci de abrir as chaves

// Exercicio 5: Funções, String e math
// Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo 14:30)
// a função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo 2:30 PM)
// use o objeto Math para ajudar nessa conversão. Certifique-se de que sua função lida corretamente com
// horários na meia-noite e no meio-dia

//1:26:46

// Não consegui fazer :( vi a resolução toda e tentei fazer

function converterHorario(horario24) {
  const [hora, minuto] = horario24.split(":");

  let hora12 = hora % 12 || 12; // se for 0 substitua por 12

  let periodo = "AM";

  console.log("hora", hora);
  console.log("hora maior", hora > 12);

  if (hora >= 12) {
    periodo = "PM";
  }
  console.log(`${hora12}:${minuto} ${periodo}`);
}

// converterHorario("14:20");
converterHorario("00:45");
converterHorario("12:15");
// converterHorario("22:30");
// converterHorario("9:30");
// converterHorario("21:30");
