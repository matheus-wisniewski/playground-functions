// Desafio 1
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
function splitSentence(string) {
  let splitedSentence = string.split(' ');
  return splitedSentence
}

// Desafio 4
function concatName(array) {
 let concatenedNames; 
 let firstName = array[0];
 let lastName = array.pop();

    concatenedNames = lastName + ', ' + firstName;
    return concatenedNames
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
    let highestInArray = array[0];
  for (let index = 0; index < array.length; index+=1) {
   if (array[index] === highestInArray){
    repeat += 1;
   }else if (array[index] > highestInArray){
    highestInArray = array[index];
    repeat = 1;
   }

  }return repeat
} 

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;
  let position;
  // Transforma o valor da variável em positivo. Só usei em uma variável pq era a única dando esse erro.
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
function fizzBuzz(){
}

// Desafio 9
function encode(parametro) {
  let code = [];
  
  for (let index in parametro) {
    if (parametro[index] === 'a') { 
      code.push('1');
    } else if (parametro[index] === 'e'){
      code.push('2');
    } else if (parametro[index] === 'i'){
      code.push('3');
    } else if (parametro[index] ==='o'){
      code.push('4');
    } else if (parametro[index] === 'u'){
      code.push('5');
    }else{
      code.push(parametro[index])
    }
  } return code.join('');
}

function decode(parametroDois){
  let code = [];
  
  for (let index in parametroDois) {
    if (parametroDois[index] === '1') { 
      code.push('a');
    } else if (parametroDois[index] === '2'){
      code.push('e');
    } else if (parametroDois[index] === '3'){
      code.push('i');
    } else if (parametroDois[index] ==='4'){
      code.push('o');
    } else if (parametroDois[index] === '5'){
      code.push('u');
    }else{
      code.push(parametroDois[index])
    }
  } return code.join('');
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