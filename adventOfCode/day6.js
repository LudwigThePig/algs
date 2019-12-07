const { test } = require('./utils');
const fs = require('fs');
const path = require('path');

const pathName = path.resolve(__dirname, 'day6.input.txt');
const input = fs.readFileSync(pathName, 'utf8').split('\n');

const orbits = {};
input.forEach(orbit => {
  const [planet, moon] = orbit.split(')');
  if (orbits.hasOwnProperty(planet)) orbits[planet].push(moon);
  else orbits[planet] = [moon];
});


/*******************
 * * Problem One * *
 *******************/
const resolveOrbits = (planet, count) => {
  if (!orbits[planet]) return count;
  return count + orbits[planet].reduce((acc, cur) => acc + resolveOrbits(cur, count+1), 0);
}

test(resolveOrbits(orbits.COM, 1), 344238, 'Part One');


/*******************
 * * Problem Two * *
 *******************/
const findAstronautSanta = (planet, stack, target) => {
  if (planet === target) return stack;
  if (!orbits[planet]) return;
  const [port, starboard] = orbits[planet];
  return findAstronautSanta(port, [...stack, port], target) || findAstronautSanta(starboard, [...stack, starboard], target);
}

const reuniteMeWithSanta = (myPath, santasPath) => {
  for (let i = 0; i < santasPath.length; i++) {
    if (myPath[i] !== santasPath[i]) return myPath.slice(i).length + santasPath.slice(i).length - 2;
  }
}

const pathToSanta = reuniteMeWithSanta(
  findAstronautSanta(orbits.COM, [], 'YOU'),
  findAstronautSanta(orbits.COM, [], 'SAN')
  );

test(pathToSanta, 436, 'Part Two')
