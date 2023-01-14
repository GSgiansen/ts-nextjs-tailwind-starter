import React from 'react';
import hello from '../pages/api/hello';
import getModuleCodes from '@/constant/getModuleCodes';
import getModuleTimings from '@/constant/getModuleTimings';
//const timings = hello();
const url =
  'https://nusmods.com/timetable/sem-2/share?CS2030S=LAB:14B,REC:19,LEC:1&CS2040S=TUT:10,REC:05,LEC:1&ES2660=SEC:G12&IS2218=LEC:1&MA1521=LEC:1,TUT:22&UTW1001D=SEC:1';
function TimingDisplay() {
  const ans = getModuleTimings(url);
  var res = [];
  console.log(ans);

  return <div>Answer</div>;
}

export default TimingDisplay;
