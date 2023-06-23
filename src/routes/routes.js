const routes = require('express'). Router();
const sendMail = require('../utils/sendMail')
require('dotenv').config()

routes.post('/sendmail', (req, res)=>{
    res.send("Sending....")
    sendMail()
})

module.exports = routes;