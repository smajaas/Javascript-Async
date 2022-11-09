//Make soup
//boil water for 10 mins
//chop carrots
//add carrots boil for 5 mins
//chop onion
//add onion boil for 5 min
//BROWSER!!!!!! Fetch Data, Get collection,setTimeout,setTimer etc
//callbacks,promises,async/await

boilWater();
console.log('chop carrots');

function boilWater() {
  console.log('boiling...');
  setTimeout(() => {
    console.log('boiling water done');
    console.log('add carrots');
    setTimeout(() => {
      console.log('carrots boiling done');
      console.log('add onions');
      setTimeout(() => {
        console.log('onion boiling done');
      }, 500);
    }, 500);
    console.log('chop onion');
  }, 1000);
}
