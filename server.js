const express = require('express');
const routes = require('./src/routes/routes.js');
const app = express();


app.use(express.json());

app.get('/', (req, res) =>{
    res.send('ok')
})

app.use(routes)
app.set("view engine", "ejs")

const port = 5005;

app.listen(port, ()=> console.log(`Server is listening at port ${port}`))