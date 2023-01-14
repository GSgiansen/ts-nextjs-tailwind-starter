import removeAllArr from '@/constant/removeAllArr';
import removeAll from '@/constant/removeAll';
import { json } from 'stream/consumers';

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

function getModuleCodes(url) {
  const wanted = url.slice(42);
  const modules = [];
  var built = '';
  for (let i = 0; i < wanted.length; i += 1) {
    if (wanted[i] == '&') {
      modules.push(built);
      built = '';
    } else {
      built += wanted.charAt(i);
    }
  }
  modules.push(built);

  return modules;
}

//extract each module and its timings using the api
export default function getModuleTimings(url) {
  async function biggerHelper(mod, num) {
    const modName = abstractModCode(mod);
    console.log(modName);

    var takentimeslots = [];

    const response = await fetch(
      `https://api.nusmods.com/v2/2022-2023/modules/${modName}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        var answer = [];
        var takentimeslots = [];
        var ogmoduleSlots = data.semesterData[1].timetable;
        const transformedData = abstractModSlot(mod); //returns data that can be compared foe
        //console.log(transformedData);
        transformedData.forEach(helper);

        function helper(mod) {
          //iterating through the property
          for (const property in mod) {
            //console.log(`${property}: ${mod[property]}`);
            var moduleSlots = ogmoduleSlots.filter((obj) =>
              Object.values(obj).includes(property)
            );
            moduleSlots = moduleSlots.filter((obj) =>
              Object.values(obj).includes(mod[property])
            );
            for (let i = 0; i < moduleSlots.length; i += 1) {
              // takentimeslots.push(moduleSlots[i]);
              takentimeslots = [...takentimeslots, moduleSlots[i]];
            }

            if (answer.indexOf(takentimeslots) === -1) {
              answer.push(takentimeslots);
            }
          }
        }
        return answer;
      });
    console.log(response);
    return response;
  }

  var arr = getModuleCodes(url); //gives an array with all the timings
  const x = biggerHelper(arr[0], 0);
  // console.log(arr);
  var temp = [];
  for (let i = 0; i < arr.length; i += 1) {
    temp.push(biggerHelper(arr[i], i));
  }
  return temp;
}
