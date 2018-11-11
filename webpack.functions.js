module.exports = {
    target: 'node',
    node: {
        __dirname: false,
    },
    module: {
        rules: [
            //     {
            //     test: /\.(pem)$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             emitFile: true,
            //             name: '[name].[ext]'
            //         }
            //     }]
            // },
            {
                test: /\.pem$/,
                use: 'raw-loader'
            }
        ]
    }
}
