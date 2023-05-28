const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
        index: './index.js'
    },
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: false,
                    keep_classnames: true,
                    keep_fnames: true
                }
            }),
            '...'
        ]
    }
}
