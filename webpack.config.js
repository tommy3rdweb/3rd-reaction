var path = require('path');
var SRC = path.join(__dirname, 'src/');
var NODE_MODULES = path.join(__dirname, 'node_modules/');

var config = {
    entry: './src',
    output: {
        path: './client',
        filename: '3rd-reaction.js'
    },
    resolve: {
        root: [SRC, NODE_MODULES],
        alias: {
            'actions': path.join(SRC, 'actions/'),
        }
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel']
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.jsx/,
                loaders: ['babel']
            }
        ]
    }
}

module.exports = config;