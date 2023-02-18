const maskDataSeverityLevels = require('../src/mask-data-severity-levels');

describe('Tests Mask Data Severity constants', () => {
  test('it exports an object severity level constants', () => {
    expect(typeof maskDataSeverityLevels === 'object').toBe(true);
    expect(Object.keys(maskDataSeverityLevels).length).toBeGreaterThan(0);
  });

  test('it should contain expected severity level constants', () => {
    expect(Object.keys(maskDataSeverityLevels)).toStrictEqual([
      'MASK_DATA_SEVERITY_OPEN',
      'MASK_DATA_SEVERITY_PARTIAL',
      'MASK_DATA_SEVERITY_STRICT',
    ]);
  });

  test.each(Object.values(maskDataSeverityLevels))('each severity name should be not empty string', (severity) => {
    expect(typeof severity === 'string').toBe(true);
    expect(severity.length).toBeGreaterThan(0);
  });

  test('it should contain three severity levels', () => {
    const severityLevels = Object.keys(maskDataSeverityLevels);

    expect(severityLevels).toHaveLength(3);
  });
});
