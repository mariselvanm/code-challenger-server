import scoreRouteController from '../controllers/scoreboardcontroller';

const scoreRoute = app => {
    app.route('/getAllScores').get(scoreRouteController.getAllScores);
};

export default { scoreRoute };
