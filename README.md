<div style="text-align: center;" align="center">

# egg-plugin-validate

An egg plugin for validating parameters, Forked from [egg-validate](https://github.com/eggjs/egg-validate), And added two built-in custom rules for `object` and `array`

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

<div style="text-align: center; margin-bottom: 20px;" align="center">

See [parameter](https://github.com/node-modules/parameter) for more information such as custom rule.

</div>

## Install

```bash
# use pnpm
$ pnpm install egg-plugin-validate

# use yarn
$ yarn add egg-plugin-validate
```

## Usage

```js
// {app_root}/config/plugin.js
exports.validate = {
  enable: true,
  package: 'egg-plugin-validate'
}
```

## Configurations

egg-plugin-validate support all parameter's configurations, check [parameter documents](https://github.com/node-modules/parameter) to get more information.

```js
// {app_root}/config/config.default.js
exports.validate = {
  // convert: false,
  // validateRoot: false,
}
```

### Validate Request Body

```js
// {app_root}/app/controller/home.js
const { Controller } = require('egg')

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this
    ctx.validate({ id: 'id' }) // will throw if invalid
    // or
    const errors = app.validator.validate({ id: 'id' }, ctx.request.body)
  }
}

module.exports = HomeController
```

## Extend Rules

- {app_root}/app.js

```js
app.validator.addRule('object', (rule, value) => {
  try {
    JSON.parse(value)
  } catch (err) {
    return 'must be json string'
  }
})
```

## Change logs

[Change logs](./CHANGELOG.md)

## Questions & Suggestions

Please open an issue [here](https://github.com/saqqdy/egg-plugin-validate/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/egg-plugin-validate.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-plugin-validate
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/egg-plugin-validate/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/egg-plugin-validate&utm_campaign=Badge_Grade
[snyk-image]: https://snyk.io/test/npm/egg-plugin-validate/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-plugin-validate
[download-image]: https://img.shields.io/npm/dm/egg-plugin-validate.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-plugin-validate
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_egg-plugin-validate
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_egg-plugin-validate
