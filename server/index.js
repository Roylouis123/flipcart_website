import express from 'express';
import Connection from './database/db.js';
import DefaultData from './default.js';
import  router  from './router/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use("/",router)

Connection();

app.listen(4500, () => {
    console.log('Listening on port===== 4500');
});


// DefaultData();