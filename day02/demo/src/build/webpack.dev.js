const base = require('./webpack.base')
const Merge = require('webpack-merge')
const dev={
    mode:'development',//模式 'development' or 'production'
    devServer:{
        open:true,
        port:4000,
        host:'localhost',
        // hotOnly:true,
        hot:true,//默认就有，可以不配置
        // before(app){ //配置后端接口
        //     app.get('/list',(req,res)=>{
        //         console.log(req.query)
        //         res.send(listJson)
        //     }),
        //     //post接口
        //     app.post('/login',bodyParser.json(),(req,res)=>{
        //         console.log(req.body)
        //         res.send({code:0,msg:'success'})
        //     })
        // }
    }
}

module.exports=Merge(dev,base)