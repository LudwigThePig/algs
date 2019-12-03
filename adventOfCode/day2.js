const { test, print } = require('./utils');

const puzzleInput = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,19,9,23,1,5,23,27,1,27,9,31,1,6,31,35,2,35,9,39,1,39,6,43,2,9,43,47,1,47,6,51,2,51,9,55,1,5,55,59,2,59,6,63,1,9,63,67,1,67,10,71,1,71,13,75,2,13,75,79,1,6,79,83,2,9,83,87,1,87,6,91,2,10,91,95,2,13,95,99,1,9,99,103,1,5,103,107,2,9,107,111,1,111,5,115,1,115,5,119,1,10,119,123,1,13,123,127,1,2,127,131,1,131,13,0,99,2,14,0,0];


/*******************
 * * Problem One * *
 *******************/
const fixGravityAssistProgram = (input, noun, verb) => {
  const arr = input.slice();
  arr[1] = noun;
  arr[2] = verb;

  for (let i = 0; i < arr.length; i += 4) {
    const [cmd, pos1, pos2, loc] = slice;
    if (cmd === 1) arr[loc] = (arr[pos1] + arr[pos2]);
    if (cmd === 2) arr[loc] = (arr[pos1] * arr[pos2]);
    if (cmd === 99) break;
  }
  return arr[0];
}

test(fixGravityAssistProgram(puzzleInput, 12, 0), 3409710, 'Part One')



/*******************
 * * Problem Two * *
 *******************/

const find19690720 = () => {
  for (let noun = 0; noun <= 100; noun++) 
    for (let verb = 0; verb <= 100; verb++) 
      if (fixGravityAssistProgram(puzzleInput, noun, verb) === 19690720) 
        return 100 * noun + verb;
}

test(find19690720(find19690720), '???', 'Part Two')
