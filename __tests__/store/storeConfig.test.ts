/* global describe,test,expect */
import {default as store, Store as StoreClass} from '../../src/store'
import defaultConfiguration from '../../src/defaultConfiguration'

describe('Testing data store', () => {
  test('no sortable provided', () => {
    // assert before
    expect(() => { store() }).toThrow('Please provide a sortable to the store function.')
    expect(() => { store('fake') }).toThrow('Please provide a sortable to the store function.')
  })

  test('should create store if none exists', () => {
    // setup
    let div = window.document.createElement('div')
    // assert before
    expect(store(div)).toBeInstanceOf(StoreClass)
  })

  test('create store with invalid config', () => {
    // setup
    let div = window.document.createElement('div')
    let config = store(div)
    // assert before
    expect(store(div, 'fake').getConfig('maxItems')).toBe(0)
  })

  test('create store with custom config', () => {
    // setup
    let div = window.document.createElement('div')
    let config = store(div, {
      maxItems: 5,
    })
    // assert before
    expect(config.getConfig('maxItems')).toBe(5)
    expect(config.getConfig('debounce')).toBe(0)
  })

  test('update store with custom config', () => {
    // setup
    let div = window.document.createElement('div')
    let config = store(div)
    // assert before
    expect(config.getConfig('maxItems')).toBe(0)
    config = store(div, {
      maxItems: 5,
    })
    expect(config.getConfig('maxItems')).toBe(5)
    expect(config.getConfig('debounce')).toBe(0)
  })

  test('get entire config from store', () => {
    // setup
    let div = window.document.createElement('div')
    let config = store(div, {
      maxItems: 5,
    }).config
    // assert before
    expect(config instanceof Map).toBe(true)
    expect(config.size).toBe(Object.keys(defaultConfiguration).length)
  })

  test('setting config item', () => {
    // setup
    let div = window.document.createElement('div')
    let config = store(div)
    // assert before
    expect(config.getConfig('maxItems')).toBe(0)
    config.setConfig('maxItems',5)
    expect(config.getConfig('maxItems')).toBe(5)
  })

  test('setting invalid config item', () => {
    // setup
    let div = window.document.createElement('div')
    let config = store(div)
    // assert before

    expect(() => { config.setConfig('fake',5) }).toThrowError('Trying to set invalid configuration item: fake')
  })

  test('getting invalid config item', () => {
    // setup
    let div = window.document.createElement('div')
    let config = store(div)
    // assert before

    expect(() => { config.getConfig('fake') }).toThrowError('Invalid configuration item requested: fake')
  })
})
