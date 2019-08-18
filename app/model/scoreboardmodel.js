import { db } from './db';

class scoreBoardModel {
    static getAllScoresList = callback => {
        db.query(`SELECT users.id,SUM(scoreboard.score) AS score,users.username AS name 
            FROM scoreboard JOIN users ON users.id = scoreboard.userid GROUP BY users.id 
            ORDER BY score DESC`, (err,response) => {
                callback(err, response);
        });
    }
};

export default scoreBoardModel;