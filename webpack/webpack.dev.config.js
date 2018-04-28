var webpack = require('webpack');
var path = require('path');

//var parentDir = path.join(__dirname, '../');

module.exports = {
    entry: [
        path.join(__dirname, '../index.js')
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.less$/,
            loaders: ["style-loader", "css-loader", "less-loader"]
        }
        ]
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, '../'),
        historyApiFallback: true
    }
}