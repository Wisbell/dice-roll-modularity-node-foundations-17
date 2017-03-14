'use strict'

module.exports = (args) => {
  let diceObj = {}

  if(args.length > 2) {
    console.log("Please input the appropiate arguments")
    return process.exit()
  } else if (args.length === 1) {
    diceObj.count = 1
    diceObj.sides = args[0]
  } else if (args.length === 2) {
    diceObj.count = args[0]
    diceObj.sides = args[1]
  } else {
    diceObj.count = 1
    diceObj.sides = 6
  }

  return diceObj
}
