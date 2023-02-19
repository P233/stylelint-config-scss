# stylelint-config-scss

An opinionated stylelint configurations set.

## Configuration options

- [`stylelint-config-scss`](index.js): Add the basic SCSS lint rules to respect the [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) code style scheme.
- [`stylelint-config-recess-order`](https://www.npmjs.com/package/stylelint-config-recess-order) A Stylelint config that sorts CSS properties the way Recess did and Bootstrap did/does.
- [`stylelint-config-scss/css-modules`](./css-modules.js): A fork of [stylelint-config-css-modules](https://github.com/pascalduez/stylelint-config-css-modules) to balance css-modules rules in SCSS

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
  ]
}
```

## Changelog

### Vesion 4.0.0

1. Upgrade to fit stylelist 15
2. Remove all order rules (`order-bootstrap`, `order-csscomb`, `order-yandex`, `order-zen`), and use [stylelint-config-recess-order](https://www.npmjs.com/package/stylelint-config-recess-order) instead.

### Version 3.1.1

1. Disable `selector-class-pattern` when using `css-modules`
2. Disable `value-keyword-case` for `composes` and `compose-with` properties when using `css-modules`

_Because you might use kebab-case / camelCase / PascalCase for selectors in CSS Modules._

### Version 3.1.0

1. Add `@p233/stylelint-config-scss/css-modules` rules

### Version 3.0.2

1. Remove `@p233/stylelint-config-scss/no-prefixes` rules

### Version 3.0.0

1. Require stylelint 14 and above
2. Remove `@p233/stylelint-config-scss/strict` rules

## Credits

- [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
- [stylelint-config-recommended-scss](https://github.com/stylelint-scss/stylelint-config-recommended-scss)
- [stylelint-config-css-modules](https://github.com/pascalduez/stylelint-config-css-modules)
- [stylelint-config-twbs-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap)
- [csscomb.js](https://github.com/csscomb/csscomb.js)
