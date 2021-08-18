const route = require('express').Router()
const path  = require('path')

route.get('/', (req,res) => res.render('home'))
route.get('/tournaments/surtur_crown_championship', (req,res) => res.render('surtur_crown_championship'))

exports = module.exports = route;  