'use strict';

const config = require('../');
const stylelint = require('stylelint');

const validSCSS = './__tests__/valid.scss';
const invalidSCSS = './__tests__/invalid.scss';

describe('flags no warnings with valid scss', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      files: [validSCSS],
      config,
    });
  });

  it('did not error', () => {
    return result.then(data => expect(data.errored).toBeFalsy());
  });

  it('flags no warnings', () => {
    return result.then(data => {
      const warningsLength = data.results[0].warnings.length;
      if (warningsLength) {
        console.log(
          '\n============ Warnings ============\n\n',
          data.results[0].warnings,
          '\n\n========== End Warnings ==========\n',
        );
      }
      expect(warningsLength).toBe(0);
    });
  });
});

describe('flags warnings with invalid scss', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      files: [invalidSCSS],
      config,
    });
  });

  it('did error', () => {
    return result.then(data => expect(data.errored).toBeTruthy());
  });

  it('flags one warning', () => {
    return result.then(data => expect(data.results[0].warnings.length).toBe(1));
  });

  it('correct warning text', () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].text).toBe(
        'Expected a leading zero (number-leading-zero)',
      ),
    );
  });

  it('correct rule flagged', () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].rule).toBe('number-leading-zero'),
    );
  });

  it('correct severity flagged', () => {
    return result.then(data => expect(data.results[0].warnings[0].severity).toBe('error'));
  });

  it('correct line number', () => {
    return result.then(data => expect(data.results[0].warnings[0].line).toBe(2));
  });

  it('correct column number', () => {
    return result.then(data => expect(data.results[0].warnings[0].column).toBe(8));
  });
});
