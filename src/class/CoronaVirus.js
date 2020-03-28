if (typeof window === 'undefined') {
  global.VirusClass = require('./VirusClass');
} // you don't have to worry about this code. this is for testing.

class CoronaVirus extends VirusClass {
  // your code here
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }

  step() {
    super.step();
    let style = this.$node.style;
    style.display = style.display === 'none' ? 'inline-block' : 'none';
    //2. 랜덤 컬러 스타일을 적용
    // style.backgroundColor =
    //   '#' + parseInt(Math.random() * 0xffffff).toString(16);
    // super.setPosition(this.top + 1, this.left + 1);
  }
}

// you don't have to worry about this code. this is for testing.
if (typeof window === 'undefined') {
  module.exports = CoronaVirus;
}
