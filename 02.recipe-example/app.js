//Make soup
//chop onion
//chop carrots
//boil water for 10 mins
//add carrots boil for 5 mins
//add onion boil for 5 min

//rearrange

//Make soup
//boil water for 10 mins
//chop carrots
//add carrots boil for 5 mins
//chop onion
//add onion boil for 5 min

boilWater(10000);
console.log(`chop carrots`);
boilWater(5000);
console.log(`chop onion`);
boilWater(5000);

function boilWater(time) {
  console.log('boiling...');
  for (let i = 0; i < time; i++) {
    console.log('still not done...');
  }
  console.log('done');
}
