```javascript
const upgrade = require('legal-versioning-upgrade')
const assert = require('assert')

for (const [current, candidate, result] of [
  // Upgrade to a later edition.
  ['1.0.0', '2.0.0', true],
  // Upgrade to a later update.
  ['1.0.0', '1.1.0', true],
  // Upgrade to a later correction.
  ['1.0.0', '1.0.1', true],
  // Upgrade to a later draft of the same version.
  ['1.0.0-1', '1.0.0-2', true],
  // Don't upgrade to the same version.
  ['2.0.0', '2.0.0', false],
  // Don't downgrade to earlier versions.
  ['2.0.0', '1.0.0', false],
  ['1.0.0', '0.2.0', false],
  ['1.2.0', '1.1.0', false],
  ['1.0.0-2', '1.0.0-1', false],
  // Don't upgrade to drafts of later versions.
  ['1.0.0', '2.0.0-1', false],
  ['1.0.0', '1.1.0-1', false],
  ['1.0.0', '1.0.1-1', false],
  ['1.0.2', '1.0.1', false],
  ['1.0.0-1', '2.0.0-1', false]
]) assert.equal(upgrade(current, candidate), result)
```
