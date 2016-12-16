//var webpack = require('webpack'); 
var path = require('path');
var HtmlPackPlugin = require('html-webpack-plugin'); 

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './main.js',
    output: {
        path: path.join(__dirname, 'dist'), 
        filename: 'bundle.js'
    }, 
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: path.join(__dirname, 'src')
                // query: {
                //     presets: ['react']
                // }                
            }
        ]        
    }, 
    devServer: {
        contentBase: path.join(__dirname, 'dist'), 
        inline: true, 
        stats: 'errors-only'
    }, 
    plugins: [
        new HtmlPackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            inject: 'body',  
            hash: true, 
            filename: 'index.html'
            //chunks: ['about'] 
            //excludeChunks: []

        })        
    ]
}; 