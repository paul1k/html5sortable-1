/* eslint-env browser */
import defaultConfiguration from './defaultConfiguration'
let store = new Map()
/**
 * Stores data & configurations per Sortable
 * @param {Object} config
 */
export class Store {
  private _config: Map<string, any>|null = null // eslint-disable-line no-undef

  constructor () {
    this.config = null
  }
  /**
   * set the configuration of a class instance
   * @method config
   * @param  config object of configurations
   */
  set config (config?: object): void {
    // combine config with default
    config = Object.assign({}, defaultConfiguration, (typeof config === 'object') ? config : {})
    // add config to map
    this._config = new Map(Object.entries(config))
  }
  /**
   * get the configuration map of a class instance
   * @method config
   * @return {Map<string, any>}
   */
  get config (): Map<string, any> {
    return this._config
  }
  /**
   * set individual configuration of a class instance
   * @method setConfig
   * @param  key valid configuration key
   * @param  value any value
   * @return void
   */
  setConfig (key: string, value: any): void {
    if (!this._config.has(key)) {
      throw new Error(`Trying to set invalid configuration item: ${key}`)
    }
    this._config.set(key, value)
  }
  /**
   * set individual configuration of a class instance
   * @method setConfig
   * @param  key valid configuration key
   * @return any configuration value
   */
  getConfig (key: string): any {
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
export default (sortableElement: Element) => {
  if (!(sortableElement instanceof Element)) {
    throw new Error('Please provide a sortable to the store function.')
  }
  // create new instance if not avilable
  if (!store.has(sortableElement)) {
    store.set(sortableElement, new Store())
  }
  // return instance
  return store.get(sortableElement)
}
