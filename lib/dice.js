'use strict';

const { randomInt } = require('./math')
const { playSound } = require('./play-sound')

module.exports = {
  roll: (notationString) => {
    let splitNotation = notationString.split('d')
    let count = splitNotation[0]
    let sides = splitNotation[1]
    let total = 0

    for(let i = 0; i < count; i++){
      total = total + randomInt(1, sides)
    }

    playSound()

    return total
  },

  toDiceNotation: (obj) => {
    return `${obj.count.toString()}d${obj.sides.toString()}`
  }
}
