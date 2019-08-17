import scoreBoardModel from '../model/scoreboardmodel';

class scoreRouteController {
    
    static getAllScores = (req, res) => {
        scoreBoardModel.getAllScoresList((err, response) => {
            if (err) {
                res.send(err);
            }
            res.send(response);
        });
    };
}

export default scoreRouteController;