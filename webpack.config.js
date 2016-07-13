module.exports = {
    /* to make the build from javascript source code */
    entry: './src/index.js',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    /* to be able to use es2015 in javascript source code */
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};