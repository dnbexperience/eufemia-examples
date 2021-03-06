module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: false,
        targets: {
          browsers: ['last 2 versions', 'explorer >= 11']
        }
      }
    ],
    'vue'
  ],
  // If we have a source as CJS then we need to have source set to unambiguous
  sourceType: 'unambiguous',
  ignore: ['node_modules/**'],
  plugins: ['@babel/plugin-proposal-class-properties']
}
