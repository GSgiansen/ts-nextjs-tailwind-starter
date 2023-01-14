import mergeSlots from '@/constant/mergeSlots';

const dict = {
  Monday: 0,
  Tuesday: 1,
  Wednesday: 2,
  Thursday: 3,
  Friday: 4,
  Saturday: 5,
  Sunday: 6,
};

// given a start and end time, removes the busy timeslots from the schedule
function removeBusy(
  schedule: Array<Array<Array<number>>>,
  start: number,
  end: number,
  day: number
) {
  console.log(schedule);
  const busySlots: Array<number> = [];
  const updatedSlots: Array<Array<number>> = [];
  for (let i = 0; i < schedule.length; i = i + 1) {
    if (schedule[day][i][0] === end) {
      break;
    } else if (schedule[day][i][0] === start) {
      busySlots.push(i);
      start = start + 100;
    } else {
      continue;
    }
  }
  for (let i = 0; i < schedule.length; i = i + 1) {
    if (busySlots.includes(i)) {
      continue;
    } else {
      updatedSlots.push(schedule[day][i]);
    }
  }
  schedule[day] = updatedSlots;
  return schedule;
}

export default async function removeAllArr(obj) {
  //array of objects
  function generateSchedule() {
    const schedule: Array<Array<number>> = [];
    for (let i = 0; i < 2400; i = i + 100) {
      schedule.push([i, i + 100]);
    }
    return schedule;
  }
  var WeeklySchedule = [];
  for (let j = 0; j < 7; j += 1) {
    WeeklySchedule[j] = generateSchedule();
  }

  for (let i = 0; i < obj.length; i = i + 1) {
    //console.log(obj[i]);
    const start = parseInt(obj[i].startTime);
    const end = parseInt(obj[i].endTime);
    const d = dict[obj[i].day];
    console.log(d);
    WeeklySchedule = removeBusy(WeeklySchedule, start, end, d);
  }
  for (let i = 0; i < 5; i += 1) {
    WeeklySchedule[i] = mergeSlots(WeeklySchedule[i]);
    console.log(WeeklySchedule);
  }
  console.log(WeeklySchedule);
}
// test = getModuleTimings();

// let schedule = generateSchedule();
// schedule = removeAll(schedule, test);
// mergeTimes(schedule);
