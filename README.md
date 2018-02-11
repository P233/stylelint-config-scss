# stylelint-config-SCSS

A personal stylelint config for SCSS syntax based on the [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) and the [stylelint-scss plugin](https://github.com/kristerkari/stylelint-scss). It also provides optional configs such as `order-csscomb` and `no-prefixs`.

## Optional configs

* `stylelint-config-scss/no-prefixs`
* `stylelint-config-scss/order-csscomb`
* `stylelint-config-scss/order-bootstrap`
* `stylelint-config-scss/order-yandex`
* `stylelint-config-scss/order-zen`
* `stylelint-config-scss/strict`

## Usage

Install via

```
npm install P233/stylelint-config-SCSS --save-dev
```

then add the following code to your `.stylelintrc` file

``` json
{
  "extends": [
    "stylelint-config-scss",
    "stylelint-config-scss/order-csscomb",
    "stylelint-config-scss/no-prefixs",
    // other optional configs
  ]
}
```
