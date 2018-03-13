/* eslint-env browser */
let store = new Map()
/**
 * @param {Object} config
 */
export class Store {
  private _config: object = {} // eslint-disable-line no-undef

  constructor (config: object | null | undefined) {
    this.config(config)
  }

  set config (config: object | null | undefined) {

  }

  get config () {
    return this._config
  }

  setConfig (key: string, value: any) {

  }

  getConfig (key: string) {

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
