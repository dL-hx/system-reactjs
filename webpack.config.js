const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode:"development",// 配置开发模式
    entry:"./src/index.js",
    output: {
        path: path.join(__dirname,"build"),
        filename: "index.js",
        //指定构建需要的库
        libraryTarget: "system"
    },
    devtool: "source-map",
    devServer: {
        port:9000,
        contentBase:path.join(__dirname,"build"),
        historyApiFallback: true
    },
    module: {
        rules:[
            {// 匹配文件打包规则
                test:/\.js$/,
                exclude:/node_modules/,
                use:{// 配置打包loader
                    loader: "babel-loader",
                    options: {// 配置预设
                        presets:["@babel/preset-env","@babel/react"]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: "./src/index.html"
        })
    ],
    //添加打包排除选项
    externals:["react","react-dom","react-router-dom"]
};