const MINUTES_IN_DEGREE = 60;
const SECONDS_IN_MINUTE = 60;

function dms(angle) {
  let degreesNum = Math.floor(angle);
  let degrees = padZero(String(degreesNum)) + '˚';
  let degreesRemainder = angle - degreesNum;
  let minutesNum = Math.floor(degreesRemainder * MINUTES_IN_DEGREE);
  let minutes = padZero(String(minutesNum)) + '\'';
  let minutesRemainder = (angle - degreesNum -
    (minutesNum / MINUTES_IN_DEGREE)) * MINUTES_IN_DEGREE;
  let secondsNum = Math.floor(minutesRemainder * SECONDS_IN_MINUTE);
  let seconds = padZero(String(secondsNum)) + '"';
  console.log(degrees + minutes + seconds);
}

function padZero(angleStr) {
  return angleStr.length < 2 ? '0' + angleStr : angleStr;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"