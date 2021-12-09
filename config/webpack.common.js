const proxy = require("http-proxy-middleware");

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, // Everytime when we add a .mjs || .js file we want it to be processed by babel
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '/public/assets/images/[name].[ext]'
                }

            }
        ]
    },
}
