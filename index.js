const parse = require('legal-versioning-parse')

module.exports = (currentString, candidateString) => {
  if (currentString === candidateString) return false
  const current = parse(currentString)
  const candidate = parse(candidateString)
  if (current.draft) {
    return (
      candidate.edition === current.edition &&
      candidate.update === current.update &&
      candidate.correction === current.correction &&
      candidate.draft > current.draft
    )
  }
  if (candidate.draft) return false
  if (candidate.edition < current.edition) return false
  if (candidate.update < current.update) return false
  if (candidate.correction < current.correction) return false
  return true
}
