'use strict'

const {readFile, writeFile} = require('fs')
const toyDataFile = require('./data/toyData.json')

module.exports.getToysByChild = (child) => {
  return new Promise((resolve, reject) => {
    resolve ["ball", "hula hoop"]
  })
}

module.exports.addToy = () => {

}

module.exports.getAllChildren = () => {

}

module.exports.removeItem = () => {

}

module.exports.makeChildHappy = () => {

}
