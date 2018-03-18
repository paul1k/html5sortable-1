/* eslint-env browser */
import defaultConfiguration from './defaultConfiguration'
let store = new Map()
/**
 * @param {Object} config
 */
export class Store {
  private _config: Map<string, any>|null = null // eslint-disable-line no-undef

  constructor (config: object | null | undefined) {
    this.config = config
  }

  set config (config: object | null | undefined) {
    // combine config with default
    config = Object.assign({}, defaultConfiguration, (typeof config === 'object') ? config : {})
    // add config to map
    this._config = new Map(Object.entries(config))
  }

  get config () {
    return this._config
  }

  setConfig (key: string, value: any) {
    if (!this._config.has(key)) {
      throw new Error(`Trying to set invalid configuration item: ${key}`)
    }
    this._config.set(key, value)
  }

  getConfig (key: string) {
    if (!this._config.has(key)) {
      throw new Error(`Invalid configuration item requested: ${key}`)
    }
    return this._config.get(key)
  }

  setData (key: string, value: any) {

  }

  getData (key: string) {

  }

  setEvent (key: string, event: any) {

  }

  getEvent (key: string) {

  }
}
/**
 * @param {Element} sortableElement
 * @returns {Class: Store}
 */
export default (sortableElement: Element, config?: object) => {
  if (!(sortableElement instanceof Element)) {
    throw new Error('Please provide a sortable to the store function.')
  }
  // create new instance if not avilable
  if (!store.has(sortableElement)) {
    store.set(sortableElement, new Store(config))
  // update config if config is given
  } else if (typeof config === 'object') {
    store.get(sortableElement).config = config
  }
  // return instance
  return store.get(sortableElement)
}
