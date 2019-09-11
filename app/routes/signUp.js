import SignUpController from '../controllers/signUpController';

class SignUp {
    static signUp = (app) => {
        app.route('/api/signUp').get(SignUpController.signUpUser);
    }
};

export default SignUp;
