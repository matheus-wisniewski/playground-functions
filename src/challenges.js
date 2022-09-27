// Desafio 1
// const girafa = true;
// const elefante = true;
// const macaco = false;

function compareTrue(parametro1, parametro2) {
  if(parametro1 === true && parametro2 === true){
    return true;
  } else if(parametro1 === false || parametro2 === false) {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence() {
}

// Desafio 4
function concatName(array) {
}

// Desafio 5
function footballPoints(wins, ties) {
  
  const pointsPerWin = 3;
  const pointsPerTies = 1;

  let calc1 = wins * pointsPerWin;
  let calc2 = ties * pointsPerTies;

  return calc1 + calc2
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
}