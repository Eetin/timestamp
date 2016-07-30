var strftime = require('strftime')
var path = require('path')
var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/:timestamp', function(req, res) {
    var response = { unix: null, natural: null }
    var timestamp = req.params.timestamp
    var date
    if (isNaN(timestamp)) {
        date = new Date(timestamp)
    } else {
        date = new Date(+timestamp * 1000)
    }
    if (!isNaN(date.getTime())) {
        response = {
            unix: Math.floor(date.getTime() / 1000),
            natural: strftime('%B %e, %Y', date)
        }
    }
    res.json(response)
})

app.listen(process.env.PORT || 8080)