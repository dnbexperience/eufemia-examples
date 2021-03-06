/**
 * Next.js configuration
 *
 */

import withCSS from '@zeit/next-css'

export default withCSS({
  'postcss-css-variables': {},
  webpack: function(config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })
    return config
  }
})

// experminets
// if (typeof require !== 'undefined') {
//   require.extensions['.css'] = () => {}
// }
