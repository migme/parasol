const NODE_DOCUMENT_FRAGMENT = 11

export function host () {
  let parent = this.parentNode
  if (!parent) return
  while (parent.parentNode) {
    parent = parent.parentNode
  }
  if (parent.nodeType === NODE_DOCUMENT_FRAGMENT && parent.host) {
    return parent.host
  }
}
