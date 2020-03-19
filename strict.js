module.exports = {
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "color-named": "never",
    "color-no-hex": true,
    "font-family-name-quotes": "always-where-recommended",
    "font-weight-notation": ["numeric", { ignore: "relative" }],
    "function-url-quotes": "always",
    "max-nesting-depth": 3,
    "string-quotes": "double",
    "declaration-property-unit-whitelist": {
      "/^(transition|animation)/": ["s"]
    },
    "selector-attribute-quotes": "always",
    "selector-max-compound-selectors": 3,
    "selector-no-qualifying-type": true,

    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/declaration-nested-properties": "never",

    // order rules
    "order/order": ["custom-properties", "dollar-variables", "declarations"]
  }
};
