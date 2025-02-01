class Animal {
  speed = 0;
}

class Rabbit extends Animal {
  speed = 20; // Overrides parent's speed
  earLength = 10;
}

let rabbit = new Rabbit();
console.log(rabbit.speed);     // 20 (Now overridden in Rabbit)
console.log(rabbit.earLength); // 10

