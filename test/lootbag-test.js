'use strict'

const chai = require('chai')
const {assert, assert: {isFunction, equal, isArray}} = require('chai')
const chaiAsPromised = require('chai-as-promised')
const {getToysByChild, addToy, getAllChildren, removeItem, makeChildHappy} = require('../lootbag')

describe('lootbag', () => {

  describe('getToysByChild', () => {
    it('should be a function', () => {
      isFunction(getToysByChild)
    })
    it('should output an object', () => {
      return getToysByChild("Timmy")
      .then((data) => {
        isArray(data)
      })
    })

  })

  describe('addToy', () => {
    it('should be a function', () => {
      isFunction(addToy)
    })
  })

  describe('getAllChildren', () => {
    it('should be a function', () => {
      isFunction(getAllChildren)
    })
  })

  describe('removeItem', () => {
    it('should be a function', () => {
      isFunction(removeItem)
    })
  })

  describe('makeChildHappy', () => {
    it('should be a function', () => {
      isFunction(makeChildHappy)
    })
  })

})
