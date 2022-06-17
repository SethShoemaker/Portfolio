const path = require("path");

module.exports = {
    mode:'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                'test': /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                'test': /\.js$/i,
                use: ['babel-loader'],
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
}