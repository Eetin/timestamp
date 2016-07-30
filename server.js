var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('Hello New World!')
})

app.listen(8080, function() {
    console.log('Express app listening on port 8080')
})