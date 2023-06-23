const {createTransport} = require("nodemailer");
require('dotenv').config();
const email_config = require('../config/emailConfig.js');
const transporter = createTransport(email_config);
const ejs = require("ejs");
const path = require('path')



async function sendMail(){
    const message_options = {
        from: process.env.EMAIL_USER,
        to: ["joankabura1@gmail.com", "jonathan.mwaniki@thejitu.com"],
        subject: "Weekly Report",
        html: await ejs.renderFile(path.join(__dirname, '../views/body.ejs')),
        attachments: [
            {
                filename: 'Week 8 Report.docx',
                path: './Week 8 Report.docx'
            }
        ]
    }
    
    try {
        let results =  await transporter.sendMail(message_options)
        console.log(results);
    } catch (error) {
        console.log(error);
    }
}

module.exports = sendMail;