/* eslint-disable */
const viruses = [];

function handleClickDancerButton() {
  let lineupDiv = document.querySelector('.lineup');

  let corona = new CoronaVirus(
    document.body.clientHeight * Math.random() * 0.8,
    document.body.clientWidth * Math.random() * 0.8,
    Math.random() * 1000
  );

  viruses.push(corona);
  // lineupDiv.appendChild(dancer.$node);
  lineupDiv.appendChild(corona.$node);
}
function lineUp() {
  for (let i = 0; i < dancers.length; i++) {
    dancers[i].$node.style.top = '100px';
    dancers[i].$node.style.left = `${i * 100 + 10}px`;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const elAddDancerButton = document.querySelector('.lineupButton');
  elAddDancerButton.addEventListener('click', lineUp);
});

window.addEventListener('DOMContentLoaded', () => {
  const elAddDancerButton = document.querySelector('.addDancerButton');
  elAddDancerButton.addEventListener('click', handleClickDancerButton);
});
