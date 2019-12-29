module.exports = {
  plugins: ["stylelint-order"],
  rules: {
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-mixin-argumentless-call-parentheses": "never",
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/declaration-nested-properties": "never",
    "scss/selector-no-redundant-nesting-selector": true,

    // order rules
    "order/order": ["custom-properties", "dollar-variables", "declarations"]
  }
};
