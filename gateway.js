const express = require('express')
const router = require('./router')
const app = express()
const PORT = 8000

app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    console.log(`Сервер запущен на порте ${PORT}`)
})
