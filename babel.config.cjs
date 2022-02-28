module.exports = function defaultExport(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
  }
}
