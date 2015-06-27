/* global describe it expect */
import { host } from '..'

describe('host', () => {
  it('finds the nearest shadow host', () => {
    const grandparent = document.createElement('h3')
    const parent = document.createElement('h2')
    const child = document.createElement('h1')
    parent.appendChild(child)
    grandparent.createShadowRoot()
    grandparent.shadowRoot.appendChild(parent)
    expect(child::host()).to.equal(grandparent)
  })
  it('finds nothing for detached elements', () => {
    const child = document.createElement('h1')
    expect(child::host()).to.be.undefined
  })
  it('finds nothing for light DOM elements', () => {
    const parent = document.createElement('h2')
    const child = document.createElement('h1')
    parent.appendChild(child)
    expect(child::host()).to.be.undefined
  })
})
