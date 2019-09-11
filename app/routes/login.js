import LoginController from '../controllers/loginController';

class Login {
    static login = (app) => {
        app.route('/api/login').get(LoginController.loginUser);
    };
};

export default Login;