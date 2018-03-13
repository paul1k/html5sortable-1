/* global describe,test,expect */
import store from '../src/store'
import {Store as StoreClass} from '../src/store'

describe('Testing data store', () => {
  test('should create store if none exists', () => {
    // setup
    let div = window.document.createElement('div')
    // assert before
    expect(store(div)).toBeInstanceOf(StoreClass)
  })
})
