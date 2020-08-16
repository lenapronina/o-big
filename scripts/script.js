let binaryCount = 1;
let linearCount = 1;

let valueInput;

const form = document.querySelector('.form');
const input = document.querySelector('.form__input');

const resultsBlock = document.querySelector('.results');

const binaryValue = document.querySelector('.result__value_type_binary');
const linearValue = document.querySelector('.result__value_type_linear');

function binarySearch(value, list) {
  let first = 0;
  let last = list.length - 1;
  let position = -1;
  let found = false;
  let middle;
  while (found === false && first <= last) {
      middle = Math.floor((first + last)/2);
      if (list[middle] == value) {
          found = true;
          position = middle;

      } else if (list[middle] > value) {
          last = middle - 1;
          binaryCount++;
      } else {
          first = middle + 1;
          binaryCount++;
      }
  }
  return position;
}


function linearSearch(value, list) {
  let found = false;
  let position = -1;
  let index = 0;
  while(!found && index < list.length) {
      if(list[index] == value) {
          found = true;
          position = index;
      } else {
          index += 1;
          linearCount++
      }
  }
  return position;
}

function updateArgument () {
  valueInput = input.value;
  return valueInput
}

function showResults(){
  resultsBlock.classList.add('results_opened');
}

form.addEventListener('submit', evt =>{
  evt.preventDefault();
  showResults()

  binaryCount = 1;
  linearCount = 1;

  updateArgument()

  linearSearch(valueInput, array)
  binarySearch(valueInput, array)

  binaryValue.textContent = binaryCount;
  linearValue.textContent = linearCount;

  form.reset()
});




// console.log(argument)

// console.log(linearValue);



