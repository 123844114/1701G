
const path = require('path')
const htmlWebPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CssExtractTextPlugin =new ExtractTextPlugin('style.css')
const ScssExtractTextPlugin =new ExtractTextPlugin('scss.css')
const webpack = require('webpack')
module.exports={
    entry:path.resolve(__dirname,'../main.js'),//可以相对路径，也可以时绝对路径,但入口

    module:{
        rules:[
            // {
            //     test:/\.css$/,
            //     use:['style-loader','css-loader']//执行顺序从右往左，style与css顺序不能反
            // },
            {
                test:/\.css$/,
                use:CssExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            },
            // {
            //     test:/\.(scss|sass)$/,
            //     use:['style-loader','css-loader','sass-loader']//执行顺序从右往左，style与css顺序不能反
            // },
            {
                test:/\.(scss|sass)$/,
                use: ScssExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']
                })
            },
            {
                test:/\.js$/,
                include:/src/, //包含       exclude:/node_modules/ 排除
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }]
            },
            {
                test:/\.(png|jpeg|gif)$/,
                use:[{
                    loader:'url-loader',    //file-loader url-loader
                    options:{
                        limit:1000,
                        name:"./images/[name].[ext]"
                    }
                }]
            },{// 解析icon-font
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                use:['url-loader']
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),//模块热更新,不需要install，它webpack自带的
        new htmlWebPlugin({
            title:'这是一个demo',
            filename:'index.html',
            template:path.resolve(__dirname,'../../index.html')
        }) ,//实例化一个插件
        // new ExtractTextPlugin({
        //     filename:'style.css'
        // })
        CssExtractTextPlugin,
        ScssExtractTextPlugin
        
    ],
    resolve:{
        extensions:['.css','.js','.scss'],//省略扩展名
        alias:{//简写路径
            "@css":path.resolve(__dirname,'../css'),
            "@images":path.resolve(__dirname,'../images')
        }
    }
}