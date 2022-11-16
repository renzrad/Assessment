// Update the getDayTimeDifference() function so it will return the difference between 2 dates broken down in days, hours, minutes and seconds
/*
======================================================
Example output of current date is 2022-10-24 14:49:36
======================================================
Days Elapsed: 145
Hours Elapsed: 6
Minutes Elapsed: 49
Seconds Elapsed: 36
*/

function getDayTimeDifference(currentDate, refDate) {
  let totalSeconds = currentDate.getTime() / 1000 - refDate.getTime() / 1000;
  let seconds = Math.floor(totalSeconds % 60);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  let days = Math.floor(totalSeconds / (3600 * 24));

  return {
    seconds: seconds,
    minutes: minutes,
    hours: hours,
    days: days,
  };
}

const dueDate = new Date("2022-06-01");
const timeDiff = getDayTimeDifference(new Date(), dueDate);
console.log(`Days Elapsed: ${timeDiff.days}`);
console.log(`Hours Elapsed: ${timeDiff.hours}`);
console.log(`Minutes Elapsed: ${timeDiff.minutes}`);
console.log(`Seconds Elapsed: ${timeDiff.seconds}`);
