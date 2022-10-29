const express = require('express');
const router = express.Router()
const axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:3000',
});

router.get('/users', (req, res) => {
    api.get('').then(resp => {
        res.send(resp.data)
    }).catch(error => {
        res.send(error)
    })
})

router.get('/login', (req, res) => {
    api.get(req.path, {params: {...req.query}}).then(resp => {
        res.send(resp.data)
    }).catch(error => {
        res.send(error)
    })
})

module.exports = router
