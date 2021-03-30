const chai = require('chai');
const expect = chai.expect;

const HydrationRepository = require('../src/HydrationRepository');
const hydrationData = require('../data/hydration.js');

describe('HydrationRepository', function() {

  it('should be a function', function() {
    const hydrationRepo = new HydrationRepository();

    expect(HydrationRepository).to.be.a('function');
  });

})
