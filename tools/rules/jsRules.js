const path = require('path')
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = function(config) {
    let configWebpack = config.webpack

    let rules = [
        {
            test: /\.(tsx?|js)$/,
            loader: 'awesome-typescript-loader',
            exclude: /node_modules/,
            options: {
                configFileName: path.join(
                    __dirname,
                    '../../tsconfig.webpack.json'
                ),
                getCustomTransformers: () => ({
                    before: [
                        tsImportPluginFactory({
                            libraryDirectory: 'es',
                            libraryName: 'antd-mobile',
                            style: 'css'
                        })
                    ]
                })
            }
        }
    ]

    return rules
}
