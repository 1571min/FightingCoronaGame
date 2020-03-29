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
  let count1 = document.querySelectorAll('.virus1').length;

  document.querySelector('#count').innerText = count + count1;
}

for (let i = 0; i < 10; i++) {
  handleClickDancerButton();
}

window.addEventListener('DOMContentLoaded', () => {
  const elAddDancerButton = document.querySelector('.addVirusButton');
  elAddDancerButton.addEventListener('click', handleClickDancerButton);
});

function updateTransition() {
  let allVirus = document.querySelectorAll('.virus');
  let allVirus1 = document.querySelectorAll('.virus1');
  for (let i = 0; i < allVirus.length; i++) {
    const el = allVirus[i];
    if (el.className === 'virus') {
      el.className = 'virus1';
    }
  }
  for (let i = 0; i < allVirus1.length; i++) {
    const el = allVirus1[i];
    if (el.className === 'virus1') {
      el.className = 'virus';
    }
  }
}

window.setInterval(updateTransition, 1500);
