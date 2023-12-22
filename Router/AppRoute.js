const express = require('express')
const { Home, About } = require('../Controller/AppController')

const Router = express.Router()

Router.get('/',Home)

Router.get('/about',About)


module.exports=Router