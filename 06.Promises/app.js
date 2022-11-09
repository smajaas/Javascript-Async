//callbacks,promises,async/await
//PROMISES - Pending, Resolved,Rejected
//then catch - pass another callback

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {});

const promise = new Promise((resolve, reject) => {
  let value = true;
  if (value) {
    resolve([1, 2, 3, 4]);
  } else {
    reject('there was a error, value is false');
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
