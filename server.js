const express = require('express');
const doenv = require('dotenv');
const morgan = require('morgan')
const bodyparser = require('body-parser'); 
const path = require("path");

const app = express();

doenv.config({path:'config.env'})
const PORT = process.env.PORT||8080

app.use(morgan('tiny'));

app.use(bodyparser.urlencoded({extended:true}))

//app.set("views",path.resolve(__dirname,"view/ejs"))

app.set("view engine", "ejs")

app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

app.get('/',(req, res)=>{
    res.render('index.ejs');
}
)

app.listen(PORT,()=>{console.log('server is running http://localhost:${PORT}')})

