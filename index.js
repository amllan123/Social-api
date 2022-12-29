const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Its social api')
})
app.listen(process.env.PORT || 5000)