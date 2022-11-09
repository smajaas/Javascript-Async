//Javascript is single threaded, synchronous language - Regardless, how many codes of lines we have, JS excecute line by line one after another.

console.log(`i'm first`);
console.log(`i'm second`);
console.log(`i'm third`);

console.log(`i'm first`);
boilingWater();
console.log(`i'm second`);
console.log(`i'm third`);

function boilingWater() {
  console.log('boiling...');
  for (let i = 0; i < 10000; i++) {
    console.log('still not done...');
  }
  console.log('done');
}
