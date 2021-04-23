const binarySearch = (value, list) => {
  let first = 0;
  let last = list.length - 1;
  let position = -1;
  let found = false;
  let middle;
  let steps = 0;
  while (found === false && first <= last) {
      middle = Math.floor((first + last)/2);
      if (list[middle] == value) {
          found = true;
          position = middle;
          steps++;
      } else if (list[middle] > value) {
          last = middle - 1;
          steps++;
      } else {
          first = middle + 1;
          steps++;
      }
  }
  return steps;
}

const linearSearch = (value, list) => {
  let found = false;
  let position = -1;
  let index = 0;
  let steps = 0;
  while(!found && index < list.length) {
      if(list[index] == value) {
        found = true;
        position = index;
        steps++;
      } else {
        index += 1;
        steps++
      }
  }
  return steps;
}

export { binarySearch, linearSearch };