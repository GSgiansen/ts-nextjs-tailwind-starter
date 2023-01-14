import getModuleTimings from '@/constant/getModuleTimings';

//extract an array of module codes from the url given
export default function getModuleCodes(url) {
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
  var res = [];
  for (let i = 0; i < module.length; i += 1) {
    res.push(getModuleTimings[i]);
  }

  console.log(res);
  return 'hello';
}
