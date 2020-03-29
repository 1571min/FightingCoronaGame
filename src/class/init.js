/* eslint-disable */
const viruses = [];

function handleClickDancerButton() {
  let lineupDiv = document.querySelector('.lineup');

  let corona = new CoronaVirus(
    document.body.clientHeight * Math.random() * 0.7 + 200,
    document.body.clientWidth * Math.random() * 0.8 + 200,
    Math.random() * 1000 + 1000
  );

  viruses.push(corona);
  lineupDiv.appendChild(corona.$node);
  let count = document.querySelectorAll('.virus').length;
  document.querySelector('#count').innerText = count;
}

for (let i = 0; i < 10; i++) {
  handleClickDancerButton();
}

// window.addEventListener('DOMContentLoaded', () => {
//   const elAddDancerButton = document.querySelector('.lineupButton');
//   elAddDancerButton.addEventListener('click', lineUp);
// });

window.addEventListener('DOMContentLoaded', () => {
  const elAddDancerButton = document.querySelector('.addDancerButton');
  elAddDancerButton.addEventListener('click', handleClickDancerButton);
});
