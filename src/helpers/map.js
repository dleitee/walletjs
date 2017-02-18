export default class Map {
  constructor(initialValue) {
    this.map = {
      ...initialValue,
    }
  }

  set = (key, value) => new Map({
    ...this.map,
    [key]: value,
  })

  get = key => this.map[key]
}
