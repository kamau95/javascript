 let user = {
   name: "njoroge",
   age: 45,
   spouse: "married"
 }
user.languages = ["java", "tailwind"];
user.info = user;

function create_replacer() {
  let seen = new WeakSet();
  return function check_circular(key, value) {
    if (value && typeof value == "object") {
      if (seen.has(value)) {
        return undefined;
      }
      seen.add(value);
    }
    return value;
  }
}

let stringified = JSON.stringify(user, create_replacer());
console.log(stringified);
