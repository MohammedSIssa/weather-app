function f2c(f) {
  return ((+f - 32) * 5) / 9;
}

function hours24to12(h) {
  if (+h > 12) {
    return +h - 12 + "PM";
  } else if (+h === 12) {
    return "12PM";
  } else if (+h === 0) {
    return "12AM";
  } else {
    return +h + "AM";
  }
}

function whatDayItIs() {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date()
  today = dayNames[now.getDay()]
}
