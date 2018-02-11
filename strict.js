module.exports = {
  rules: {
    'color-named': 'never',
    'font-family-name-quotes': 'always-where-recommended',
    'font-weight-notation': ['numeric', { ignore: 'relative' }],
    'function-url-quotes': 'always',
    'string-quotes': 'single',
    'value-keyword-case': 'lower',
    'declaration-property-unit-whitelist': {
      '/^(transition|animation)/': ['s'],
    },
    'selector-attribute-quotes': 'always',
    'selector-max-compound-selectors': 3,
    'selector-max-id': 0,
    'selector-no-qualifying-type': true,
    'selector-max-universal': 1,
    'max-empty-lines': 2,
    'max-nesting-depth': 3,
  },
};
