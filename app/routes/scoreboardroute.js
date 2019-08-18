import scoreRouteController from '../controllers/scoreboardcontroller';

class ScoreRoute {
    static scoreRoute = app => {
        app.route('/api/getAllScores').get(scoreRouteController.getAllScores);
    };
};

export default ScoreRoute;
