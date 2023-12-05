// Fundamentos
// var nome = "valor"
var minhaVariavel = "Oin";

console.log(minhaVariavel);

// Variáveis e tipos de dados
var meuNumero = 10;

console.log(meuNumero);

console.log(meuNumero + 5);

console.log("10" + 5); // aparece no console como "105"

console.log(typeof meuNumero); // mostra no console o que a variável é, tipo "número"

var booleano = true; //false
console.log(typeof booleano); // aparece no console como boolean

var meuObjeto = {};
var meuArray = [];
var meuNull = null;
var meuUndefined = undefined;

console.log(meuObjeto);
console.log(meuArray);
console.log(meuNull);
console.log(meuUndefined);

// let e const
// novas formas de declarar variáveis

let x = 10;
const y = 5;

console.log(typeof x);

console.log(x, y);

// Operadores aritméticos
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// Operadores de comparação
console.log(x == y); // aparece como false pois x não é igual y
console.log(x != y); // aparece como true pois x é diferente de y

console.log("5" == 5); // Aparece como true pois 5 é igual a 5
console.log("5" === 5); // Aparece como false pois um é texto e outro é número
console.log("5" !== 5); // Aparece como true pois o texto 5 é diferente do número 5

// Operadores lógicos
// AND &&
// OR ||
console.log(10 > 5 && 20 > 5); // aparece como true pois os dois são verdaeiros
console.log(10 > 5 && 20 < 5); // aparece como false pois a segunda afirmativa é falsa
console.log(10 < 5 && 20 < 5); // aparece como false pois as duas afirmativa são falsas

console.log(10 > 5 || 20 > 5); // aparece como true pois os dois são verdadeiros
console.log(10 > 5 || 20 < 5); // aparece como true pois um lado é verdadeiro
console.log(10 < 5 || 20 < 5); // aparece como false pois os dois lados são falsos

// Conversão de tipos
const meuNumero2 = "123";

const meuNumeroConvertido = Number(meuNumero2);

console.log(meuNumeroConvertido);
console.log(typeof meuNumeroConvertido);

// Estrutura de condição - if, else, else if

const idade = 16;

if (idade < 13) {
  console.log("Criança");
} else if (idade < 20) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}

//O Else if pode ser usado várias vezes, pois dá a possibilidade de haver intermediários

if (false) {
  console.log("Isso executa");
} else {
  console.log("Isso agora é executável");
}

// Switch
const fruta = "Banana";

switch (fruta) {
  case "Banana":
    console.log("Nanana é a fruta");
    break;
  case "Maçã":
    console.log("Maçã é a fruta");
    break;
  default:
    console.log("Não tem essa fruta na feirinha");
}

///////// Estruturas de repetição
//1, 2, 3, 4, 5, 6... => dependendo de uma condição

//contador, condição de limite e incremento
for (let i = 0; i < 5; i++) {
  //concatenação
  console.log("O valor de i é: " + i);
}

//While
let k = 0;

while (k < 5) {
  console.log("O valor de k: " + k);
  k++;
}

//Do While
let j = 0;

do {
  console.log("O valor de j é: " + j);

  j++;
} while (j < 5);

///////////////////

//funções
//estrutura:  function nome(argumento1, argumento2) { corpo }
function cumprimentar(nome) {
  console.log("Oie " + nome);
} //Desse jeito não vai aparecer anda pois é preciso invocar a função

//invocação
cumprimentar("Lara");

//Escopo de variáveis (global e local)
let cor = "azul";

// let cor = "preto" -- dá erro, pois ja tem uma variavel em escopo global com esse nome

function mostrarCor() {
  let cor = "verde";

  console.log(cor);
} // Não vai dar erro pois está dentro de um escopo local

console.log(cor); // escopo global

mostrarCor(); // escopo local

// Hoisting = içamento (não dá certo com linguagens antigas pois a função tem que vir antes de puxar ela,
// mas no js ta de boa)
testeHoisting();

function testeHoisting() {
  console.log("Uhuu deu certo");
}

//Arrow function
const testeArrow = () => console.log("Isso também dá certo");

testeArrow();

// truthy e falsy
const minhaVariavel1 = ""; // falsy pois o "valor" não é verdadeiro, não tem nada
const minhaVariavel2 = "Algum texto"; // truly pois você tem algo dentro

if (minhaVariavel1) {
  console.log("é trulyyyy baby");
} else {
  console.log("é falsy baby");
}

if (minhaVariavel2) {
  console.log("É truly baby 2");
} else {
  console.log("é falsy baby 2");
}

// array [], listas
const numeros = [1, 2, 3, 4, 5];

console.log(numeros);

console.log(numeros[0]);

console.log(numeros[2]);

numeros.push(6); // adiciona mais um item na array

console.log(numeros);

// Prototype => OBJETO -> objeto2
// Array => nossos arrays
numeros.pop(); //exclui o ultimo item da ista

console.log(numeros);

// Strings
const minhaStringNova = "Oi Lara!";

// Concatenação = +
const minhaString3 = minhaStringNova + " Ta de boa?";

console.log(minhaString3);

// Interpolação (mais moderna) uso de crase e pode usar ${} pra colocar outra variável dentro
const minhaString4 = `${minhaStringNova} Como você está?`;
console.log(minhaString4);

console.log(minhaString4.length); //quantidade de caracteres
console.log(minhaString4[5]);
console.log(minhaString4.toUpperCase());

//Data e Hora
const agora = Date();
console.log(agora);

const natal = new Date(2023, 11, 25);
console.log(natal);

// Math
console.log(Math.PI);

console.log(Math.round(3.6)); // Arredondar

console.log(Math.sqrt(16)); // Raíz quadrada

console.log(Math.pow(2, 3)); // Potência
