const webpack = require("webpack") //  没有该插件需下载
module.exports = {
    publicPath: '/',
    configureWebpack: {
        // devtool
        devtool: 'cheap-module-eval-source-map',
        plugins: [　　
            new webpack.ProvidePlugin({　　　　　　　　　　　　
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
                Popper: ['popper.js', 'default']　　　　　　　
            })
        ]　　　　　
    },
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost",
        port: '8080',
        https: false, //是否使用https协议
        hotOnly: false, //是否开启热更新
        proxy: {
            '/api': {
                // target: 'http://localhost:3000', //API服务器的地址
                target: 'https://api.douban.com/v2', //API服务器的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}