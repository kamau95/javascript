function aclean(arr) {
  let my_map = new Map();
  for(let str of arr) {
    let sorted = str.toLowerCase().split('').sort().join('');
    my_map.set(sorted, str);
  }
  console.log( Array.from(my_map.values()));
}


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
aclean(arr);

//another one
function aclean1(arr) {
  const entries = arr.map(str => [str.toLowerCase().split('').sort().join(''), str]);
  const obj = Object.fromEntries(entries);
  console.log( Object.values(obj));
  console.log(entries);
}
aclean1(arr);
