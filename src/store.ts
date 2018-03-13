/**
 * @param {Element} element
 * @returns {Object}
 */
export class Store {
  constructor() {

  }

  setConfig(key: string, value: any) {

  }

  getConfig(key: string) {

  }

  setData(key: string, value: any) {

  }

  getData(key: string) {

  }

  setEvent(key: string, event: any) {

  }

  getEvent(key: string) {

  }

}

let store = new Map()

export default (sortableElement) => {
  // create new instance if not avilable
  if (!store.has(sortableElement)) {
    store.set(sortableElement, new Store())
  }
  // return instance
  return store.get(sortableElement)
}
