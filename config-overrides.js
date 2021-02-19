const {
    override,
    addDecoratorsLegacy,
    addWebpackAlias
} = require('customize-cra')
const path = require('path')
module.exports = override(
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
        '@images': path.resolve(__dirname, 'src/images'),

    })
)
