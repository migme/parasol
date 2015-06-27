# parasol

[![npm](https://img.shields.io/npm/v/parasol.svg)](https://www.npmjs.com/package/parasol)
[![npm](https://img.shields.io/npm/dm/parasol.svg)](https://www.npmjs.com/package/parasol)

Handy helpers for the Shadow DOM.

## Installation

```
npm install --save parasol
```

## Usage
Given this DOM structure...
```
<my-parent> (Light DOM)
  (Shadow Root)
    ... (Shadow DOM)
      <my-child> (Shadow DOM)
```

### closest(selectors)
Like [Element.closest](https://dom.spec.whatwg.org/#dom-element-closestselectors) but breaks out of the Shadow root boundary.
```js
import { closest } from 'parasol'
myChild::closest('my-parent') // <my-parent>
```

### host()
Like [ShadowRoot.host](https://w3c.github.io/webcomponents/spec/shadow/#widl-ShadowRoot-host) but works its way up the Shadow DOM until it finds the `host`.
```js
import { host } from 'parasol'
myChild::host() // <my-parent>
```

## Development

Run tests
```
npm test
```

## See Also
- [DOM specification](https://dom.spec.whatwg.org/)
- [dom4](https://www.npmjs.com/package/dom4)
