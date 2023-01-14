import mergeSlots from '@/pages/api/mergeSlots';

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
  schedule: Array<Array<number>>,
  start: number,
  end: number
) {
  const busySlots: Array<number> = [];
  const updatedSlots: Array<Array<number>> = [];
  for (let i = 0; i < schedule.length; i = i + 1) {
    if (schedule[i][0] === end) {
      break;
    } else if (schedule[i][0] === start) {
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
      updatedSlots.push(schedule[i]);
    }
  }
  return updatedSlots;
}

export default async function removeAll(obj) {
  //array of objects
  function generateSchedule() {
    const schedule: Array<Array<number>> = [];
    for (let i = 0; i < 2400; i = i + 100) {
      schedule.push([i, i + 100]);
    }
    return schedule;
  }
  const WeeklySchedule = [];
  for (let j = 0; j < 7; j += 1) {
    WeeklySchedule[j] = generateSchedule();
  }

  for (let i = 0; i < obj.length; i = i + 1) {
    //console.log(obj[i]);
    const start = parseInt(obj[i].startTime);
    const end = parseInt(obj[i].endTime);
    const d = dict[obj[i].day];
    //console.log(d);
    WeeklySchedule[d] = removeBusy(WeeklySchedule[d], start, end);
  }
  // for (let i = 0; i < 5; i += 1) {
  //   const problem = JSON.parse(JSON.stringify(mergeSlots(WeeklySchedule[i])));

  //   if (problem.toString() == [[0, 2400]].toString()) {
  //     console.log('nth is input');
  //   } else {
  //     WeeklySchedule[i] = mergeSlots(WeeklySchedule[i]);
  //     console.log(WeeklySchedule);
  //   }
  // }
  const problem = JSON.parse(JSON.stringify(mergeSlots(WeeklySchedule[0])));
  if (problem.toString() == [[0, 2400]].toString()) {
    console.log('nth is input');
  } else {
    console.log(console.log(mergeSlots(WeeklySchedule[0])));
  }
}
// test = getModuleTimings();

// let schedule = generateSchedule();
// schedule = removeAll(schedule, test);
// mergeTimes(schedule);
