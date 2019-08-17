import { db } from './db';

class scoreBoardModel {
    static getAllScoresList = callback => {
        db.query(`SELECT users.id,SUM(scoreboard.score) AS totalscore,users.username 
            FROM scoreboard JOIN users ON users.id = scoreboard.userid GROUP BY users.id 
            ORDER BY totalscore DESC`, (err,response) => {
                callback(err, response);
        });
    }
};

export default scoreBoardModel;