const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const postcssPresetEnv = require('postcss-preset-env')
const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // exclude: [/node_modules\/(?!(dnb-ui-lib)\/).*/], // do not exlude one or more packages
        exclude: [/node_modules/], // intention: exclude dependencies from transpilation
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          process.env.NODE_ENV === 'development'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                postcssPresetEnv({
                  stage: 0,
                  preserve: true, // so we get the calc from vars, to process for IE11 later with "postcss-calc"
                  browsers: ['last 2 versions', 'explorer >= 11'],
                  importFrom: [
                    path.resolve(
                      __dirname,
                      '../../node_modules/dnb-ui-lib/style/dnb-ui-properties.css'
                    ),
                    path.resolve(
                      __dirname,
                      '../../node_modules/dnb-ui-lib/style/dnb-ui-components.css'
                    )
                  ]
                })
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    })
  ],
  devtool: 'source-map'
}
