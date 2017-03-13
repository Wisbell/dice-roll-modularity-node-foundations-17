'use strict';

module.exports = {
  randomInt: (lowerBound, upperBound) => {
    return Math.floor(Math.random() * (upperBound - lowerBound)) + lowerBound
  }
}
