import getModuleTimings from '@/pages/api/getModuleTimings';

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
  const ans = getModuleTimings(modules);
  console.log(ans);
  return 'hello';
}
