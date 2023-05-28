const {EsbuildPlugin} = require('esbuild-loader')

module.exports = {
    entry: {
        index: './index.js'
    },
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new EsbuildPlugin({
                minifyWhitespace: true,
                minifyIdentifiers: false,
                minifySyntax: true,
            }),
            '...'
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'esbuild-loader',
            }
        ]
    }
}
