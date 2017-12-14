const path = require('path')
module.exports = {
    entry: {
        path: path.join(__dirname + '/src/event.js')

    },
    output: {
        path: path.join(__dirname + '/dist'),
        filename: "event.js"

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
}