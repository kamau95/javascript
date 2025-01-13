let epoch = new Date(0);
console.log(epoch);
let after_epoch = new Date(1);
let before_epoch = new Date(-1);
console.log(`after: ${after_epoch} before: ${before_epoch}`);
console.log(Date.now());

console.log(after_epoch.getDay());

console.log(Date.parse("2012-01-26T12:51"));
