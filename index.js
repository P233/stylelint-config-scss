module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    // override stylelint-config-standard rules
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
      },
    ],
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else'],
      },
    ],

    // scss syntax rules
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',

    'scss/at-extend-no-missing-placeholder': true,

    // 'scss/at-function-named-arguments': 'never',
    'scss/at-function-parentheses-space-before': 'never',
    // 'scss/at-function-pattern': regex,

    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',

    'scss/at-import-no-partial-leading-underscore': true,
    // 'scss/at-import-partial-extension-blacklist': [array],
    // 'scss/at-import-partial-extension-whitelist': [array],

    'scss/at-mixin-argumentless-call-parentheses': 'never',
    // 'scss/at-mixin-named-arguments': 'never',
    'scss/at-mixin-parentheses-space-before': 'never',
    // 'scss/at-mixin-pattern': regex,

    'scss/at-rule-no-unknown': true,

    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    // 'scss/dollar-variable-default': true,
    'scss/dollar-variable-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-dollar-variable'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],
    'scss/dollar-variable-no-missing-interpolation': true,
    // 'scss/dollar-variable-pattern': regex,

    // 'scss/percent-placeholder-pattern': regex,

    'scss/double-slash-comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['between-comments', 'stylelint-commands'],
      },
    ],
    // 'scss/double-slash-comment-inline': 'never',
    'scss/double-slash-comment-whitespace-inside': 'always',

    'scss/declaration-nested-properties': 'never',
    // 'scss/declaration-nested-properties-no-divided-groups': true,

    // 'scss/media-feature-value-dollar-variable': 'always',

    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,

    // 'scss/partial-no-import': true,

    'scss/selector-no-redundant-nesting-selector': true,

    // order rules
    'order/order': ['custom-properties', 'dollar-variables', 'declarations'],
  },
};
