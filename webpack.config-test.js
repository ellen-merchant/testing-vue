var nodeExternals = require('webpack-node-externals');
var isCoverage = process.env.NODE_ENV === 'coverage';
var path = require('path');

module.exports = {
    output: {
        // use absolute paths in sourcemaps (important for debugging via IDE)
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },
    module: {
        rules: [].concat(
            isCoverage ? {
                test: /\.js$|\.jsx$/,
                use: {
                    loader: 'istanbul-instrumenter-loader',
                    options: {
                        esModules: true
                    }
                },
                enforce: 'post',
                exclude: /node_modules|\.spec\.js$/,
            } : []
        ),
        // ...
    },
    target: 'node', // webpack should compile node compatible code
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    devtool: "inline-cheap-module-source-map"
};