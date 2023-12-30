const express  = require('express');
const cors = require('cors')
const bodyParser=require('body-parser');
require ('dotenv').config();
const cookieParser = require('cookie-parser');
const routes = require('./routes')


const app = express();

// middlware
app.use(cors());
var corsOptions = {
    // origin: 'https://treatmentola.com/',
    origin: 'https://localhost:3000/',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use(routes);







//testing api

app.get('/', (req, res) =>{
    res.json({message: "Hello Treatmentola"})
})

// port
const PORT = process.env.PORT || 3310


// server
app.listen(PORT, ()=>{
    // console.log(`server is running on port${PORT}`)
})



