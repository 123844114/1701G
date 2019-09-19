import obj ,{a}from './a'
import {arr} from './b'

//引入css
// import './css/base'
import '@css/base'
import './css/home.scss'
import './font/iconfont'
console.log(obj,arr)
console.log('main')

import $ajax from 'axios'
import './images/1.png'
// const fs=require('fs')
// 发起前端请求
// $ajax.get('/list?id=0').then(({data})=>{
//     let app=document.getElementById('app')
//     app.innerHTML=data.map(item=>`<p>${item.name}:${item.sex}</p>`).join('')
// })

// //发post请求
// $ajax.post('/login',{user:'mayun',pwd:'666'}).then(({data})=>{
//     console.log(data)
// })