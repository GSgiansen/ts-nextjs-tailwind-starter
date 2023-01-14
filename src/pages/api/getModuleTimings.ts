import removeAll from '@/pages/api/removeAll';

function abstractModCode(mod: string) {
  const end = mod.indexOf('=');
  return mod.slice(0, end);
}

//return array of the slots taken from the mod
function abstractModSlot(mod: string) {
  const res = [];
  const start = mod.indexOf('=') + 1;
  const str = mod.slice(start);
  var typeOflesson = '';
  var beginSlot = false;
  var slot = '';

  var obj = {};
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] == ':' && !beginSlot) {
      //encounted end of lessontype
      obj[dict[typeOflesson]] = typeOflesson;
      beginSlot = true;
    } else if (str[i] == ',' && beginSlot) {
      obj[dict[typeOflesson]] = slot;
      typeOflesson = '';
      slot = '';
      res.push(obj);
      obj = {};
      beginSlot = false;
    } else if (!beginSlot) {
      typeOflesson += str[i];
    } else if (beginSlot) {
      slot += str[i];
    }
  }

  obj[dict[typeOflesson]] = slot;
  res.push(obj);

  return res;
}

const dict = {
  LEC: 'Lecture',
  REC: 'Recitation',
  LAB: 'Laboratory',
  SEC: 'Sectional Teaching',
  TUT: 'Tutorial',
};

//extract each module and its timings using the api
export default async function getModuleTimings(arr) {
  const num = 0;
  const test = abstractModCode(arr[num]); //test module
  console.log(test);
  const takentimeslots = [];

  const response = await fetch(
    `https://api.nusmods.com/v2/2022-2023/modules/${test}.json`
  );

  var data = await response.json();
  if (data) {
    var ogmoduleSlots = data.semesterData[1].timetable;
    const transformedData = abstractModSlot(arr[num]); //returns data that can be compared foe
    //console.log(transformedData);
    transformedData.forEach(helper);
    function helper(mod) {
      for (const property in mod) {
        //console.log(`${property}: ${mod[property]}`);
        var moduleSlots = ogmoduleSlots.filter((obj) =>
          Object.values(obj).includes(property)
        );
        moduleSlots = moduleSlots.filter((obj) =>
          Object.values(obj).includes(mod[property])
        );
        for (let i = 0; i < moduleSlots.length; i += 1) {
          takentimeslots.push(moduleSlots[i]);
        }
        //console.log(takentimeslots);
      }
      return removeAll(takentimeslots);
    }
  } else {
    return 'John Cena';
  }
}
