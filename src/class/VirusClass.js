if (typeof window === 'undefined') {
  var jsdom = require('jsdom');
  var { JSDOM } = jsdom;
  var { document } = new JSDOM('').window;
} // you don't have to worry about this code. this is for testing.

// Virus를 class 키워드를 써서 ES6 방식으로 리팩토링하세요
// 여기에는 Pseudoclassical에서 정의된 Virus와 이름이 겹치므로, VirusClass라는 이름을 사용합니다.
class VirusClass {
  // your code here

  constructor(top, left, timeBetweenSteps) {
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.$node = this.createVirusElement();
    this.step();
    this.setPosition(top, left);
  }

  createVirusElement() {
    let elVirus = document.createElement('span');
    elVirus.className = 'virus';
    elVirus.addEventListener('click', function() {
      elVirus.remove();
      let count = document.querySelectorAll('.virus').length;
      document.querySelector('#count').innerText = count;
    });
    return elVirus;
  }

  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
  setPosition(top, left) {
    Object.assign(this.$node.style, {
      top: `${top}px`,
      left: `${left}px`
    });
  }
}

// you don't have to worry about this code. this is for testing.
if (typeof window === 'undefined') {
  module.exports = VirusClass;
}
