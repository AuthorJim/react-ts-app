const express = require('express')

const Router = express.Router()
const User = require('../model').getModel('user')
const _filter = { pwd: 0, __v: 0 }

Router.get('/list', function(req, res) {
    // User.remove({},function(e,d){})
    User.find({}, function(err, doc) {
        return res.json(doc)
    })
})
Router.post('/login', function(req, res) {
    const { user, pwd } = req.body
    console.log('=================user=================', user)
    console.log('=================pwd=================', pwd)
    User.findOne({ user, pwd }, _filter, function(err, doc) {
        if (!doc) {
            return res.json({ code: 1, msg: '用户名或者密码错误' })
        }
        res.cookie('userid', doc._id)
        return res.json({ code: 0, data: doc })
    })
})
Router.post('/register', function(req, res) {
    const { user, pwd, type } = req.body
    console.log('=================user=================', user)
    console.log('=================pwd=================', pwd)
    console.log('=================type=================', type)
    // console.log('=================req================', req)
    User.findOne({ user }, function(err, doc) {
        if (doc) {
            return res.json({ code: 1, msg: '用户名重复' })
        }

        const userModel = new User({ user, type, pwd })
        userModel.save(function(e, d) {
            const { user, type, _id } = d
            res.cookie('userid', _id)
            return res.json({ code: 0, data: { user, type, _id } })
        })
    })
})
Router.get('/info', function(req, res) {
    const { userid } = req.cookies
    if (!userid) {
        return res.json({ code: 1 })
    }
    User.findOne({ _id: userid }, _filter, function(err, doc) {
        if (err) {
            return res.json({ code: 1, msg: '后端出错了' })
        }
        if (doc) {
            return res.json({ code: 0, data: doc })
        }
    })
    // 用户有没有cookie
})

module.exports = Router
