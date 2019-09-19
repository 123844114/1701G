
const path = require('path')
const htmlWebPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CssExtractTextPlugin =new ExtractTextPlugin('style.css')
const ScssExtractTextPlugin =new ExtractTextPlugin('scss.css')
const listJson = require('./src/data/list.json')
const bodyParser = require('body-parser')
const webpack = require('webpack')
module.exports={
    mode:'development',//模式 'development' or 'production'
    entry:'./src/main.js',//可以相对路径，也可以时绝对路径,但入口
    // entry:{//对入口
    //     main:'./src/main.js',
    //     home:'./src/home.js'
    // },
    output:{
        filename:'bundle.js',
        // filename:'[name]-[hash].js',
        path:path.resolve(__dirname,'dist')  //必须是路径
    },
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
            template:path.resolve(__dirname,'index.html')
        }) ,//实例化一个插件
        // new ExtractTextPlugin({
        //     filename:'style.css'
        // })
        CssExtractTextPlugin,
        ScssExtractTextPlugin
        
    ],
    devServer:{
        open:true,
        port:4000,
        host:'localhost',
        // hotOnly:true,
        hot:true,//默认就有，可以不配置
        before(app){ //配置后端接口
            app.get('/list',(req,res)=>{
                console.log(req.query)
                res.send(listJson)
            }),
            //post接口
            app.post('/login',bodyParser.json(),(req,res)=>{
                console.log(req.body)
                res.send({code:0,msg:'success'})
            })
        }
    },
    resolve:{
        extensions:['.css','.js','.scss'],//省略扩展名
        alias:{//简写路径
            "@css":path.resolve(__dirname,'./src/css'),
            "@images":path.resolve(__dirname,'./src/images')
        }
    }
}