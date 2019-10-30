module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'explorer >= 11']
        },
        // useBuiltIns: 'usage',
        // corejs: 3,
        debug: false
      }
    ],
    'next/babel'
  ],
  // If we have a source as CJS then we need to have source set to unambiguous
  sourceType: 'unambiguous',
  ignore: ['node_modules/**'],
  plugins: ['emotion']
}
