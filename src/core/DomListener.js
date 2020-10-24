import { capitalize } from './utilis'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener!`)
    }
    this.$root = $root
    this.listeners = listeners


  }
  initDomListener() {
    this.listeners.forEach(listeners => {
      const method = getMethodName(listeners)
      if (!this[method]) {
        const name = this.name || ''
        throw new Error(`Metdod ${method} is not defined in ${name} Component`)
      }
      this[method] = this[method].bind(this) //всегда один контекст куда бы не добавляли
      // on это тоже самое что и addEventListener
      this.$root.on(listeners, this[method])
    })
  }
  removeDomListener() {
    this.listeners.forEach(listeners => {
      const method = getMethodName(listeners);
      if (!this[method]) {
        const name = this.name || ''
        throw new Error(`Metdod ${method} is not defined in ${name} Component`)
      }
      this.$root.removeListener(listeners, this[method])
    })
  }
}
// pure function input => onInput
function getMethodName(name) {
  return 'on' + capitalize(name)
}
