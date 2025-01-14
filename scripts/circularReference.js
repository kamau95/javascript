let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

let seen = new WeakSet();

console.log( JSON.stringify(meetup, function replacer(key, value) {
  if (value && typeof value == "object") {
    if (seen.has(value)) {
      return undefined;
    }
      seen.add(value);
  }
  return value;
}));
