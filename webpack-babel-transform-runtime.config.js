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
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ["@babel/preset-env", {
                            targets: "defaults"
                        }]
                    ],
                    plugins: ['@babel/plugin-transform-runtime']
                }
            }
        ]
    }
}
