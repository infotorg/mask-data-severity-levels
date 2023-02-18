# mask-data-severity-levels

Definitions of severity levels for masking data and shareable constants.

## Installation
```bash
npm install @infotorg/mask-data-severity-levels
```

## Usage
```javascript
const { 
  MASK_DATA_SEVERITY_OPEN,
  MASK_DATA_SEVERITY_PARTIAL,
  MASK_DATA_SEVERITY_STRICT,
} = require('@infotorg/mask-data-severity-levels');

console.log(MASK_DATA_SEVERITY_OPEN); // open
console.log(MASK_DATA_SEVERITY_PARTIAL); // partial
console.log(MASK_DATA_SEVERITY_STRICT); // strict
```

## Tests

Tests are written with `jest`. They can be run with `npm`:

```
npm run test
```

##### LICENSE: MIT
##### AUTHOR: [Volodymyr Chumak](https://github.com/coderua)
