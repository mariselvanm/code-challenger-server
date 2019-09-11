/**
 * Author : Mariselvan
 * Server js for starting the server
 * Attache every route to the app
 */
import ScoreRoute from './app/routes/scoreboardroute';
import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'codechallenger'
});
 
// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Enable all CORS request
app.use(cors());
ScoreRoute.scoreRoute(app);

/**
 * Error handling parts are manged here
 * At the end of all route definition is end.
 * Source :
 * https://davidburgos.blog/how-to-handle-404-and-500-errors-on-expressjs/
 */
// 404
app.use(function(req, res, next) {
    return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
});
  
// 500 - Any server error
app.use(function(err, req, res, next) {
    return res.status(500).send({ error: err });
});

export default app;
