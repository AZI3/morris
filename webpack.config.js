var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        host: '127.0.0.1',
        port: 8080,
        open: true,
        historyApiFallback: true,
        inline: true,
        hot: true,
        compress: true
    }
};