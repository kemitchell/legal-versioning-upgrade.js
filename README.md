```javascript
const upgrade = require('legal-versioning-upgrade')
const assert = require('assert')

for (const [current, candidate, result] of [
  // Upgrade to later editions.
  ['1.0.0', '2.0.0', true],
  // Upgrade to later updates.
  ['1.0.0', '1.1.0', true],
  // Upgrade to later corrections.
  ['1.0.0', '1.0.1', true],
  // Upgrade to later drafts.
  ['1.0.0-1', '1.0.0-2', true],
  ['1.0.0-1', '2.0.0-1', true],
  // Don't upgrade to the same version.
  ['2.0.0', '2.0.0', false],
  // Don't upgrade from finals to drafts.
  ['1.0.0', '2.0.0-1', false],
  // Don't upgrade to earlier versions.
  ['2.0.0', '1.0.0', false],
  ['1.2.0', '1.1.0', false],
  ['1.0.2', '1.0.1', false],
  ['1.0.0-2', '1.0.0-1', false]
]) assert.equal(upgrade(current, candidate), result)
```
