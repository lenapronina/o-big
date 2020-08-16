var count = 1;
var countlinear = 1;

function binarySearch(value, list) {
  let first = 0;    //left endpoint
  let last = list.length - 1;   //right endpoint
  let position = -1;
  let found = false;
  let middle;
  while (found === false && first <= last) {
      middle = Math.floor((first + last)/2);
      if (list[middle] == value) {
          found = true;
          position = middle;
          count++;
      } else if (list[middle] > value) {  //if in lower half
          last = middle - 1;
      } else {  //in in upper half
          first = middle + 1;
          count++;
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
          countlinear++
      }
  }
  return position;
}

let linearValue = document.querySelector('.linear_value')

const form = document.querySelector('.form')
const input = document.querySelector('.form__input')
// let linearresult = linearSearch(80, array)
// let result = binarySearch(48967, array)
// console.log(result);




let valueInput

function updateArgument () {
  //evt.preventDefault();


  // Получите значение полей из свойства value
 valueInput = input.value;
//  console.log(valueInput)
  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  return valueInput
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
form.addEventListener('submit', evt =>{

  evt.preventDefault();
  updateArgument()
  console.log(valueInput)
  let linearresult = linearSearch(valueInput, array)
  let result = binarySearch(valueInput, array)
  console.log(count);
  console.log(countlinear);
  form.reset()
});




// console.log(argument)

// console.log(linearValue);



