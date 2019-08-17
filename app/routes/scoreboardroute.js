import scoreRouteController from '../controllers/scoreboardcontroller';

class ScoreRoute {
    static scoreRoute = app => {
        app.route('/getAllScores').get(scoreRouteController.getAllScores);
    };
};

export default ScoreRoute;
