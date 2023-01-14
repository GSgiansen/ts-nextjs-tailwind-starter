// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
//obtains a modules timings
export default function hello(req: NextApiRequest, res: NextApiResponse) {
  //res.status(200).json({ name: 'Bambang' });
  const response =fetch('https://api.nusmods.com/v2/2018-2019/modules/CS1101S.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data.semesterData[0].timetable)
    return data.semesterData.timetable;
  });
  
  
}
