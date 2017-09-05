'use strict'

const {assert: {isFunction, equal}} = require('chai')
const {getToysByChild, addToy, getAllChildren, removeItem, makeChildHappy} = require('../lootbag')

describe('lootbag', () => {
  describe('getToysByChild', () => {
    it('should be a function', () => {
      isFunction(getToysByChild)
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
