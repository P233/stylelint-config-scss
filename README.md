# stylelint-config-SCSS

A stylelint config for SCSS syntax based on [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard), [stylelint-config-recommended-scss](https://github.com/kristerkari/stylelint-config-recommended-scss), [stylelint-scss plugin](https://github.com/kristerkari/stylelint-scss) and [stylelint-order plugin](https://github.com/hudochenkov/stylelint-order).

## Configs

* `stylelint-config-scss`

  Add SCSS syntax rules to respect the [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) code style scheme.

* `stylelint-config-scss/order-bootstrap`

  [Optional] Keep properties in [bootstrap order](https://github.com/twbs/bootstrap/blob/v4-dev/.stylelintrc).
  
* `stylelint-config-scss/order-csscomb`

  [Optional] Keep properties in [csscomb order](https://github.com/csscomb/csscomb.js/blob/dev/config/csscomb.json).

* `stylelint-config-scss/order-yandex`

  [Optional] Keep properties in [yandex order](https://github.com/csscomb/csscomb.js/blob/dev/config/yandex.json).

* `stylelint-config-scss/order-zen`

  [Optional] Keep properties in [zen order](https://github.com/csscomb/csscomb.js/blob/dev/config/zen.json).

* `stylelint-config-scss/no-prefixes`

  [Optional] Disallow vendor prefixes for properties, values, at-rules, etc.

* `stylelint-config-scss/strict`

  [Optional] A personal opinionated configs.

## Usage

Install via

```
npm install P233/stylelint-config-SCSS --save-dev
```

then add the following code to your `.stylelintrc` file

```
{
  "extends": [
    "stylelint-config-scss",
    "stylelint-config-scss/order-csscomb",
    "stylelint-config-scss/no-prefixes",
    // other optional configs
  ]
}
```

## License

MIT License
