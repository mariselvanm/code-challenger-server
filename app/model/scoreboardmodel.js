import { db } from './db';

class scoreBoardModel {
    static getAllScoresList = callback => {
        db.query('Select * from users', (err,response) => {
            callback(err, response);
        });
    }
};

export default scoreBoardModel;