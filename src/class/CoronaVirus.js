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
    // style.display = style.display === 'none' ? 'inline-block' : 'none';
  }
}

// you don't have to worry about this code. this is for testing.
if (typeof window === 'undefined') {
  module.exports = CoronaVirus;
}
