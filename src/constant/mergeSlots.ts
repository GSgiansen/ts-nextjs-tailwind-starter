export default function mergeSlots(schedule) {
  const res: Array<Array<number>> = [];
  let flag: Boolean = true;
  let start = schedule[0][0];
  for (let i = 0; i < schedule.length; i = i + 1) {
    if (i === schedule.length - 1) {
      res.push([start, schedule[i][1]]);
    } else if (flag) {
      if (schedule[i][1] === schedule[i + 1][0]) {
        continue;
      } else {
        res.push([start, schedule[i][1]]);
        flag = false;
      }
    } else {
      start = schedule[i][0];
      flag = true;
      if (schedule[i][1] === schedule[i + 1][0]) {
        continue;
      } else {
        res.push([start, schedule[i][1]]);
        flag = false;
      }
    }
  }
  console.log(res);
  return res;
}
