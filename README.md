# stylelint-config-scss

An opinionated stylelint configurations set.

## Configuration options

- [`stylelint-config-scss`](index.js): Add the basic SCSS lint rules to respect the [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) code style scheme.
- [`stylelint-config-scss/order-bootstrap`](./order-bootstrap.js): Specify properties order in [bootstrap order](https://github.com/twbs/bootstrap/blob/v4-dev/.stylelintrc).
- [`stylelint-config-scss/order-csscomb`](./order-csscomb.js): Specify properties order in [csscomb order](https://github.com/csscomb/csscomb.js/blob/dev/config/csscomb.json).
- [`stylelint-config-scss/order-yandex`](./order-yandex.js): Specify properties order in [yandex order](https://github.com/csscomb/csscomb.js/blob/dev/config/yandex.json).
- [`stylelint-config-scss/order-zen`](./order-zen.js): Specify properties order in [zen order](https://github.com/csscomb/csscomb.js/blob/dev/config/zen.json).

## Installation

```
npm install @p233/stylelint-config-scss --save-dev
```

```
yarn add @p233/stylelint-config-scss --dev
```

## Usage

Select the configurations for your needs and add them to your project `.stylelintrc` file:

```
{
  "extends": [
    "@p233/stylelint-config-scss",
    "@p233/stylelint-config-scss/order-bootstrap", // optional
  ]
}
```

## Changelog

### Version 3.0.0

1. Remove `@p233/stylelint-config-scss/strict` rules
2. Require stylelint 14 and above
