'use strict'

module.exports = (args) => {
  let diceObj = {}

  if(args.length === 0 || args.length > 2) {
    console.log("Please input the appropiate arguments")
    return process.exit()
  } else if (args.length === 1) {
    diceObj.count = 1
    diceObj.sides = args[0]
  } else {
    diceObj.count = args[0]
    diceObj.sides = args[1]
  }

  return diceObj
}
