# stylelint-config-SCSS

A personal SCSS config for [stylelint](https://stylelint.io) extended on the [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard). It adds several SCSS lint rules introduced by the [stylelint-scss plugin](https://github.com/kristerkari/stylelint-scss) and a properties order restriction respect the [CSScomb default order](https://github.com/csscomb/csscomb.js/blob/dev/config/csscomb.json) by the [stylelint-order plugin](https://github.com/hudochenkov/stylelint-order).

If you'd like to discuss anything about the rules, please fill an issue.

## Installation

Install the package through

`npm install P233/stylelint-config-SCSS --save-dev`

and set your `stylelint` config to:

``` json
{
  "extends": "stylelint-config-scss"
}
```

## PostCSS-Sorting

There is also a [postcss-sorting](https://github.com/hudochenkov/postcss-sorting) config can help to sort the properties order to pass the lint. Please see [.postcssrc.json](./.postcssrc.json).
