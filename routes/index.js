const route = require('express').Router()
const path  = require('path')

route.get('/', (req,res) => res.render('home'))
route.get('/tournaments/msw_wakandan_league', (req,res) => res.render('msw_wakandan_league'))

exports = module.exports = route;  