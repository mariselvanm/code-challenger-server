import SignUpController from '../controllers/signUpController';

class SignUp {
    static signUp = (app) => {
        app.route('/api/signup').get(SignUpController.signUpUser);
    }
};

export default SignUp;
