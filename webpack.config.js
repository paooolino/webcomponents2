module.exports = {
    /* to make the build from javascript source code */
    entry: './src/index.js',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    /* to compile with babel before bundling */
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};