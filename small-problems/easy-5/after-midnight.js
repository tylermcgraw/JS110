const MINS_IN_HR = 60;
const HOURS_IN_DAY = 24;

function timeOfDay(minutesAfterMidnight) {
  let hours = Math.floor(minutesAfterMidnight / MINS_IN_HR);
  let minutes = minutesAfterMidnight - (hours * MINS_IN_HR);
  hours = (hours < 0 ? HOURS_IN_DAY + (hours % HOURS_IN_DAY) : hours)
    % HOURS_IN_DAY;
  return padZero(hours) + ':' + padZero(minutes);
}

function padZero(time) {
  time = String(time);
  return time.length < 2 ? '0' + time : time;
}

function afterMidnight(time) {
  let hours = Number(time.slice(0, 2));
  if (hours === HOURS_IN_DAY) hours = 0;
  let minutes = Number(time.slice(3));
  return (hours * MINS_IN_HR) + minutes;
}

function beforeMidnight(time) {
  return (1440 - afterMidnight(time)) % 1440;
}
/*
console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
*/
console.log(afterMidnight("00:00"));
console.log(beforeMidnight("00:00"));
console.log(afterMidnight("12:34"));
console.log(beforeMidnight("12:34"));
console.log(afterMidnight("24:00"));
console.log(beforeMidnight("24:00"));

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);