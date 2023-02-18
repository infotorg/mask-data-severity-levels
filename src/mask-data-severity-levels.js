/**
 * Severity for data masking
 *
 * @type {Readonly<{MASK_DATA_SEVERITY_STRICT: string, MASK_DATA_SEVERITY_PARTIAL: string, MASK_DATA_SEVERITY_OPEN: string}>}
 */
module.exports = Object.freeze({
  // The OPEN severity. Data won't be masked at all.
  // Example: 'some data' => 'some data'
  MASK_DATA_SEVERITY_OPEN: 'open',

  // The PARTIAL severity. Data will be masked partially.
  // Example: 'some data' => 'so*****ta'
  MASK_DATA_SEVERITY_PARTIAL: 'partial',

  // The STRICT severity. Data will be masked fully.
  // Example: 'some data' => '*********'
  MASK_DATA_SEVERITY_STRICT: 'strict',
});
