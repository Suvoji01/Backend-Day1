const express = require('express')
const app = express()

// app.get('/', function (req, res) {
//   res.send('<h1>Hello World yo</h1>')
// })

// app.get('/about',(req,res)=>{
//     res.send("this is about page")
// })

const appRouter = require('../Day1/Router/AppRoute')

app.use(appRouter)

app.listen(1500)