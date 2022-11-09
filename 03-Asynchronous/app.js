//Make soup
//boil water for 10 mins
//chop carrots
//add carrots boil for 5 mins
//chop onion
//add onion boil for 5 min
//BROWSER!!!!!! Fetch Data, Get collection,setTimeout,setTimer etc

boilWater(0);
console.log('chop carrots');

for (let i = 0; i < 10000; i++) {
  console.log('still busy');
}

function boilWater(time) {
  console.log('boiling...');
  setTimeout(() => {
    console.log('done');
  }, time);
}
