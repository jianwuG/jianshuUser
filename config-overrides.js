const {
    override,
    addDecoratorsLegacy,
    addWebpackAlias,
    addLessLoader
} = require('customize-cra')
const path = require('path')
module.exports = override(
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@router': path.resolve(__dirname, 'src/router'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@common': path.resolve(__dirname, 'src/common'),
        '@assets': path.resolve(__dirname, 'src/assets'),

    }),
    addLessLoader({
        javascriptEnabled: true,
        localIdentName: '[local]--[hash:base64:5]'
    })
)
