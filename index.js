module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recommended-scss"],
  plugins: ["stylelint-scss"],
  rules: {
    // override stylelint-config-standard rules
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless", "first-nested"],
        ignore: ["after-comment"],
        ignoreAtRules: ["else"]
      }
    ],
    "block-closing-brace-newline-after": [
      "always",
      {
        ignoreAtRules: ["if", "else"]
      }
    ],

    // scss syntax rules
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-else-closing-brace-space-after": "always-intermediate",
    "scss/at-else-empty-line-before": "never",
    "scss/at-else-if-parentheses-space-before": "always",
    "scss/at-function-parentheses-space-before": "never",
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-if-closing-brace-space-after": "always-intermediate",
    "scss/at-mixin-argumentless-call-parentheses": "never",
    "scss/at-mixin-parentheses-space-before": "never",
    "scss/dollar-variable-colon-newline-after": "always-multi-line",
    "scss/dollar-variable-colon-space-after": "always-single-line",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-empty-line-before": [
      "always",
      {
        except: ["first-nested", "after-dollar-variable"],
        ignore: ["after-comment", "inside-single-line-block"]
      }
    ],
    "scss/double-slash-comment-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["between-comments", "stylelint-commands"]
      }
    ],
    "scss/double-slash-comment-whitespace-inside": "always",
    "scss/selector-no-redundant-nesting-selector": true
  }
};
