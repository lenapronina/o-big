import './pages/index.css';
import array from './scripts/defaultArray';
import { binarySearch, linearSearch } from './scripts/searchAlgorithms';

let valueInput;

const form = document.querySelector('.form');
const input = document.querySelector('.form__input');

const binaryValue = document.querySelector('.result__value_type_binary');
const linearValue = document.querySelector('.result__value_type_linear');

// state for check results block apperance
let result = false;
const resultsBlock = document.querySelector('.results');

function updateArgument () {
  valueInput = input.value;
  return valueInput;
}

function showResults(){
  resultsBlock.classList.add('results_opened');
}

function hideResults(){
  resultsBlock.classList.remove('results_opened');
}

form.addEventListener('submit', (evt) =>{
  evt.preventDefault();
  
  updateArgument();

  binaryValue.textContent = binarySearch(valueInput, array);
  linearValue.textContent = linearSearch(valueInput, array);

  showResults();
  result = true;
  return result;
});


input.addEventListener('input', ()=>{
  if(result){
    result = false;
    form.reset();
    hideResults();
  }
})