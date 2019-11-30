// 1:引入框架模块
var express = require('express')

// 2:创建服务器
var app = express()

// 3:开启服务器并监听端口
app.listen(3000, () => {
    console.log('express server is running at http://127.0.0.1:3000');
})

// 4:给app对象注册中间件，监听请求
// use是一个中间件,可以用来监听get和post请求
app.use((req, res) => {
    res.send('express框架的基本使用...')
})