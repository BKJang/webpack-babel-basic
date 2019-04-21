const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: {
                    loader: "html-loader",
                    options: {minimize: true}
                }
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ],
    resolve : {
        extensions : ['*', '.jsx', '.js']
    },
    devServer: {
        open : true,
        port: 3000
    }
}