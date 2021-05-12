module.exports = {
  "presets": ["@babel/preset-env", [
    "@babel/preset-typescript", {
      isTSX: true,
      allExtensions: true
    }
  ]],
  "plugins": [
    require('./plugins/first'),
    require('./plugins/babel-plugin-i18n-key')
  ]
}