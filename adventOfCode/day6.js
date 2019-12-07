const { test } = require('./utils');
const fs = require('fs');
const path = require('path');

const pathName = path.resolve(__dirname, 'day6.input.txt');
const input = fs.readFileSync(pathName, 'utf8').split('\n');

/*******************
 * * Problem One * *
 *******************/
const orbits = {};

input.forEach(orbit => {
  const [planet, moon] = orbit.split(')');
  if (orbits.hasOwnProperty(planet)) orbits[planet].push(moon);
  else orbits[planet] = [moon];
});

const resolveOrbits = (planet, count) => {
  if (!orbits[planet]) return count;
  return count + orbits[planet].reduce((acc, cur) => acc + resolveOrbits(cur, count+1), 0);
}

test(resolveOrbits(orbits.COM, 1), 344238, 'Part One');


/*******************
 * * Problem Two * *
 *******************/



test(findSanta(orbits.COM, 1), '???', 'Part Two')


