'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

const maartjesTasks = monday.concat(tuesday);

const maartjesHourlyRate = 20;

function getDurationInHours(arr) {
  const durations = [];
  arr.map(task => durations.push(task.duration / 60));
  return durations;
}

const durationInHours = getDurationInHours(maartjesTasks);

const twoHoursTasks = durationInHours.filter(task => task >= 2);

console.log(twoHoursTasks);

const multiplyDurationWithPerHour = twoHoursTasks.map(hour => hour * maartjesHourlyRate);

const computeEarnings = () => multiplyDurationWithPerHour.reduce((a, b) => a + b, 0);

console.log(`Maartje has earned €${computeEarnings()}`);

// // Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
