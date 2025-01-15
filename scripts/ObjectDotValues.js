let employees = {
  temporary: [{name: "kimani", age: 34}, {name: "mwiti", age: 23}],
  permanent: {
    "day shift": [{name: "joyanne", age: 26}, {name: "glory", age: 32}],
    "night shift": [{name: "justin", age: 29}, {name: "jamal", age: 21}]
  }
};

console.log(Object.values(employees));

//some more code is need3d here to flatten the objects
//maybe recursive method
