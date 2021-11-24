const path = require('path')

module.exports = {
    //entry point
    entry: {
       app: '.src/index.js'
    },
    //exit point
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist'
    }
}