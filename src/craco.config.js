const CracoEsbuildPlugin = require('craco-esbuild');
const { ProvidePlugin } = require('webpack');
const cracoModuleFederation = require('craco-module-federation');

module.exports = {
    plugins: [
        { plugin: CracoEsbuildPlugin },
        { plugin: cracoModuleFederation },
    ],
    devServer: {
        proxy: {
            '/vis.0': 'http://localhost:8082',
            '/adapter': 'http://localhost:8082',
            '/habpanel': 'http://localhost:8082',
            '/vis': 'http://localhost:8082',
            '/widgets': 'http://localhost:8082/vis',
            '/widgets.html': 'http://localhost:8082/vis',
            '/web': 'http://localhost:8082',
        },
    },
    webpack: {
        output: {
            publicPath: './',
        },
        plugins: [
            new ProvidePlugin({
                React: 'react',
            }),
        ],
    },
};
