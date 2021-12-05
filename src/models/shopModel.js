class shopModel {
  constructor(rawData) {
    // no extends so no need to use 'super()'

    const [getValue, setValue] = (() => {
      let cache = rawData

      const getValue = (key) => {
        return cache[key]
      }

      const setValue = (key, value) => {
        cache[key] = value
        return this
      }

      return [getValue, setValue]
    })()

    this.getValue = getValue
    this.setValue = setValue
  }

  get id() {
    return this.getValue('id')
  }

  // usually won't change the value of ID, so comment this out
  // setId = (value) => {
  //   return this.setValue('id', value)
  // }
}

export default shopModel