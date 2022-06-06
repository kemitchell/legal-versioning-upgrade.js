const parse = require('legal-versioning-parse')

module.exports = (currentString, candidateString) => {
  if (currentString === candidateString) return false
  const current = parse(currentString)
  const candidate = parse(candidateString)
  if (!current.draft && candidate.draft) return false
  if (candidate.edition < current.edition) return false
  if (candidate.update < current.update) return false
  if (candidate.correction < current.correction) return false
  if (candidate.draft < current.draft) return false
  return true
}
