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

export default app;
