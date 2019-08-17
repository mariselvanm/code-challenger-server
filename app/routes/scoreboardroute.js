import scoreRouteController from '../controllers/scoreboardcontroller';

const SCOREROUTE = app => {
    app.route('/getAllScores').get(scoreRouteController.getAllScores);
};

export { SCOREROUTE };
