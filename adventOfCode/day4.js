const { test } = require('./utils');

const min = 231832;
const max = 767346;



/*******************
 * * Problem One * *
 *******************/
const partOne = () => {

  let possiblePasswords = 0;
  
  for (let i = min; i <= max; i++) {
    const arr = i.toString().split('');
    let adj = false;
    for (let j = 0; j < arr.length; j++) {
      const prev = arr[j - 1];
      if (!prev) continue;
      if (Number(arr[j]) < Number(prev)) {
        adj = false;
        break;
      }
      if (prev === arr[j]) adj = true;
    }
    if (adj) possiblePasswords++;
  }
  
  return possiblePasswords
}
test(partOne(), 1330, 'Part One');


/*******************
 * * Problem Two * *
 *******************/
const partTwo = () => {

  let possiblePasswords = 0;
  
  for (let i = min; i <= max; i++) {
    const arr = i.toString().split('');
    let adj = false;
    for (let j = 0; j < arr.length; j++) {
      if (Number(arr[j]) < Number(arr[j-1])) {
        adj = false;
        break;
      }
      if (arr[j] == arr[j - 1] && arr[j] !== arr[j + 1] && arr[j] !== arr[j - 2]) adj = true;

    }
    if (adj) possiblePasswords++;
  }

  return possiblePasswords
}


test(partTwo(), 876, 'Part Two')

