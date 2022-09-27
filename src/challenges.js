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
function highestCount(array) {
  let repeat = 0;
  let lastIndex = 0;
  
  for(let index = 0; index < array.length; index += 1){
    lastIndex = array[index]

    if(array[index] > lastIndex || array[index] === lastIndex){
      repeat += 1;
    }
  } 
  return repeat;
}

// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;
  let position;
  // Transformar o valor da variável em positivo. Só usei em uma variável pq era a única dando esse erro.
  distanceCat1 = Math.abs(distanceCat1);

  if(distanceCat1 > distanceCat2){
    position = 'cat2';
  }else if(distanceCat2 > distanceCat1){
    position = 'cat1';
  }else if(distanceCat1 == distanceCat2){
    position = 'os gatos trombam e o rato foge';
  } return position
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