const pow = require('../pow');
const { assert } = require('chai');

describe('pow', function() {
  before(function() {
    console.log('Setting up tests...');
  });

  after(function() {
    console.log('Cleaning up...');
  });

  beforeEach(function() {
    console.log('Running a test...');
  });

  afterEach(function() {
    console.log('Test finished.');
  });

  it('should return 8 when 2 is raised to the power of 3', function() {
    assert.equal(pow(2, 3), 8);
  });

  it('should return 1 when any number is raised to the power of 0', function() {
    assert.equal(pow(5, 0), 1);
  });

  it('should throw an error for negative exponents', function() {
    assert.throws(() => pow(2, -3), Error, 'Negative exponents not allowed');
  });
});

