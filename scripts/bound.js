function f() {
  console.log( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();

function f2() {
  console.log(this.name);
}

let f3 = f2.bind( {name: "John"} ).bind( {name: "Ann" } );

f3();
