const print = (day, ...args) => console.log(`Day ${day}:\n`, ...args)
const test = (given, expected, title = '__Test__') => console.log(`\n${title}\nExpected: ${expected}\nReceived: ${given}\n`) 
module.exports = {
  print,
  test,
}