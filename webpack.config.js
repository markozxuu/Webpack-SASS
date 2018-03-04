const {join} = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/bundle.js',
        path: join(__dirname, 'dist')
    },
    devServer: {
        port: 8080,
        open: true
    },
    module: {
        rules: [
            //babel
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    }
                }
            },
            // SASS And CSS
            {
                // que tipo extension quiero reconocer
                test: /\.(scss|css|sass)$/,
                // Que loader se encargar del tipo extension del archivo
                use: ["style-loader", "css-loader", "sass-loader"]

            }
        ]
    },
};