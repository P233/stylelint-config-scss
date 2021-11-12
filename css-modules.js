// This file is a fork of
// https://github.com/pascalduez/stylelint-config-css-modules/blob/master/index.js
// replaced "at-rule-no-unknown" with "scss/at-rule-no-unknown"
// in order to make it compatible with "stylelint-config-recommended-scss"

module.exports = {
  rules: {
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["export", "import", "global", "local", "external"]
      }
    ],
    "selector-type-no-unknown": [
      true,
      {
        ignoreTypes: ["from"]
      }
    ],
    "property-no-unknown": [
      true,
      {
        ignoreProperties: ["composes", "compose-with"],
        ignoreSelectors: [":export", /^:import/]
      }
    ],
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["value"]
      }
    ],
    "value-keyword-case": [
      "lower",
      {
        ignoreProperties: ["composes", "compose-with"]
      }
    ]
  }
};
