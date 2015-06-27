import { host } from './host'

export function closest (selectors) {
  const match = this.closest(selectors)
  if (match) {
    return match
  }
  const container = this::host()
  if (container) {
    return container::closest(selectors)
  }
}
