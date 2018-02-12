# stylelint-config-SCSS

A personal stylelint config for SCSS syntax based on [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard), [stylelint-scss plugin](https://github.com/kristerkari/stylelint-scss), [stylelint-config-recommended-scss](https://github.com/kristerkari/stylelint-config-recommended-scss) and [stylelint-order](https://github.com/hudochenkov/stylelint-order).

## Default Config

### `stylelint-config-scss`

Add SCSS syntax rules to respect the [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) code style scheme.

## Optional Configs

### `stylelint-config-scss/order-bootstrap`

Keep properties in [bootstrap order](https://github.com/twbs/bootstrap/blob/v4-dev/.stylelintrc).

### `stylelint-config-scss/order-csscomb`

Keep properties in [csscomb order](https://github.com/csscomb/csscomb.js/blob/dev/config/csscomb.json).

### `stylelint-config-scss/order-yandex`

Keep properties in [yandex order](https://github.com/csscomb/csscomb.js/blob/dev/config/yandex.json).

### `stylelint-config-scss/order-zen`

Keep properties in [zen order](https://github.com/csscomb/csscomb.js/blob/dev/config/zen.json).

### `stylelint-config-scss/no-prefixes`

Disallow vendor prefixes for properties, values, at-rules, etc.

### `stylelint-config-scss/strict`

My opinionated configs.

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
