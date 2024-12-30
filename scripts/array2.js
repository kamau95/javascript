let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
let mid = Math.trunc((styles.length - 1) / 2);
styles[mid] = "Classics";
console.log(styles);
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
